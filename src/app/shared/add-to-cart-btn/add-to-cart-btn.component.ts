import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.css']
})
export class AddToCartBtnComponent implements OnInit {

  @Output() addToCartBtn = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.addToCartBtn.emit();
    console.log("test @output");

  }

}
