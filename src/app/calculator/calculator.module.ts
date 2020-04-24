import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorWidgetComponent } from './components/calculator-widget/calculator-widget.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CalculatorWidgetComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CalculatorWidgetComponent,
  ]
})
export class CalculatorModule { }
