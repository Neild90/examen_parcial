import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-numero-romano',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './numero-romano.component.html',
  styleUrl: './numero-romano.component.css'
})
export class NumeroRomanoComponent {
  numero: number = 1;
  romano: string = '';

  convertirARomano() {
    const numerosRomanos = [
      'I', 'II', 'III', 'IV', 'V', 
      'VI', 'VII', 'VIII', 'IX', 'X'
    ];

    this.romano = numerosRomanos[this.numero - 1];

  }

}
