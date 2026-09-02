import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './sales.html',
  styleUrl: './sales.css'
})
export class Sales {

  sale = {
    customer: '',
    date: '',
    paymentType: '',
    salesPerson: 'Admin User',
    product: '',
    goldRate: 21500,
    weight: 0,
    makingCharges: 0,
    discount: 0,
    tax: 3
  };

  totalAmount = 0;


  sales = [
    {
      id: 1,
      invoice: 'INV-2025-0052',
      date: '17/05/2025 11:45 AM',
      customer: 'Ali Raza',
      weight: 10.250,
      amount: 52350,
      payment: 'Cash',
      salesPerson: 'Admin User'
    },

    {
      id: 2,
      invoice: 'INV-2025-0051',
      date: '17/05/2025 11:15 AM',
      customer: 'Fatima Khan',
      weight: 8.750,
      amount: 44625,
      payment: 'Card',
      salesPerson: 'Admin User'
    },

    {
      id: 3,
      invoice: 'INV-2025-0050',
      date: '17/05/2025 10:40 AM',
      customer: 'Hassan Ali',
      weight: 15.000,
      amount: 76500,
      payment: 'Cash',
      salesPerson: 'Admin User'
    },

    {
      id: 4,
      invoice: 'INV-2025-0049',
      date: '17/05/2025 10:10 AM',
      customer: 'Ahmed Shah',
      weight: 12.500,
      amount: 63750,
      payment: 'Bank Transfer',
      salesPerson: 'Admin User'
    },

    {
      id: 5,
      invoice: 'INV-2025-0048',
      date: '17/05/2025 09:50 AM',
      customer: 'Sara Khan',
      weight: 9.250,
      amount: 47175,
      payment: 'Cash',
      salesPerson: 'Admin User'
    }
  ];


  calculateTotal() {

    const goldAmount =
      this.sale.goldRate * this.sale.weight;

    const subtotal =
      goldAmount + this.sale.makingCharges;

    const discount =
      this.sale.discount || 0;

    const afterDiscount =
      subtotal - discount;

    const taxAmount =
      afterDiscount * (this.sale.tax / 100);

    this.totalAmount =
      afterDiscount + taxAmount;

  }


  addToCart() {

    if (!this.sale.customer) {
      alert('Please select customer');
      return;
    }

    if (!this.sale.product) {
      alert('Please select product');
      return;
    }

    if (this.sale.weight <= 0) {
      alert('Please enter weight');
      return;
    }

    this.calculateTotal();

    alert(
      `Sale added successfully!\nTotal: PKR ${this.totalAmount.toFixed(2)}`
    );

  }


  resetForm() {

    this.sale = {
      customer: '',
      date: '',
      paymentType: '',
      salesPerson: 'Admin User',
      product: '',
      goldRate: 21500,
      weight: 0,
      makingCharges: 0,
      discount: 0,
      tax: 3
    };

    this.totalAmount = 0;

  }


  viewSale(item: any) {

    alert(
      `Invoice: ${item.invoice}\nCustomer: ${item.customer}\nAmount: PKR ${item.amount}`
    );

  }


  printSale(item: any) {

    console.log('Print sale:', item);

    window.print();

  }


  deleteSale(id: number) {

    const confirmDelete =
      confirm('Are you sure you want to delete this sale?');

    if (!confirmDelete) {
      return;
    }

    this.sales =
      this.sales.filter(item => item.id !== id);

  }

}