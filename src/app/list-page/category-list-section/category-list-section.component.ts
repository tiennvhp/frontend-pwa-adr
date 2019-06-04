import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category-list-section',
  templateUrl: './category-list-section.component.html',
  styleUrls: ['./category-list-section.component.css']
})
export class CategoryListSectionComponent implements OnInit {
  isNarrowingCategoryList: boolean

  constructor() { }

  ngOnInit() {
  }

  narrowCategoryList() {
  	this.isNarrowingCategoryList = !this.isNarrowingCategoryList;
  }

}
