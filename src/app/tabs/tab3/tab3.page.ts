import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  dataHeader: any = { 'id': 3, 'name': 'tab3', 'behind': 'tabs/tab2' }

  constructor() { }

  ngOnInit() { }
}
