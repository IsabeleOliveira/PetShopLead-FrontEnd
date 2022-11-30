import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('cadastroConfirSenha') inputConfirSenha!: ElementRef;
  senhasIguais: boolean = true;
  constructor(private autenticationService:AutenticationService,  private renderer2: Renderer2,
  private router: Router) { }
  ngOnInit(): void {
  }
  cadastrarUsuario(e: any){
    console.log("Eae");
    let valueEmail = document.getElementById("cadastro-email") as HTMLInputElement;
    let valueSenha = document.getElementById("cadastro-senha")  as HTMLInputElement;
    let valueConfirSenha = document.getElementById("cadastro-confirmar-senha")  as HTMLInputElement;

    if(valueSenha.value!=valueConfirSenha.value){
      this.senhasIguais = false
    }else{
    let user = {email: valueEmail.value, senha: valueSenha.value}
    this.autenticationService.setUsers(user)
    this.senhasIguais = true
    this.router.navigate([''])
    }
  }
}