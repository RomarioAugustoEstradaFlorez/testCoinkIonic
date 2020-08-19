import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { UserOptions } from '../../interfaces/user-options';

import { SignupService } from '../../services/signup/signup.service'
import { MessageService } from '../../services/message/message.service'

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage implements OnInit {
  dataHeader: any = { 'id': 2, 'name': 'DATOS DE TU CUENTA', 'behind': 'tabs/number' }
  dataSubHeader: any = {
    'title': '¿CUALES SON TUS DATOS?',
    'desc': {
      'normal': 'Ahora necesitamos saber algunos datos tuyos',
      'bold': ''
    },
    'img': 'oink_large.png'
  }

  signup: UserOptions = {
    documentType: null,
    documentNumber: null,
    dateOfBirth: '',
    documentExpeditionDate: '',
    genre: null,
  }

  submitted = false
  validForm: boolean

  documentTypes: any[] = [
    {
      id: 1,
      name: 'Cédula de ciudadanía',
    },
    {
      id: 2,
      name: 'Cédula de extranjería',
    }
  ];

  genres: any[] = [
    {
      id: 1,
      name: 'Másculino',
    },
    {
      id: 2,
      name: 'Femenino',
    }
  ];

  resPersonalInfo: any = {
    'first_name': 'Alejandro',
    'second_name': '',
    'first_last_name': 'Fonnegra',
    'second_last_name': 'Aguilera',
    'gender': 'Másculino'
  }

  constructor(
    public router: Router,
    public alertController: AlertController,
    public messageService: MessageService,
    public signupService: SignupService
  ) { }

  ngOnInit() { }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // console.log('form > ', this.signup)
      this.validForm = true;
      this.dataSubHeader.desc.title = 'VERIFICA TUS DATOS';
      this.dataSubHeader.desc.normal = 'Estos son tu datos?...';

      let dataToSend = {
        document_number: this.signup.documentNumber,
        document_type: this.signup.documentType,
        expedition_date: this.signup.documentExpeditionDate,
        birth_date: this.signup.dateOfBirth
      }
      // console.log('dataToSend > ', dataToSend)
      this.signupService.signUpCifin(dataToSend).subscribe((res) => {
        console.log('res > ', res)
      })

      let encrypt = this.signupService.testEncrypt(dataToSend)
      let decrypt = this.signupService.testDecrypt(encrypt);

      console.log('encrypt > ', encrypt)
      console.log('decrypt > ', decrypt);


    }
  }

  cancel() {
    this.validForm = false;
    this.signup = {
      documentType: null,
      documentNumber: null,
      dateOfBirth: '',
      documentExpeditionDate: '',
      genre: null,
    }
  }

  goNext() {
    this.router
      .navigateByUrl('/tabs/security', { replaceUrl: true })
      .then(() => {

      })
  }

}
