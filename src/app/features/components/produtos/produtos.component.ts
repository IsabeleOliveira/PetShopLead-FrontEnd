import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { SessionService } from 'src/app/services/session.service';
import { Produtos } from 'src/app/models/produtos';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public products:Produtos[] = []
  public page = "prod"
  constructor(private productService: ProductsService, private sessionService: SessionService, private route: Router) {  
  }

  ngOnInit(): void {
    this.getByPetshop()
  }

  getByPetshop(){
    let session: User = this.sessionService.getSession()
    this.productService.getByPetshop(session.id)
      .subscribe(result =>{
        this.products = result.content
      })
  }
  registrar(){
    console.log(this.route.url)
    this.route.navigate(['/index/produtos/registrarprodutos'])
    
  }
  
}