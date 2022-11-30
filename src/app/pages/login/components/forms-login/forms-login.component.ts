import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.css']
})
export class FormLoginComponent implements OnInit {

  userInvalido: boolean = false;
  constructor(private autenticationService: AutenticationService, 
  private router: Router) { }

  ngOnInit(): void {
  }
  logar(e: any){
    console.log("Eae");
    let valueEmail = document.getElementById("login-email") as HTMLInputElement;
    let valueSenha = document.getElementById("login-senha")  as HTMLInputElement;
    console.log(valueEmail.value);
    console.log(valueSenha.value);
    
    const user = this.autenticationService.getUsers(valueEmail.value, valueSenha.value)
    if(typeof user === 'undefined'){}
    else{
      if(user.length == 0){
        this.userInvalido = true
      }else{
        this.userInvalido = false
        this.router.navigate(['/index/produtos'])
      }
    }
    
  }

}
