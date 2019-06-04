import { Component, ViewEncapsulation,  OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['../main.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListPageComponent implements OnInit {
  title = 'listing-page';
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true };
  slideConfigSlide1 = {"slidesToShow": 5, "slidesToScroll": 1, "dots": false, "navs": true };

  constructor() { }

  ngOnInit() {
  }

}

