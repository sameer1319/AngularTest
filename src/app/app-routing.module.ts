import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';

const routes: Routes = [
  { path: '', redirectTo: '/fizz-buzz', pathMatch: 'full' },
  { path: 'fizz-buzz', component: FizzBuzzComponent },
  { path: 'fibonacci-calculator', component: FibonacciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
