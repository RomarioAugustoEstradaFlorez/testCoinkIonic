import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infopig',
  templateUrl: './infopig.component.html',
  styleUrls: ['./infopig.component.scss'],
})
export class InfopigComponent implements OnInit {
  @Input() dataHeader: any;

  constructor() { }

  ngOnInit() { }

}
