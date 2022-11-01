import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/iuser';
import { ConfirmOrderService } from 'src/app/services/confirm-order.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  paymentData: Iuser = {
    fullName: '',
    address: '',
    creditCardNumber: '',
    total: 0,
  };

  showErrorMsg = true;

  constructor(private confirmOrderService: ConfirmOrderService) { }

  ngOnInit(): void {
    this.paymentData = this.confirmOrderService.getConfirmOrder();

    if (this.paymentData.fullName !== '') {
      this.showErrorMsg = false;
    }
  }

}
