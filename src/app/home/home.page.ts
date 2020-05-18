import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as papa from "papaparse";
declare var ProgressBar: any;


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  cards;
  imageData = [];
  subjectsListStrings = [];
  fullSubjectList = [];
  bar: any;
  // i = 0;


  constructor(public httpClient: HttpClient) {
    this.cards = [];
    setTimeout(() => {
      this.loadTinderCards();
      // console.log(this.cards)
      // this.readCsvData();

      // this.move();
    }, 300);
  }

  // setUpProgressBar() {
  //   this.bar = new ProgressBar.Line("#progress", {
  //     strokeWidth: 4,
  //     easing: "easeInOut",
  //     duration: 800,
  //     color: "#4CAF50",
  //     trailColor: "#eee",
  //     // radius: '25px',
  //     trailWidth: 5,
  //     svgStyle: { width: "100%", height: "100%" },
  //   });

  //   setTimeout(() => {
  //     this.bar.animate(0.7); // Number from 0.0 to 1.0
  //   }, 800);
  // }

  loadTinderCards() {
    this.cards = [
      {
        img: "https://placeimg.com/300/300/people",
        title: "Demo card 1",
        description: "This is a demo for Tinder like swipe cards",
        progress: 70,
      },
      {
        img: "https://placeimg.com/300/300/animals",
        title: "Demo card 2",
        description: "This is a demo for Tinder like swipe cards",
        progress: 59,
      },
      {
        img: "https://placeimg.com/300/300/nature",
        title: "Demo card 3",
        description: "This is a demo for Tinder like swipe cards",
        progress: 60,
      },
      {
        img: "https://placeimg.com/300/300/tech",
        title: "Demo card 4",
        description: "This is a demo for Tinder like swipe cards",
        progress: 30,
      },
      {
        img: "https://placeimg.com/300/300/arch",
        title: "Demo card 5",
        description: "This is a demo for Tinder like swipe cards",
        progress: 45,
      },
      {
        img: "https://placeimg.com/300/300/people",
        title: "Demo card 1",
        description: "This is a demo for Tinder like swipe cards",
        progress: 100,
      },
      {
        img: "https://placeimg.com/300/300/animals",
        title: "Demo card 2",
        description: "This is a demo for Tinder like swipe cards",
        progress: 20,
      },
      {
        img: "https://placeimg.com/300/300/nature",
        title: "Demo card 3",
        description: "This is a demo for Tinder like swipe cards",
        progress: 55,
      },
      {
        img: "https://placeimg.com/300/300/tech",
        title: "Demo card 4",
        description: "This is a demo for Tinder like swipe cards",
        progress: 39,
      },
    ];
  }

//   readCsvData() {
//     this.httpClient.get("assets/final.json").subscribe(
//       (data) => this.extractData(data),
//       (err) => this.handleError(err)
//     );
//   }

//   private handleError(err) {
//     console.log("something went wrong: ", err);
//   }

//   trackByFn(index: any, item: any) {
//     return index;
//   }

// move() {
//   if (this.i == 0) {
//     this.i = 1;
//     var elem = document.getElementById("progress");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         this.i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }

//   private extractData(res) {
//     res.forEach((element) => {
//       if (!this.subjectsListStrings.includes(element.Subject)) {
//         this.subjectsListStrings.push(element.Subject);
//         console.log("includes");
//       } else {
//         console.log("doesnt include");
//       }
//     });

//     // console.log(this.subjectsListStrings);

//     for (var i = 0; i < this.subjectsListStrings.length; i++) {
//       this.fullSubjectList.push({
//         title: this.subjectsListStrings[i],
//         img: this.imageData[i].img,
//         lastReview: "Last Review April 09, 2020",
//         progress: 78
//       });
//       // this.subjectsListStrings[i].img = this.imageData[i].img;
//     }

//     console.log(this.fullSubjectList);

//     // // console.log(this.subjectsList)
//     // for (var i = 0; i < 10; i++) {
//     //   this.cards.push(res[i]);
//     //   this.cards[i].img = this.imageData[i].img;
//     //   // console.log(res[i]);
//     // }
//     // this.cards = res;
//     // console.log(res)
//     // res.forEach(row => {
//     //   console.log(row)
//     // });

//     // let csvData = res["_body"] || "";
//     // let parsedData = papa.parse(csvData).data;

//     // console.log(parsedData)

//     // this.headerRow = parsedData[0];

//     // parsedData.splice(0, 1);
//     // this.csvData = parsedData;
//   }

  logChoice(event) {
    // if (this.choiceMadeEventCount == 0) {
    //   this.choiceMadeEventCount++;
    //   // console.log(event);
    // }
    // this.choiceMadeEventCount = 0;
  }
}
