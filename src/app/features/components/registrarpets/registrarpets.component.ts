import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sequenceEqual } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';
import { PetsService } from 'src/app/services/pets.service';
import { RequestPets } from 'src/app/models/request-pets';

@Component({
  selector: 'app-registrarpets',
  templateUrl: './registrarpets.component.html',
  styleUrls: ['./registrarpets.component.css']
})
export class RegistrarpetsComponent implements OnInit {
  public requestPets!:RequestPets
  public page = "pet"
  constructor(private petsService: PetsService, private route: Router) { 
    this.requestPets = new RequestPets()
  }


  ngOnInit(): void {
  }


  cadastrarPets(){
    this.petsService.save(this.requestPets).subscribe(
      resultado => {
        window.alert("Pet cadastrado com sucesso!")
        this.route.navigate(["/pets"])
      }, erro => {  
        console.log(erro)
      }
    )
  }
}
