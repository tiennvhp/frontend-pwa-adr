import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page-mobile',
  templateUrl: './detail-page-mobile.component.html',
  styleUrls: ['../main.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailPageMobileComponent implements OnInit {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "prevArrow": false, "nextArrow": false };

  constructor() { }

  ngOnInit() {
  }

}
