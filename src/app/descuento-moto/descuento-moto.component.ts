import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-descuento-moto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './descuento-moto.component.html',
  styleUrl: './descuento-moto.component.css'
})
export class DescuentoMotoComponent {

  valorMoto: number = 6000;  
  descuento: number = 0;     
  precioFinal: number = 0;   
  diaCompra: string = '';    

 
  calcularPrecio() {
    if (this.diaCompra === 'martes') {
      this.descuento = 12;
    } else if (this.diaCompra === 'sabado') {
      this.descuento = 18;
    } else if (this.diaCompra === 'feriado') {
      this.descuento = 25;
    } else {
      this.descuento = 0;
    }
    this.precioFinal = this.valorMoto - (this.valorMoto * this.descuento / 100);
  }

}
