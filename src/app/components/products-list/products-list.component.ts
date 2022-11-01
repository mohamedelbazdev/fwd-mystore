import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Iproduct[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);

    });
  }

}
