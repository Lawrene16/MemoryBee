import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyPageRoutingModule } from './study-routing.module';

import { StudyPage } from './study.page';
import { StudyUiComponent } from '../study-ui/study-ui.component';
// import { AnswersUiComponent } from '../answers-ui/answers-ui.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyPageRoutingModule
  ],
  declarations: [StudyPage, StudyUiComponent]
})
export class StudyPageModule {}
