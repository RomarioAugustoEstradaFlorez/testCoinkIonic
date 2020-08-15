import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopigComponent } from './infopig.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [InfopigComponent],
  exports: [InfopigComponent]
})
export class InfopigComponentModule { }
