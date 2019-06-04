import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vin-simple-responsive-banner-component',
  templateUrl: './vin-simple-responsive-banner-component.component.html',
  styleUrls: ['./vin-simple-responsive-banner-component.component.css']
})
export class VinSimpleResponsiveBannerComponentComponent implements OnInit {
	slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true };
	constructor() { }
	ngOnInit() {
	}
}
