import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TrangchuComponent } from './trangchu/trangchu.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { DetailTheLoaiComponent } from './detail-the-loai/detail-the-loai.component';
import { PaycartComponent } from './paycart/paycart.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  { path: 'trangchu', component: TrangchuComponent },
  { path: 'dangnhap', component: LoginComponent },
  { path: 'trangchu/:TL/:id', component: DetailComponent },
  { path: 'TheLoai', component: DetailTheLoaiComponent },
  { path: '', redirectTo: '/trangchu', pathMatch: 'full' },
  { path: 'pay', component : PaycartComponent},
  { path: 'admin', component : AdminComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
  ,
})

export class AppRoutingModule { }
