import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
})
export class HomePage {
  showSkip = true;

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router
  ) { }

  signUp() {
    this.router
      .navigateByUrl('/tabs/number', { replaceUrl: true })
      .then(() => {

      });
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      console.log('thi is to know when the slide is end > ', isEnd);
    });
  }
}
