import { Component, OnInit, ɵConsole } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { AlertController, Platform } from '@ionic/angular'
import { UserOptions } from '../../interfaces/user-options'
import { StorageService } from 'src/app/services/storage/storage.service'
import { SignupService } from '../../services/signup/signup.service'
import { MessageService } from '../../services/message/message.service'

import * as moment from 'moment';

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
    'first_name': '',
    'second_name': '',
    'first_last_name': '',
    'second_last_name': '',
    'gender': 'Másculino'
  }

  dataFromBehindStep: any = {}

  constructor(
    public router: Router,
    public alertController: AlertController,
    public messageService: MessageService,
    public signupService: SignupService,
    public route: ActivatedRoute,
    public platform: Platform,
    public storageService: StorageService
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      this.router.navigate(['/' + this.dataHeader.behind])
    });
  }

  ngOnInit() { }


  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      var cShareFormat = 'YYYY-MM-DD';
      let dataToSend = {
        document_number: this.signup.documentNumber,
        document_type: this.signup.documentType,
        expedition_date: moment(this.signup.documentExpeditionDate).format(cShareFormat),
        birth_date: moment(this.signup.dateOfBirth).format(cShareFormat)
      }

      this.messageService.presentLoading('Espera mientras validamos la información');

      this.signupService.signUpCifin(dataToSend).subscribe((res) => {
        if (res.first_name !== "") { // res.is_valid always come as a false
          this.messageService.dismissLoading();
          this.validForm = true;
          this.dataSubHeader.desc.title = 'VERIFICA TUS DATOS';
          this.dataSubHeader.desc.normal = 'Estos son tu datos?...';

          this.resPersonalInfo = {
            'first_name': res.first_name,
            'second_name': res.second_name,
            'first_last_name': res.first_last_name,
            'second_last_name': res.second_last_name,
            'gender': res.gender
          }
        } else {
          this.messageService.dismissLoading();
          let dataMsg = {
            'message': 'No son válidos los datos enviados. Intenta nuevamente.'
          }
          this.messageService.error(dataMsg)
        }
      }, (err) => {
        this.messageService.error({ message: 'No se pudo validar la información' })
        this.messageService.dismissLoading()
      })
    }
  }

  cancel() {
    let reset = () => this.resetValues();
    this.messageService.question({ message: 'Se cancelará el progreso' },
      function okCancel() {
        reset();
      },
      function dontCancel() {

      })
  }

  resetValues() {
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
    let dataToSave: any = {
      first: this.dataFromBehindStep.first,
      second: this.signupService.encrypt({
        form: this.signupService.encrypt(this.signup),
        response: this.signupService.encrypt(this.resPersonalInfo)
      })
    }
    this.storageService.setItem('second', this.signupService.encrypt({
      form: this.signupService.encrypt(this.signup),
      response: this.signupService.encrypt(this.resPersonalInfo)
    })
    )
    this.router.navigate(['/tabs/security'], { replaceUrl: true })
  }

}
