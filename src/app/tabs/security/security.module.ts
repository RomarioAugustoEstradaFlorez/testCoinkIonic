import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecurityPage } from './security.page';
import { ExploreComponentModule } from '../../container/explore/explore.module';
import { InfopigComponentModule } from '../../container/infopig/infopig.module';

import { SecurityPageRoutingModule } from './security-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreComponentModule,
    InfopigComponentModule,
    SecurityPageRoutingModule,
  ],
  declarations: [SecurityPage]
})
export class SecurityPageModule { }
