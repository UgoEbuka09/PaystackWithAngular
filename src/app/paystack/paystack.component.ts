import { Component } from '@angular/core';
import { BagDetails } from './interface';
import { PaystackOptions } from 'angular4-paystack';

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.component.html',
  styleUrl: './paystack.component.css',
})
export class PaystackComponent {
  bagDetail: any;
  price!: number;
  show: boolean = false;
  message!: string;
  reference!: string;

  data: BagDetails[] = [
    {
      id: 1,
      name: 'Ella Purse',
      image: './assets/bag01.jpg',
      price: 5000,
    },
    {
      id: 2,
      name: 'Crystal 2in1 Bag',
      image: './assets/bag02.jpg',
      price: 20000,
    },
    {
      id: 3,
      name: 'holloids 3in1 Bag',
      image: './assets/bag03.jpg',
      price: 14000,
    },
    {
      id: 4,
      name: 'Jasmine Bag',
      image: './assets/bag04.jpg',
      price: 35007,
    },
  ];

  options: PaystackOptions = {
    amount: 0,
    email: 'ugochukwuebuka09@gmail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`,
    channels: ['USSD', 'bank', 'card'],
    quantity: 1,
    currency: 'NGN',
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }
  getBagDetailById(id: number) {
    console.log(id);
    this.bagDetail = this.data.filter((item) => {
      return item.id === id;
    });
    this.price = this.bagDetail[0].price;
    this.options.amount = this.price;
    console.log(this.price);

    if (this.bagDetail) {
      this.show = true;
    }
    console.log(this.bagDetail);
    console.log(this.show);
  }

  paymentInit() {
    console.log('Payment is Initialized');
  }

  paymentSuccess(ref: any) {
    this.message = 'Payment is successfull';
    console.log(this.message, ref);
  }

  paymentFailed() {
    console.log('Payment Failed');
  }
}
