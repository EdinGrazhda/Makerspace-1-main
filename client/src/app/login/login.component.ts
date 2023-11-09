import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  arr = [
    { id: 1, name: 'Apple', describe: 'kingi', price: 1000 },
    { id: 2, name: 'Samsung', describe: 'tamtung', price: 700 },
    { id: 3, name: 'Xiaomi', describe: 'kinez', price: 450 },
  ];

  priceToChange = 10;
  phoneName = '';
  password = '';
  username = '';
  emptyValues = false;

  changePrice(selectedPhoneId: number, increasePrice: boolean) {
    for (let phone of this.arr) {
      if (selectedPhoneId === phone.id) {
        increasePrice
          ? (phone.price += this.priceToChange)
          : (phone.price -= this.priceToChange);
      }
    }
  }

  login() {
    console.log(this.username, this.password);
    if (this.username.length !== 0 && this.password.length !== 0) {
      this.emptyValues = false;
    } else {
      this.emptyValues = true;
    }
  }
}