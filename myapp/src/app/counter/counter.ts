import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
   standalone: true,  
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count=0;
}
