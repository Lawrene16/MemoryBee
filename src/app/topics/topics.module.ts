import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicsPageRoutingModule } from './topics-routing.module';

import { TopicsPage } from './topics.page';
import { TinderUiComponent } from "../tinder-ui/tinder-ui.component";


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TopicsPageRoutingModule],
  declarations: [TopicsPage, TinderUiComponent],
})
export class TopicsPageModule {}
