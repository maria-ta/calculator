import { Component, OnInit } from '@angular/core';

type AddCharFun = () => void;


@Component({
  selector: 'app-calculator-widget',
  templateUrl: './calculator-widget.component.html',
  styleUrls: ['./calculator-widget.component.scss']
})
export class CalculatorWidgetComponent implements OnInit {

  inputString = '';
  showAllButtons = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleButtons() {
    this.showAllButtons = !this.showAllButtons;
  }

  clearInput() {
    this.inputString = '';
  }

  inputChange($event) {
    this.inputString = $event.target.value;
  }

  addChar(char: string): AddCharFun {
    return () => {
      this.inputString += char;
    };
  }

  backspace() {
    this.inputString = this.inputString.substring(0, this.inputString.length - 1);
  }

  percentage() {
    const numberStr = Number(this.inputString);
    if (!isNaN(numberStr)) {
      this.inputString = `${numberStr / 100.0}`;
    }
  }

}
