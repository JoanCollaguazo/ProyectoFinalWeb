import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './app/inicio/inicio.component';
import { LogginComponent } from './app/loggin/loggin.component';

//AQUI VAN TODAS LAS RUTAS DE LAS PAGINAS:
const routes: Routes = [
  {path: '',component:InicioComponent},
  {path: 'loggin',component:LogginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
