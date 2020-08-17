import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() { }
}
