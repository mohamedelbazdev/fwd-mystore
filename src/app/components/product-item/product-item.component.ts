import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Iproduct;

  public selectedNum: number = 1;
  public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public onClickChange = () => {
    this.router.navigateByUrl(`/product/${this.product.name}`);
  };

  public addToCart(product: Iproduct) {
    this.cartService.addToCart(this.selectedNum, product);
    alert('Added to Cart!');
  }

  constructor(private router: Router, private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {
  }

}
