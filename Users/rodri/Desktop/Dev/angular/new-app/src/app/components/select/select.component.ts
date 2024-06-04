import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  nationalityCode: number | undefined;
  nationalities: { id: number; description: string } [] = [
        { id: 1, description: 'Angola' },
        { id: 2, description: 'Brasil' },
        { id: 3, description: 'Camarões' },
        { id: 4, description: 'Dinamarca' },
        { id: 5, description: 'Equador' },
        { id: 6, description: 'França' },
  ];

}
