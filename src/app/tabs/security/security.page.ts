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


  constructor(
    public router: Router
  ) { }

  ngOnInit() { }

  pinSingup(form: NgForm) {
    this.submitted = true;

    if ((form.valid) && (this.signup.email === this.signup.emailConfirm && this.signup.pin === this.signup.pinConfirm)) {
      this.router
        .navigateByUrl('/tabs/authorization', { replaceUrl: true })
        .then(() => {

        })
    }
  }

  onlyNumber(event, name) {
    // console.log('event > ', event)
    if (event.which <= 90 && event.which >= 48 && event.which != 9) {
      if (/\D/g.test(event.key)) {
        this.signup['' + name] = event.key.replace(/\D/g, '')
        alert('Debes ingresar solo números para el PIN')
      }
    }
  }
}
