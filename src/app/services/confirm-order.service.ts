import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class ConfirmOrderService {
  confirmOrder: Iuser = {
    fullName: '',
    address: '',
    creditCardNumber: '',
    total: 0,
  };

  constructor() { }

  getConfirmOrder() {
    return this.confirmOrder;
  }

  addConfirmOrder(data: Iuser) {
    this.confirmOrder = data;
    return this.confirmOrder;
  }
}
