import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { ConfirmOrderService } from '../../services/confirm-order.service';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  fullName: string = '';

  address: string = '';

  creditCardNumber: string = '';

  products: Iproduct[] = [];

  empty: boolean = true;

  total: number = 0;

  quantityValue: number = 0;

  onChange = (e: any, product: Iproduct) => {
    this.products = this.cartService.changeInCart(e, product);
    this.total = this.products.reduce((pre, curr) => {
      const currNum = curr.price * parseInt(curr.quantity as unknown as string);
      return pre + currNum;
    }, 0);
    if (this.total === 0) {
      this.empty = true;
    }
  };

  constructor(
    private cartService: CartService,
    private router: Router,
    private confirmOrderService: ConfirmOrderService
  ) { }

  ngOnInit(): void {
    this.products = this.cartService.getProductsInCart();

    if (this.products.length !== 0) {
      this.empty = false;
      this.total = this.products.reduce((pre, curr) => {
        const currNum =
          curr.price * parseInt(curr.quantity as unknown as string);
        return pre + currNum;
      }, 0);
    }
  }

  submitForm = () => {
    const paymentData = {
      fullName: this.fullName,
      address: this.address,
      creditCardNumber: this.creditCardNumber,
      total: this.total,
    };

    this.confirmOrderService.addConfirmOrder(paymentData);

    this.fullName = '';
    this.address = '';
    this.creditCardNumber = '';
    this.total = 0;

    this.cartService.clearCart();
    this.router.navigateByUrl('/confirmation');
  };
}
