import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FizzBuzzService {
  fizzBuzzMsg$: BehaviorSubject<string>;
  constructor() {
    this.fizzBuzzMsg$ = new BehaviorSubject<string>('');
  }
}
