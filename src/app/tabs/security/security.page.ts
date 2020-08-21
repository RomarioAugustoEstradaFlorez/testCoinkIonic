import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SignupService } from '../../services/signup/signup.service'

import { UserSecurity } from '../../interfaces/user-security';
import { Platform } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage/storage.service';

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

  dataFromBehindStep: any = {}


  constructor(
    public signupService: SignupService,
    public router: Router,
    public route: ActivatedRoute,
    public platform: Platform,
    public storageService: StorageService
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      this.router.navigate(['/' + this.dataHeader.behind])
    });
  }

  ngOnInit() { }

  pinSingup(form: NgForm) {
    this.submitted = true;
    let dataToSave: any = {
      first: this.dataFromBehindStep.first,
      second: this.dataFromBehindStep.second,
      third: this.signupService.encrypt({
        form: this.signupService.encrypt(this.signup),
      })
    }

    this.storageService.setItem('third', this.signupService.encrypt({
      form: this.signupService.encrypt(this.signup)
    }))

    if ((form.valid) && (this.signup.email === this.signup.emailConfirm && this.signup.pin === this.signup.pinConfirm)) {
      this.router.navigate(['/tabs/authorization'], { replaceUrl: true })
    }
  }

  onlyNumber(event, name) {
    if (event.which <= 90 && event.which >= 48 && event.which != 9) {
      if (/\D/g.test(event.key)) {
        this.signup['' + name] = event.key.replace(/\D/g, '')
        alert('Debes ingresar solo números para el PIN')
      }
    }
  }
}