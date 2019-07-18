import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DetailPageComponent }   from './detail-page/detail-page.component';
import { ListPageComponent }   from './list-page/list-page.component';
import { ListPageMobileComponent }   from './list-page-mobile/list-page-mobile.component';
import { DepartmentPageMobileComponent } from './department-page-mobile/department-page-mobile.component';
import { ErrorConnectionPageMobileComponent } from './error-connection-page-mobile/error-connection-page-mobile.component';
import { MerchantPageMobileComponent } from './merchant-page-mobile/merchant-page-mobile.component';
import { DetailPageMobileComponent } from './detail-page-mobile/detail-page-mobile.component';
import { BanTheComponent } from './ban-the/ban-the.component';
import { BanTheMobileComponent } from './ban-the-mobile/ban-the-mobile.component';
import { AccountComponent } from './account/account.component';

 
const routes: Routes = [
  { path: 'detail', component: DetailPageComponent },
  { path: 'detail-mobile', component: DetailPageMobileComponent },
  { path: 'list', component: ListPageComponent },
  { path: 'list-mobile', component: ListPageMobileComponent },
  { path: 'department-mobile', component: DepartmentPageMobileComponent },
  { path: 'error-connection-mobile', component: ErrorConnectionPageMobileComponent },
  { path: 'merchant-mobile', component: MerchantPageMobileComponent },
  { path: 'ban-the', component: BanTheComponent },
  { path: 'ban-the-mobile', component: BanTheMobileComponent },
  { path: 'account', component: AccountComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}