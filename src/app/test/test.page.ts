import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-test",
  templateUrl: "./test.page.html",
  styleUrls: ["./test.page.scss"],
})
export class TestPage implements OnInit {
  topPaddingTop = "100px";
  topPaddingLeft = "40px";
  topPaddingRight = "40px";
  questionFontSize = "24px";

  topPaddingBottom = "100px";
  topHeight = "auto";
  bottomHeight = "10px";
  bottomVisible = "hidden";

  hideAnswer = true;
  questions = [];
  topic;

  constructor(public route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.questions = this.router.getCurrentNavigation().extras.state.questions;
        this.topic = this.router.getCurrentNavigation().extras.state.topic;
      }
    });
    console.log(this.questions);
  }

  ngOnInit() {}

  hideOrShowAnswer() {
    switch (this.hideAnswer) {
      case false:
        this.topPaddingTop = "100px";
        this.topPaddingLeft = "40px";
        this.topPaddingRight = "40px";
        this.topPaddingBottom = "100px";
        this.topHeight = "auto";
        this.bottomHeight = "10px";
        this.questionFontSize = "24px";
        this.bottomVisible = "hidden";

        break;

      case true:
        this.topPaddingTop = "10px";
        this.topPaddingLeft = "20px";
        this.topPaddingRight = "20px";
        this.topPaddingBottom = "10px";
        this.topHeight = "10vh";
        this.bottomHeight = "55vh";
        this.questionFontSize = "16px";
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
