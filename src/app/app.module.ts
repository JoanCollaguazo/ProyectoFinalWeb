import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './app/inicio/inicio.component';
import { LogginComponent } from './app/loggin/loggin.component';
import { TestimoniosComponent } from './app/testimonios/testimonios.component';
import { ReservacionesComponent } from './app/reservaciones/reservaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LogginComponent,
    TestimoniosComponent,
    ReservacionesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
