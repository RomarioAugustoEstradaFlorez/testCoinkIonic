import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  @Input() dataHeader: any;

  constructor(private location: Location, public router: Router) { }

  ngOnInit() { }

  goBackHigh() {
    this.location.back();
  }

  goBack(where) {
    this.router
      .navigateByUrl('/' + where, { replaceUrl: true })
      .then(() => { });
  }

}
