import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent {
  constructor(private formBuider: FormBuilder) { }

  formLogin = this.formBuider.group({
    usuario: ['', [Validators.required]],
    password: ['',[Validators.required,Validators.minLength(8)]]
    
  });





  ngOnInit() {

  }

  submit(): any {
    console.log(this.formLogin.value);
  }


}
