import { Routes } from '@angular/router';
import { CalcularSalarioComponent } from './calcular-salario/calcular-salario.component';
import { NumeroRomanoComponent } from './numero-romano/numero-romano.component';
import { DescuentoMotoComponent } from './descuento-moto/descuento-moto.component';

export const routes: Routes = [
    {path: "salario", component:CalcularSalarioComponent},
    {path: "num-romano", component: NumeroRomanoComponent},
    {path: "descuento", component: DescuentoMotoComponent},

];
