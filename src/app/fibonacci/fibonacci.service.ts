import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FizzBuzz } from '../fizz-buzz.model';

@Injectable({
  providedIn: 'root',
})
export class FibonacciService {
  fibNum$: BehaviorSubject<FizzBuzz[]>;

  constructor() {
    this.fibNum$ = new BehaviorSubject<FizzBuzz[]>([]);
  }
}
