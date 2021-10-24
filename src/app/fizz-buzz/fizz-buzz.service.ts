import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FizzBuzzService {
  fizzBuzzMsg: string;
  defaultNumber: number = 20;
  num: number;
  fizzBuzzMsg$: BehaviorSubject<string>;
  constructor() {
    this.fizzBuzzMsg$ = new BehaviorSubject<string>('');
  }

  // fizzBuzz(form: NgForm) {
  //   let number = form.value.number;
  //   this.num = number;
  //   console.log('number', form);

  //   if (number % 5 === 0 && number % 3 === 0) {
  //     this.fizzBuzzMsg = 'FizzBuzz';
  //     console.log(this.fizzBuzzMsg);
  //   } else if (number % 5 === 0) {
  //     this.fizzBuzzMsg = 'Fizz';
  //     console.log(this.fizzBuzzMsg);
  //   } else if (number % 3 === 0) {
  //     this.fizzBuzzMsg = 'Buzz';
  //     console.log(this.fizzBuzzMsg);
  //   } else {
  //     this.fizzBuzzMsg = number;
  //     console.log(number);
  //   }
  // }
}
