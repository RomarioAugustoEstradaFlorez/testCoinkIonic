import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SignupService } from '../../services/signup/signup.service'
import { StorageService } from 'src/app/services/storage/storage.service';
import { MessageService } from '../../services/message/message.service';

import { Platform } from '@ionic/angular';
import { UserV2 } from '../../interfaces/user-v2'

import * as moment from 'moment';

@Component({
  selector: 'app-authorization',
  templateUrl: 'authorization.page.html',
  styleUrls: ['authorization.page.scss']
})
export class AuthorizationPage implements OnInit {
  dataHeader: any = { 'id': 4, 'name': 'AUTORIZACIÓN DE DATOS', 'behind': 'tabs/security' }
  dataSubHeader: any = {
    'title': 'CONFIGURA TU CUENTA',
    'desc': {
      'normal': 'Para finalizar, por favor',
      'bold': 'lee con detenimiento este documento'
    },
    'img': 'oink_police.png'
  }

  termsAccepted: boolean
  dataFromBehindStep: any

  finishDataUser: UserV2 = {
    phone_number: "", //string
    names: "", //string
    last_names: "", //string
    document_id: 1, // number
    document_number: "", //string
    document_expiration_date: "", // 1994-12-01
    birth_date: "", // 1994-12-01
    gender_id: 1, // number
    state_id: "1", // string
    city_id: "1", //string
    address: "", // string
    pin: "", //string
    email: "", // string
    imei: "", //string
    push_registration_id: "", //string
    topic_registration_id: "", //string
    referrer_phonenumber: "", //string
    parent_info: "", //string minorparentinfo
    query_id: "" // string
  }

  constructor(
    public router: Router,
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

  async ngOnInit() {
    this.dataFromBehindStep = this.route.snapshot.queryParams;
    console.log('datos finales > ', this.dataFromBehindStep)
    let dataToUse: any = await this.decryptingFinalData(this.dataFromBehindStep);
    var cShareFormat = 'YYYY-MM-DD';

    this.finishDataUser.phone_number = dataToUse.first.number.code + dataToUse.first.number.phone
    this.finishDataUser.referrer_phonenumber = dataToUse.first.number.code + dataToUse.first.number.phone
    this.finishDataUser.names = dataToUse.second.response.first_name + ' ' + dataToUse.second.response.second_name
    this.finishDataUser.last_names = dataToUse.second.response.first_last_name + ' ' + dataToUse.second.response.second_last_name
    this.finishDataUser.document_id = 1
    this.finishDataUser.document_number = dataToUse.second.form.documentNumber
    this.finishDataUser.document_expiration_date = moment(dataToUse.second.form.documentExpeditionDate).format(cShareFormat)
    this.finishDataUser.birth_date = moment(dataToUse.second.form.dateOfBirth).format(cShareFormat)
    // this.finishDataUser.address = 'algo'
    this.finishDataUser.gender_id = parseInt(dataToUse.second.response.gender.Ordinal)
    this.finishDataUser.pin = dataToUse.third.form.pinConfirm
    this.finishDataUser.email = dataToUse.third.form.emailConfirm
    this.finishDataUser.imei = dataToUse.first.number.imei
    this.finishDataUser.push_registration_id = this.generateCode(10)
    this.finishDataUser.topic_registration_id = this.generateCode(10)

    console.log('this.finishDataUser > ', this.finishDataUser);
  }

  async decryptingFinalData(data) {
    let first = await this.storageService.getItem('first');
    let second = await this.storageService.getItem('second');
    let third = await this.storageService.getItem('third');

    let dataToDecrypt: any = {
      first: JSON.parse(this.signupService.decrypt(first)),
      second: JSON.parse(this.signupService.decrypt(second)),
      third: JSON.parse(this.signupService.decrypt(third))
    }
    dataToDecrypt.second.form = JSON.parse(this.signupService.decrypt(dataToDecrypt.second.form))
    dataToDecrypt.second.response = JSON.parse(this.signupService.decrypt(dataToDecrypt.second.response))
    dataToDecrypt.third.form = JSON.parse(this.signupService.decrypt(dataToDecrypt.third.form))

    console.log('dataToDecrypt > ', dataToDecrypt)

    return dataToDecrypt;
    // first: this.dataFromBehindStep.first,
    // second: this.dataFromBehindStep.second,
    // third: this.signupService.encrypt({
    //   form: this.signupService.encrypt(this.signup),
    // })
  }

  /**
   * Autor - Romario Estrada  -romarioestrada.ff@hotmail.com
   * [generateCode Thi creat a code alphanumeric.]
   * @param  {[int]} length [The length of the code]
   * @return {[string]} [the generate code]
  */
  generateCode(length) {
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
    var contrasena = "";
    for (let i = 0; i < length; i++) contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    return contrasena;
  };

  finish() {
    if (this.termsAccepted) {
      this.messageService.presentLoading('Guardando la información, espere un momento...')
      console.log(this.signupService.encrypt(this.finishDataUser));
      this.signupService.signUpV2(this.finishDataUser).subscribe((res) => {
        this.messageService.normal({ message: JSON.stringify(res) })
        // this.messageService.normal(dataMessage)
      }, (err) => {
        this.messageService.error({ message: 'No se pudo guardar la información.' })
        // this.messageService.error({ message: JSON.stringify(err) })
        this.messageService.dismissLoading()
      })
      // let dataMessage = {
      //   'title': 'Flujo términado',
      //   'message': 'A dónde deberá ir ahora...',
      // }
      // this.messageService.normal(dataMessage)
    }
  }
}
