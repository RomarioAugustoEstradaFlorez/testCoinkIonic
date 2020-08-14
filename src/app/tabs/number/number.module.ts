import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumberPage } from './number.page';
import { ExploreComponentModule } from '../../container/explore/explore.module';

import { NumberPageRoutingModule } from './number-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreComponentModule,
    NumberPageRoutingModule
  ],
  declarations: [NumberPage]
})
export class NumberPageModule { }
