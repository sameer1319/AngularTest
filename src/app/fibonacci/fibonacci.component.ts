import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubSink } from 'subsink';
import { FizzBuzz } from '../fizz-buzz.model';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss'],
})
export class FibonacciComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subs = new SubSink();

  fibonacci: number[] = [];
  fibonacciObj: FizzBuzz[] = [];
  DefaultuserInput: number = 7;
  displayedColumns: string[] = ['No', 'Fibonacci'];
  dataSource = new MatTableDataSource<FizzBuzz>([]);

  constructor(public fibonacciService: FibonacciService) {}

  ngOnInit(): void {
    this.subs.add(
      this.fibonacciService.fibNum$.subscribe((data) => {
        this.dataSource.data = data;
      })
    );
  }

  fibonacciCalculator(form: NgForm) {
    let userInput = form.value.number;
    let a = 0,
      b = 1,
      f = 1;

    if (userInput >= 0 && userInput <= 100) {
      // clearing the array before adding new fibonacci
      this.fibonacci.splice(0, this.fibonacci.length);
      for (var i = 1; i <= userInput; i++) {
        f = a + b;
        a = b;
        b = f;

        this.fibonacci.push(f);
      }

      // Converting array into array of objects
      this.fibonacciObj = this.fibonacci.map((el, i) => {
        return { no: i + 1, fibonacci: el };
      });

      this.fibonacciService.fibNum$.next(this.fibonacciObj);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
