import { Component } from '@angular/core';

@Component({
  selector: 'app-app-checkbox',
  templateUrl: './app-checkbox.component.html',
  styleUrl: './app-checkbox.component.scss'
})
export class AppCheckboxComponent {
  isActive : boolean = false;

  onChange( isUserActive : boolean ){
    console.log( 'onChange',  isUserActive);

    this.isActive = isUserActive;
  }

}
