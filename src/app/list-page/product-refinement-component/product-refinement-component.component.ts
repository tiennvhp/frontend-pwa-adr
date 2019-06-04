import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-refinement-component',
  templateUrl: './product-refinement-component.component.html',
  styleUrls: ['./product-refinement-component.component.css']
})
export class ProductRefinementComponentComponent implements OnInit {
  isNarrowingBrandList: Boolean
  isNarrowingPriceList: Boolean
  isNarrowingReviewList: Boolean
  
  constructor() { }

  ngOnInit() {
  }

  narrowBrandList() {
  	this.isNarrowingBrandList = !this.isNarrowingBrandList;
  }

  narrowPriceList() {
  	this.isNarrowingPriceList = !this.isNarrowingPriceList;
  }

  narrowReviewList() {
  	this.isNarrowingReviewList = !this.isNarrowingReviewList;
  }

}
