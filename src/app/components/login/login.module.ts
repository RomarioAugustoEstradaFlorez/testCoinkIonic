import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login';
import { InfopigComponentModule } from '../../container/infopig/infopig.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InfopigComponentModule
  ],
  declarations: [LoginPage],
  entryComponents: [LoginPage],
})
export class LoginModule { }
