import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountPage } from './account.page';
import { ExploreComponentModule } from '../../container/explore/explore.module';
import { InfopigComponentModule } from '../../container/infopig/infopig.module';

import { AccountPageRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreComponentModule,
    InfopigComponentModule,
    AccountPageRoutingModule
  ],
  declarations: [AccountPage]
})
export class AccountPageModule { }
