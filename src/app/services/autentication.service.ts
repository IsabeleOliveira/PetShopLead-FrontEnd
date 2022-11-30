import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  users = [
    {
    email: "teste@teste.com",
    senha: "123"
    },

    {
    email: "dell@gmail.com",
    senha: "1235"
    }
  ]
  constructor(private router: Router) { }
  getUsers(valueEmail: string, valueSenha: string){
    sessionStorage.setItem('users', JSON.stringify(this.users))
    var user
    const usersString = sessionStorage.getItem('users');
    if(!(typeof usersString === 'string')){
      
    }else{
      let users:[{email:string,senha:string}] = JSON.parse(usersString)  
      console.log(users)
      user = users.filter(users => (users.email==valueEmail && users.senha==valueSenha ))  
      this.router.navigate(['/index/produtos'])
      
    }
    return user
  }
  setUsers(user:{email: string, senha:string}){
    this.users.push(user)
    sessionStorage.setItem('users', JSON.stringify({
      email: "teste@teste.com",
      senha: "123"
      }))
    console.log(this.users)
  }
}