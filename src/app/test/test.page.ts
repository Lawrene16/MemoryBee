import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-test",
  templateUrl: "./test.page.html",
  styleUrls: ["./test.page.scss"],
})
export class TestPage  implements OnInit {

  bottomVisible = "hidden";
  placeholderDivHeight = "38%";

  hideAnswer = true;

  questions = [];
  bottomHeight = "10px";
  topic;

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.questions = this.router.getCurrentNavigation().extras.state.questions;
        this.topic = this.router.getCurrentNavigation().extras.state.topic;

        this.questions.forEach(question => {
            question.paddingTop = "100px";
            question.paddingLeft = "40px";
            question.paddingRight = "40px";
            question.paddingBottom = "100px";
            question.questionFontSize = "24px";
            question.topHeight = "auto";
        })
      }
    });
  }

  hideOrShowAnswer() {

    console.log("CLicked");
    switch (this.hideAnswer) {
      case false:

        this.questions.forEach((question) => {
          question.paddingTop = "100px";
          question.paddingLeft = "40px";
          question.paddingRight = "40px";
          question.paddingBottom = "100px";
          question.questionFontSize = "24px";
          question.topHeight = "auto";
        });
        
        this.bottomHeight = "10px";
        this.bottomVisible = "hidden";
        this.placeholderDivHeight = "38%";


        break;

      case true:

        this.questions.forEach((question) => {
          question.paddingTop = "10px";
          question.paddingLeft = "20px";
          question.paddingRight = "20px";
          question.paddingBottom = "10px";
          question.questionFontSize = "16px";
          question.topHeight = "10vh";
        });

        this.placeholderDivHeight = "16%";
        this.bottomHeight = "55vh";
        this.bottomVisible = "visible";

        break;
    }

    this.hideAnswer = !this.hideAnswer;
  }

  goToNextQuestion() {
    this.questions.push(this.questions[0]);
    this.questions.shift();
  }

}
