import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';



@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SharedModule
  ]
})
export class ProductDetailModule { }
