import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DetailPageComponent }   from './detail-page/detail-page.component';
import { ListPageComponent }   from './list-page/list-page.component';
import { ListPageMobileComponent }   from './list-page-mobile/list-page-mobile.component';
import { DepartmentPageMobileComponent } from './department-page-mobile/department-page-mobile.component';
import { ErrorConnectionPageMobileComponent } from './error-connection-page-mobile/error-connection-page-mobile.component';

 
const routes: Routes = [
  { path: 'detail', component: DetailPageComponent },
  { path: 'list', component: ListPageComponent },
  { path: 'list-mobile', component: ListPageMobileComponent },
  { path: 'department-mobile', component: DepartmentPageMobileComponent },
  { path: 'error-connection-mobile', component: ErrorConnectionPageMobileComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}