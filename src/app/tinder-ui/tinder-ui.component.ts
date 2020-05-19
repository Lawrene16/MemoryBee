import {
  Component,
  Input,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
} from "@angular/core";

declare var ProgressBar: any;

@Component({
  selector: "app-tinder-ui",
  templateUrl: "./tinder-ui.component.html",
  styleUrls: ["./tinder-ui.component.scss"],
})
export class TinderUiComponent {
  @Output() choiceMade = new EventEmitter();
  @Input("cards") cards: Array<{
    img: string;
    title: string;
    description: string;
    progress: number;
    topics: Array<string>
  }>;
  cardOpacity
  bar: any;
  @ViewChildren("tinderCard") tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;

  moveOutWidth: number; // value in pixels that a card needs to travel to dissapear from screen
  shiftRequired: boolean; // state variable that indicates we need to remove the top card of the stack
  transitionInProgress: boolean; // state variable that indicates currently there is transition on-going
  heartVisible: boolean;
  crossVisible: boolean;

  test = 50;

  constructor(private renderer: Renderer2) {
    setTimeout(() => {
      let tinderCardElement = document.getElementById("tindercards");
      let hamming = new Hammer(tinderCardElement);
      hamming.on("panleft panright tap press pressup panend", (ev) => {
        if (ev.type == "panleft") {
          this.userClickedButton(ev, false);
        } else if (ev.type == "panright") {
          this.userClickedButton(ev, true);
        } else if (ev.type == "panend") {
        }
      });
    }, 300);
  }

  userClickedButton(event, heart) {
    event.preventDefault();
    if (!this.cards.length) return false;
    if (heart) {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        "transform",
        "translate(" + this.moveOutWidth + "px, -100px) rotate(-30deg)"
      );
      this.toggleChoiceIndicator(false, true);
      this.emitChoice(heart, this.cards[0]);
    } else {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        "transform",
        "translate(-" + this.moveOutWidth + "px, -100px) rotate(30deg)"
      );
      this.toggleChoiceIndicator(true, false);
      this.emitChoice(heart, this.cards[0]);
    }
    this.shiftRequired = true;
    this.transitionInProgress = true;
  }

  handlePan(event) {
    // console.log("event")
    if (
      event.deltaX === 0 ||
      (event.center.x === 0 && event.center.y === 0) ||
      !this.cards.length
    )
      return;

    if (this.transitionInProgress) {
      this.handleShift();
    }

    this.renderer.addClass(this.tinderCardsArray[0].nativeElement, "moving");

    if (event.deltaX > 0) {
      this.toggleChoiceIndicator(false, true);
    }
    if (event.deltaX < 0) {
      this.toggleChoiceIndicator(true, false);
    }

    let xMulti = event.deltaX * 0.03;
    let yMulti = event.deltaY / 80;
    let rotate = xMulti * yMulti;

    this.renderer.setStyle(
      this.tinderCardsArray[0].nativeElement,
      "transform",
      "translate(" +
        event.deltaX +
        "px, " +
        event.deltaY +
        "px) rotate(" +
        rotate +
        "deg)"
    );

    this.shiftRequired = true;
  }

  handlePanEnd(event) {
    this.toggleChoiceIndicator(false, false);

    if (!this.cards.length) return;

    this.renderer.removeClass(this.tinderCardsArray[0].nativeElement, "moving");

    let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
    if (keep) {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        "transform",
        ""
      );
      this.shiftRequired = false;
    } else {
      let endX = Math.max(
        Math.abs(event.velocityX) * this.moveOutWidth,
        this.moveOutWidth
      );
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * this.moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        "transform",
        "translate(" +
          toX +
          "px, " +
          (toY + event.deltaY) +
          "px) rotate(" +
          rotate +
          "deg)"
      );

      this.shiftRequired = true;

      this.emitChoice(!!(event.deltaX > 0), this.cards[0]);
    }
    this.transitionInProgress = true;
  }

  toggleChoiceIndicator(cross, heart) {
    this.crossVisible = cross;
    this.heartVisible = heart;
  }

  handleShift() {
    this.transitionInProgress = false;
    this.toggleChoiceIndicator(false, false);
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.cards.shift();
    }

    console.log("shift handlee")
  }

  emitChoice(heart, card) {
    this.choiceMade.emit({
      choice: heart,
      payload: card,
    });
  }

  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.tinderCardsArray = this.tinderCards.toArray();
    this.tinderCards.changes.subscribe(() => {
      this.tinderCardsArray = this.tinderCards.toArray();
    });
  }
}
