import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SignupService } from '../../services/signup/signup.service'

import { MessageService } from '../../services/message/message.service';

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

  constructor(
    public router: Router,
    public messageService: MessageService,
    public signupService: SignupService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dataFromBehindStep = this.route.snapshot.queryParams;
    console.log('datos finales > ', this.dataFromBehindStep)
  }

  finish() {
    if (this.termsAccepted) {
      let dataMessage = {
        'title': 'Flujo términado',
        'message': 'A dónde deberá ir ahora...',
      }
      this.messageService.normal(dataMessage)
    }
  }
}
