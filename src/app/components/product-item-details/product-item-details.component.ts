import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Iproduct } from 'src/app/models/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  product!: Iproduct;
  public selectedNum: number = 1;
  public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    let name = this.route.snapshot.params['name'];

    let cap1stLetter = name.charAt(0).toUpperCase() + name.slice(1);

    this.cartService.productListInCart.filter((p) => p.name === cap1stLetter);

    const promise = this.productsService
      .getProducts()
      .pipe(
        map((products: any[]) => products.filter((item: any) => item.name === cap1stLetter))
      )
      .toPromise();

    promise.then((data: any) => (this.product = data[0]));
  }
  public addToCart(product: Iproduct) {
    this.cartService.addToCart(this.selectedNum, product);
    alert('Added to Cart!');
  }

}
