import { Component, OnInit } from '@angular/core';
import { MbscNumpadDateOptions } from '@mobiscroll/angular';


@Component({
  selector: 'app-number',
  templateUrl: 'number.page.html',
  styleUrls: ['number.page.scss']
})
export class NumberPage implements OnInit {
  dataHeader: any = { 'id': 1, 'name': 'NÚMERO DE CELULAR', 'behind': '' }
  dataSubHeader: any = {
    'title': '',
    'desc': {
      'normal': 'Para comenzar, por favor ingresa',
      'bold': 'tu número celular'
    },
    'img': 'oink.png'
  }

  number: any = {
    code: '57',
    phone: '3212546262'
  };

  constructor() { }

  ngOnInit() {
  }

  addNumber(num: number) {

  }

}
