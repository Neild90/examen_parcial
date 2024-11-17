import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-salario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calcular-salario.component.html',
  styleUrl: './calcular-salario.component.css'
})
export class CalcularSalarioComponent {
  horasTrabajadas: number = 0; 
  salario: number | null = null; 

  calcularSalario() {
    const tarifaNormal = 16; 
    const tarifaExtra = 20; 
    const horasNormales = Math.min(this.horasTrabajadas, 40);
    const horasExtras = Math.max(this.horasTrabajadas - 40, 0);

    this.salario = horasNormales * tarifaNormal + horasExtras * tarifaExtra;
    
  }

}
