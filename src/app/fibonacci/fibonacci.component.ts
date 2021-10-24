import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FizzBuzz } from '../fizz-buzz.model';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss'],
})
export class FibonacciComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  fibonacci: number[] = [];
  fibonacciObj: FizzBuzz[] = [];
  DefaultuserInput: number = 7;
  displayedColumns: string[] = ['No', 'Fibonacci'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(public fibonacciService: FibonacciService) {}

  ngOnInit(): void {}

  fibonacciCalculator(form: NgForm) {
    let userInput = form.value.number;
    let a = 0,
      b = 1,
      f = 1;

    if (userInput >= 0 && userInput <= 100) {
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

      console.log(this.fibonacciObj);
      this.fibonacciService.fibNum$.next(this.fibonacciObj);
    }
    this.dataSource.data = this.fibonacciObj;
  }

  // allowNumericDigitsOnlyOnKeyUp(e) {
  //   const charCode = e.which ? e.which : e.keyCode;

  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     this.msg = 'Only numeric values or digits allowed';
  //   }
  // }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
