import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountShowComponent } from './subpages/my-account-show/my-account-show.component';
import { MyAccountEditComponent } from './subpages/my-account-edit/my-account-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountShowComponent,
    children: [
      // {
      //   path: 'vendors',
      //   component: VendorListComponent,
      // },
      // {
      //   path: 'vendors/form',
      //   component: VendorDetailComponent,
      // },
      // {
      //   path: 'vendors/form/:id',
      //   component: VendorDetailComponent,
      // },
      // {
      //   path: '',
      //   redirectTo: 'categorys',
      //   pathMatch: 'full',
      // },
    ],
  },
  {
    path: 'edit',
    component: MyAccountEditComponent
  }
];

@NgModule( {
  imports: [ CommonModule, RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
} )
export class MyAccountRoutingModule { }