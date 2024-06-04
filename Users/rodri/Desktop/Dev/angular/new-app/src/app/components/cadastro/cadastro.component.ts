import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  @Input() planType: string = '';
  @Input() planPrice: number = 0;
}
