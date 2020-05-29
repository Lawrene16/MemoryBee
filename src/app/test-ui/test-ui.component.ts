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


@Component({
  selector: "app-test-ui",
  templateUrl: "./test-ui.component.html",
  styleUrls: ["./test-ui.component.scss"],
})
export class TestUiComponent {
  @Output() choiceMade = new EventEmitter();

  @Input("cards") cards: Array<{
    question: string;
    isContentHidden: any;
    opacity: any;
    paddingTop: any;
    paddingLeft: any;
    paddingRight: any;
    paddingBottom: any;
    questionFontSize: any;
    topHeight: any;
  }>;

  cardsFiltered: Array<{
    question: string;
    isContentHidden: any;
    opacity: any;
    paddingTop: any;
    paddingLeft: any;
    paddingRight: any;
    paddingBottom: any;
    questionFontSize: any;
    topHeight: any;
  }>;

  topPaddingTop = "100px";
  topPaddingLeft = "40px";
  topPaddingRight = "40px";
  topPaddingBottom = "100px";
  questionFontSize = "24px";
  topHeight = "auto";
  bottomHeight = "10px";
  bottomVisible = "hidden";

  hideAnswer = true;

  @ViewChildren("tinderCard") tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;

  moveOutWidth: number; // value in pixels that a card needs to travel to dissapear from screen
  shiftRequired: boolean; // state variable that indicates we need to remove the top card of the stack
  transitionInProgress: boolean; // state variable that indicates currently there is transition on-going
  heartVisible: boolean;
  crossVisible: boolean;

  constructor(
    private renderer: Renderer2 // public dragula: DragulaService
  ) {
    setTimeout(() => {
      this.cardsFiltered = this.cards;
      this.cards = [];
      for (var i = 0; i < this.cardsFiltered.length; i++) {
        if (i < 3) {
          this.cards.push(this.cardsFiltered[i]);
        }
        this.changeOpacity();
      }

      let tinderCardElement = document.getElementById("testcards");
      let hamming = new Hammer(tinderCardElement);
      hamming.on("panleft panright tap press pressup panend", (ev) => {
        if (ev.type == "panend") {
          this.handlePanEnd(ev);
        } else if (ev.type == "panright") {
          if (this.cardsFiltered.length > 2) {
            this.handlePan(ev);
          }
        } else if (ev.type == "panleft") {
          if (this.cardsFiltered.length > 2) {
          }
        }
      });
    }, 300);

    setTimeout(() => {
      this.changeOpacity();
    }, 500);
  }


  userClickedButton(heart) {
    // event.preventDefault();
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

      this.switchArrayObjects();
      this.changeOpacity();
    }
  }

  switchArrayObjects() {
    this.cardsFiltered.push(this.cards[0]);
    this.cardsFiltered.shift();
    this.cards.shift();
    this.cards.push(this.cardsFiltered[this.cards.length]);
  }

  changeOpacity() {
    for (var i = 0; i < this.cards.length; i++) {
      if (i < 3) {
        switch (i) {
          case 0:
            this.cards[i].opacity = 1;
            break;

          case 1:
            this.cards[i].opacity = 0.7;
            break;

          case 2:
            this.cards[i].opacity = 0.4;
            break;
        }
      }
    }
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

  hideOrShowAnswer() {
    switch (this.hideAnswer) {
      case false:
        this.topPaddingTop = "100px";
        this.topPaddingLeft = "40px";
        this.topPaddingRight = "40px";
        this.topPaddingBottom = "100px";
        this.questionFontSize = "24px";
        this.topHeight = "auto";
        // this.arrowButtonPosition = "53%";
        this.bottomHeight = "10px";
        this.bottomVisible = "hidden";
        break;

      case true:
        this.topPaddingTop = "10px";
        this.topPaddingLeft = "20px";
        this.topPaddingRight = "20px";
        this.topPaddingBottom = "10px";
        this.topHeight = "10vh";
        this.bottomHeight = "55vh";
        this.bottomVisible = "visible";
        // this.arrowButtonPosition = "35%";
        this.questionFontSize = "16px";

        break;
    }

    this.hideAnswer = !this.hideAnswer;
  }

  goToNextQuestion() {
    this.userClickedButton(true);
  }
}
