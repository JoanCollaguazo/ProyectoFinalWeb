import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './app/inicio/inicio.component';
import { LogginComponent } from './app/loggin/loggin.component';
import { ReservacionesComponent } from './app/reservaciones/reservaciones.component';
import { TestimoniosComponent } from './app/testimonios/testimonios.component';

//AQUI VAN TODAS LAS RUTAS DE LAS PAGINAS:
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'loggin', component: LogginComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'reservaciones', component: ReservacionesComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
