import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { TrangchuComponent } from './trangchu/trangchu.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { DetailTheLoaiComponent } from './detail-the-loai/detail-the-loai.component';
import { CartshoppingComponent } from './cartshopping/cartshopping.component';
import { PaycartComponent } from './paycart/paycart.component';
import { AdminComponent } from './admin/admin.component';
import { DetailadminComponent } from './detailadmin/detailadmin.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    
    TrangchuComponent,
    
    LoginComponent,
    
    DetailComponent,
    
    DetailTheLoaiComponent,
    
    CartshoppingComponent,
    
    PaycartComponent,
    
    AdminComponent,
    
    DetailadminComponent,
    
    EditadminComponent,
    
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
