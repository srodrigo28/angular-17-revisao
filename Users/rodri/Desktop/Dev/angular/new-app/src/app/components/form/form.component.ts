import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  inputText : string = 'Texto inicial';
  inputTextarea : string = 'Descrição inicial';
  inputSelect : string = '1';
  inputRadio : string = '1';
  inputCheckbox : string = '1';
  
  onSubmit(form: NgForm){
    console.log('onSumit ', form)
  }
}
