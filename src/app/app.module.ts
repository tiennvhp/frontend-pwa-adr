import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { BreadscrumComponent } from './list-page/breadscrum/breadscrum.component';
import { CategoryNameComponent } from './list-page/category-name/category-name.component';
import { VinSimpleResponsiveBannerComponentComponent } from './list-page/vin-simple-responsive-banner-component/vin-simple-responsive-banner-component.component';
import { ArrangementSectionComponent } from './list-page/arrangement-section/arrangement-section.component';
import { ChangePagesFastSectionComponent } from './list-page/change-pages-fast-section/change-pages-fast-section.component';
import { FilterSectionComponent } from './list-page/filter-section/filter-section.component';
import { CategoryListSectionComponent } from './list-page/category-list-section/category-list-section.component';
import { ProductRefinementComponentComponent } from './list-page/product-refinement-component/product-refinement-component.component';
import { NotFoundComponent } from './list-page/not-found/not-found.component';
import { NotServiceComponent } from './list-page/not-service/not-service.component';
import { AdidasComponent } from './list-page/adidas/adidas.component';
import { ListPromote1Component } from './list-page/list-promote1/list-promote1.component';
import { ProductGridComponent } from './list-page/product-grid/product-grid.component';
import { PaginationComponent } from './list-page/pagination/pagination.component';
import { SearchResultTitleComponent } from './list-page/search-result-title/search-result-title.component';
import { NotFoundCategoryComponent } from './list-page/not-found-category/not-found-category.component';
import { ListPageMobileComponent } from './list-page-mobile/list-page-mobile.component';
import { DepartmentPageMobileComponent } from './department-page-mobile/department-page-mobile.component';
import { ErrorConnectionPageMobileComponent } from './error-connection-page-mobile/error-connection-page-mobile.component';
import { MerchantPageMobileComponent } from './merchant-page-mobile/merchant-page-mobile.component';
import { DetailPageMobileComponent } from './detail-page-mobile/detail-page-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,
    ListPageComponent,
    BreadscrumComponent,
    CategoryNameComponent,
    VinSimpleResponsiveBannerComponentComponent,
    ArrangementSectionComponent,
    ChangePagesFastSectionComponent,
    FilterSectionComponent,
    CategoryListSectionComponent,
    ProductRefinementComponentComponent,
    NotFoundComponent,
    NotServiceComponent,
    AdidasComponent,
    ListPromote1Component,
    ProductGridComponent,
    PaginationComponent,
    SearchResultTitleComponent,
    NotFoundCategoryComponent,
    ListPageMobileComponent,
    DepartmentPageMobileComponent,
    ErrorConnectionPageMobileComponent,
    MerchantPageMobileComponent,
    DetailPageMobileComponent,
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
