import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserSecurity } from '../../interfaces/user-security';

@Component({
  selector: 'app-security',
  templateUrl: 'security.page.html',
  styleUrls: ['security.page.scss']
})
export class SecurityPage implements OnInit {
  dataHeader: any = { 'id': 3, 'name': 'SEGURIDAD', 'behind': 'tabs/account' }
  dataSubHeader: any = {
    'title': '¿CONFIGURA TU CUENTA?',
    'desc': {
      'normal': 'Escribe el correo que estará vinculado a tu cuenta',
      'bold': ''
    },
    'img': 'oink_police.png'
  }

  signup: UserSecurity = {
    email: '',
    emailConfirm: '',
    pin: null,
    pinConfirm: null
  }

  submitted = false
  validForm: boolean


  constructor(
    public router: Router
  ) { }

  ngOnInit() { }

  pinSingup(form: NgForm) {
    this.submitted = true;

    if ((form.valid) && (this.signup.email === this.signup.emailConfirm && this.signup.pin === this.signup.pinConfirm)) {
      // console.log('form > ', this.signup)
      this.validForm = true;
      this.dataSubHeader.desc.title = 'CONFIGURA TU CUENTA';
      this.dataSubHeader.desc.normal = 'Para finalizar, por favor';
      this.dataSubHeader.desc.bold = 'lee con detenimiento este documento';
    }
  }
}
