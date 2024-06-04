import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  radioSelected: string = '';
}
