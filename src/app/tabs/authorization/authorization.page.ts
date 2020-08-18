import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(
    public router: Router,
    public messageService: MessageService
  ) { }

  ngOnInit() { }

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
