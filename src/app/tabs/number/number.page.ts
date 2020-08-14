import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: 'number.page.html',
  styleUrls: ['number.page.scss']
})
export class NumberPage implements OnInit {
  dataHeader: any = { 'id': 1, 'name': 'NÚMERO DE CELULAR', 'behind': '' }

  constructor() { }

  ngOnInit() {
  }

}
