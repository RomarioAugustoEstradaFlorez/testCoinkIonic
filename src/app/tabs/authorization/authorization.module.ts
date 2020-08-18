import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorizationPage } from './authorization.page';
import { ExploreComponentModule } from '../../container/explore/explore.module';
import { InfopigComponentModule } from '../../container/infopig/infopig.module';

import { AuthorizationPageRoutingModule } from './authorization-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreComponentModule,
    InfopigComponentModule,
    AuthorizationPageRoutingModule,
  ],
  declarations: [AuthorizationPage]
})
export class AuthorizationPageModule { }
