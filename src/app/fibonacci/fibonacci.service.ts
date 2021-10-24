import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FibonacciService {
  fibNum$: BehaviorSubject<any[]>;

  constructor() {
    this.fibNum$ = new BehaviorSubject<any>([]);
  }
}
