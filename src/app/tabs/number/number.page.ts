import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ImeiService } from '../../services/imei/imei.service'
import { SignupService } from '../../services/signup/signup.service'
import { MessageService } from '../../services/message/message.service'
import { StorageService } from 'src/app/services/storage/storage.service'
import { Platform } from '@ionic/angular'


@Component({
  selector: 'app-number',
  templateUrl: 'number.page.html',
  styleUrls: ['number.page.scss']
})
export class NumberPage implements OnInit {
  togglePhoneCode: boolean = true;
  confirmPhone: boolean
  confirmCode: boolean
  dataHeader: any = { 'id': 1, 'name': 'NÚMERO DE CELULAR', 'behind': '' }
  dataSubHeader: any = {
    'title': '',
    'desc': {
      'normal': 'Para comenzar, por favor ingresa',
      'bold': 'tu número celular',
      'other': ''
    },
    'img': 'oink.png'
  }


  number: any = {
    code: '57',
    phone: '',
    imei: ''
  }

  code: any = {
    protect: 'XXXX',
    number: ''
  }

  constructor(
    public router: Router,
    public imeiService: ImeiService,
    public signupService: SignupService,
    public messageService: MessageService,
    public platform: Platform,
    public storageService: StorageService
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      this.router.navigate(['/home'])
    });
  }

  ngOnInit() {
    this.storageService.removeItem('first')
    this.storageService.removeItem('second')
    this.storageService.removeItem('third')
  }

  addNumber(num: number) {
    // phone number
    if (this.togglePhoneCode) {
      if (this.number.phone.length < 10) {
        this.number.phone += '' + num
      }
      if (this.number.phone.length == 10) {
        this.confirmPhone = true
        // this.number.imei = this.imeiService.getImei()
        this.number.imei = "7AD0E1F1-521E-43E6-B267-62D10CDEEC79"
      }
    }

    // code of confirmation
    if (!this.togglePhoneCode) {
      if (this.code.number.length < 4) {
        this.code.number += num
        this.code.protect = this.code.protect.slice(0, -1)
      }
      if (this.code.number.length == 4) {
        this.confirmCode = true;
      }
    }
  }

  deleteNumber() {
    // phone number
    if (this.togglePhoneCode) {
      if (this.number.phone.length >= 0) {
        this.number.phone = this.number.phone.slice(0, -1)
      }
      if (this.number.phone.length < 10) {
        this.confirmPhone = false
      }
    }

    // code of confirmation
    if (!this.togglePhoneCode) {
      this.code.number = ''
      this.code.protect = 'XXXX'
      this.confirmCode = false
      if (this.code.number.length < 4) {
        this.confirmCode = false
      }
    }
  }

  confirmNumber() {
    if (this.number.phone.length == 10) {
      this.togglePhoneCode = false;
      this.dataSubHeader.desc.normal = 'Digita el código que recibiste vía';
      this.dataSubHeader.desc.bold = 'mensaje de texto';
      this.dataSubHeader.desc.bold = 'al ' + this.number.phone;
    }
  }

  confirmTheCode() {
    if (this.code.number.length == 4) {
      let dataToSave: any = {
        number: this.number,
        code: this.code.number
      }
      dataToSave = this.signupService.encrypt(dataToSave)

      this.storageService.setItem('first', dataToSave);
      this.router
        .navigate(['/tabs/account'], { replaceUrl: true })
    }
  }

  resendCode() {

  }

}
