import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private formBuider: FormBuilder) { }

  formLogin = this.formBuider.group({
    nombres: ['', [Validators.required]],
    password1: ['', [Validators.required, Validators.minLength(8)]],
    password2: ['', [Validators.required, Validators.minLength(8)]]
  });





  ngOnInit() {
    /*
      this.formLogin = this.formBuider.group({
        //verificar con validator que el valor ingresado sea requerido y ver si es email
        nombres:['',[Validators.required]],
        apellidos:['',[Validators.required]],
        empresa:['',[Validators.required]],
        usuario:['',[Validators.required,Validators.name]],
        email:['',[Validators.required,Validators.email]],
        password: ['',Validators.required,Validators.minLength(6)]
  
      });
      */
  }

  submit(): any {
    console.log(this.formLogin.value);
  }
}
