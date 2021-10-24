import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FizzBuzzService } from './fizz-buzz.service';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss'],
})
export class FizzBuzzComponent implements OnInit {
  fizzBuzzMsg: string;
  defaultNumber: number = 20;
  previousDefaultNumber = this.defaultNumber;

  constructor(public fizzBuzzService: FizzBuzzService) {}

  ngOnInit(): void {}

  changeUi() {
    if (this.defaultNumber !== this.previousDefaultNumber) {
      this.fizzBuzzMsg = '';
    }
  }

  fizzBuzz(form: NgForm) {
    let userInput: number = form.value.number;
    console.log('number', form);

    if (userInput % 5 === 0 && userInput % 3 === 0) {
      this.fizzBuzzMsg = 'FizzBuzz';
    } else if (userInput % 5 === 0) {
      this.fizzBuzzMsg = 'Fizz';
    } else if (userInput % 3 === 0) {
      this.fizzBuzzMsg = 'Buzz';
    } else {
      this.fizzBuzzMsg = String(userInput);
    }

    this.fizzBuzzService.fizzBuzzMsg$.next(this.fizzBuzzMsg);
  }
}
