import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      })
  }
  
  createProduct() {
    const newProduct: Product = {
      id: '24',
      title: 'New from Angular',
      image: 'https://www.legami.com/dw/image/v2/BDSQ_PRD/on/demandware.static/-/Sites-legami-master-catalog/default/dw76b91c32/images_legami/zoom/PCB0001_1.jpg?sw=800&sh=800',
      price: 30000,
      description: 'New product'

    }
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        // this.product = product;
        console.log(product);
      })
  }
}
