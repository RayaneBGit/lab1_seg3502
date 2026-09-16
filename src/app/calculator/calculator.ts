import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {

  result = 0;

  calculate(firstNumber: string, secondNumber: string, operation: string): void {
    const number1 = Number(firstNumber);
    const number2 = Number(secondNumber);

    if (operation === '+') {
      this.result = number1 + number2;
    } else if (operation === '-') {
      this.result = number1 - number2;
    } else if (operation === '*') {
      this.result = number1 * number2;
    } else if (operation === '/') {
      this.result = number1 / number2;
    }
  }
}