import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-topics",
  templateUrl: "./topics.page.html",
  styleUrls: ["./topics.page.scss"],
})
export class TopicsPage implements OnInit {
  cards = ["fdfd", "dfjdwfk", "djjdjfjdhfdj"];

  topicTitlesArray: any = [];
  res: any;
  subject: any = "";

  topicsArray: any = [];
  questionsToDisplay: any = [];
  lastPosX = 0;
  lastPosY = 0;
  isDragging = false;

  cardheight = "37%";

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.subject = this.router.getCurrentNavigation().extras.state.subject;
        this.topicTitlesArray = this.router.getCurrentNavigation().extras.state.topics;
        this.res = this.router.getCurrentNavigation().extras.state.res;

      
            this.topicTitlesArray.forEach((topicString) => {
              this.topicsArray.push({
                title: topicString,
                questions: this.getQuestions(
                  this.res,
                  this.subject,
                  topicString
                ),
                decks: this.getDecks(this.res, this.subject, topicString),
              });
            });

      }
    });


  }

  expandQuestions(){
    if(this.cardheight == "69%"){
      this.cardheight = "37%";
      this.topicsArray.forEach((el) => {
        el.isContentHidden = false;
        el.cardHeight = "72%";

      });

    }else if(this.cardheight == "37%"){
      this.cardheight = "69%";
      this.topicsArray.forEach((el) => {
        el.isContentHidden = true;
        el.cardHeight = "15%";
      });
    }
  }

  handleDrag(ev, element) {
    if (!this.isDragging) {
      this.isDragging = true;
    }

    if (ev.isFinal) {
      // Upward drag
      if (ev.deltaY < 0) {
        this.cardheight = "68.5%";

        // this.topicsArray.forEach(topic =>{
        //   topic.isContentHidden = true;
        //   topic.cardHeight = "12%"
        // })
      } else if (ev.deltaY > 0) {
        this.cardheight = "37%";

        // this.topicsArray.forEach(topic =>{
        //   topic.isContentHidden = false;
        //   topic.cardHeight = "52%"
        // })
      }
      this.isDragging = false;
    }
  }

  // Fetches all questions based on their subject and topic
  getQuestions(jsonData, subject, topic) {
    var questionsArray = [];
    jsonData.forEach((element) => {
      if (element.Subject == subject && element.Topic == topic) {
        questionsArray.push({
          question: element.Question,
          answer: element.Answer,
          deck: element.Deck,
          hideAnswer: true,
        });
      }
    });

    // Clears duplicates
    var uniqueQuestionsArray = questionsArray.filter((elem, index, self) => {
      return index === self.indexOf(elem);
    });

    return uniqueQuestionsArray;
  }

  // Fetched all decks based on their subject and topic
  getDecks(jsonData, subject, topic) {
    var decksArray = [];

    jsonData.forEach((element) => {
      if (element.Subject == subject && element.Topic == topic) {
        // decksArray.push(element.Deck)

        decksArray.push({
          title: element.Deck,
          dates: ["15th March", "18th March", "12th March", "15th March"],
          isChecked: true,
        });
      }
    });

    // Clears duplicates
    var uniqueDecksArray = decksArray.filter((elem, index, self) => {
      return index === self.indexOf(elem);
    });

    // console.log(uniqueDecksArray);

    return uniqueDecksArray;
  }

  hideOrShowAnswer(index) {
    this.topicsArray[0].questions[index].hideAnswer = !this.topicsArray[0]
      .questions[index].hideAnswer;
  }
}
