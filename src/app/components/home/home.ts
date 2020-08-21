import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

import { MenuController, IonSlides, Platform, IonRouterOutlet } from '@ionic/angular';
import { MessageService } from 'src/app/services/message/message.service';
import { WifiService } from 'src/app/services/wifi/wifi.service';

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
    public router: Router,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private messageService: MessageService,
    public wifiService: WifiService
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      // this.messageService.normal({ "message": this.routerOutlet.canGoBack() });
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
    this.wifiService.checkConnection()
  }

  signUp() {
    this.router
      .navigateByUrl('/tabs/number', { replaceUrl: true })
      .then(() => {

      });
  }

  login() {
    this.router
      .navigate(['/login'])
      .then(() => {

      });
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      console.log('thi is to know when the slide is end > ', isEnd);
    });
  }
}
