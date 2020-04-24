import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-widget',
  templateUrl: './calculator-widget.component.html',
  styleUrls: ['./calculator-widget.component.scss']
})
export class CalculatorWidgetComponent implements OnInit {

  inputString = '';

  constructor() { }

  ngOnInit(): void {
  }

}
