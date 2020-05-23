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
  selector: "app-tinder-ui",
  templateUrl: "./tinder-ui.component.html",
  styleUrls: ["./tinder-ui.component.scss"],
})
export class TinderUiComponent {
  @Output() choiceMade = new EventEmitter();

  @Input("cards") cards: Array<{
    title: string;
    description: string;
    decks: any;
    isContentHidden: any;
    cardHeight;
    deckIsChecked:any;
  }>;

  currentCard;

  cardOpacity;
  bar: any;
  @ViewChildren("tinderCard") tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;

  moveOutWidth: number; // value in pixels that a card needs to travel to dissapear from screen
  shiftRequired: boolean; // state variable that indicates we need to remove the top card of the stack
  transitionInProgress: boolean; // state variable that indicates currently there is transition on-going
  heartVisible: boolean;
  crossVisible: boolean;

  testdeck = ["", "", "", "", ""];

  // test = 50;
  buttonValue = "study";
  hideStudyProgress;

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

      // var checkBox = document.getElementById("myCheck");
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

  toggleChoiceIndicator(cross, heart) {
    this.crossVisible = cross;
    this.heartVisible = heart;
  }

  handleShift() {
    this.transitionInProgress = false;
    this.toggleChoiceIndicator(false, false);
    if (this.shiftRequired) {
      this.shiftRequired = false;

      // this.currentCard = this.cards[0];
      this.cards.shift();
      // this.cards.push(this.currentCard);
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
}
