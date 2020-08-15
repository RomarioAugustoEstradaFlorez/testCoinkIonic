import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'


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
    phone: ''
  }

  code: any = {
    'protect': 'XXXX',
    'number': ''
  }

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  addNumber(num: number) {
    // phone number
    if (this.togglePhoneCode) {
      if (this.number.phone.length < 10) {
        this.number.phone += '' + num
      }
      if (this.number.phone.length == 10) {
        this.confirmPhone = true
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
      this.router
        .navigateByUrl('/tabs/tab2', { replaceUrl: true })
        .then(() => {

        })
    }
  }

}
