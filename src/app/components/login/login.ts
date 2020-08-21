import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ImeiService } from '../../services/imei/imei.service'
import { SignupService } from '../../services/signup/signup.service'
import { MessageService } from '../../services/message/message.service'
import { isNumber } from 'util';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';
import { WifiService } from 'src/app/services/wifi/wifi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
  dataSubHeader: any = {
    'title': 'INICIAR SESIÓN',
    'desc': {
      'normal': 'Inicia sesión con tu numero de',
      'bold': 'celular'
    },
    'img': 'oink.png'
  }

  login: any = {
    number: ''
  }

  imei: any;

  changeInput: boolean

  constructor(
    public imeiService: ImeiService,
    public signupService: SignupService,
    public messageService: MessageService,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    public router: Router,
    public wifiService: WifiService
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    });
  }

  ngOnInit() {
    // this.imei = this.imeiService.getImei()
    if (this.imeiService.getImei() !== null && typeof this.imeiService.getImei() !== 'object') {
      this.imei = this.imeiService.getImei() // real
    } else {
      this.imei = "7AD0E1F1-521E-43E6-B267-62D10CDEEC79" // test
    }
    this.wifiService.checkConnection()
  }


  loginWithNum() {
    if (isNumber(this.login.number) && ('' + this.login.number).length == 10) {
      let dataToSend: any = {
        phone_number: '57' + this.login.number,
        imei: this.imei
      }
      this.messageService.presentLoading('Espera mientras validamos la información');
      this.signupService.login(dataToSend).subscribe((res) => {
        this.messageService.normal({ message: 'Te pudiste loguear!!!' })
        this.messageService.dismissLoading()
      }, (err) => {
        this.messageService.error({ message: 'El número <strong>' + this.login.number + '</strong> No se encuentra.' })
        this.messageService.dismissLoading()
      })
    } else {
      this.messageService.error({ message: 'Debes ingresar el número de celular' })
    }
  }

}
