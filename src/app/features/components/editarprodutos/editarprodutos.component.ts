import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { SessionService } from 'src/app/services/session.service';
import { Produtos } from 'src/app/models/produtos';
import { RequestProducts } from 'src/app/models/request-products';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-editarprodutos',
  templateUrl: './editarprodutos.component.html',
  styleUrls: ['./editarprodutos.component.css']
})

export class EditarProdComponent {
  public requestProduto!:RequestProducts
  public session!:User
  public page = "prod"
  public id = this.activatedRoute.snapshot.paramMap.get("id");
  constructor(private cd: ChangeDetectorRef,private sessionService:SessionService,private produtoService:ProductsService,private activatedRoute : ActivatedRoute, private route:Router){
    this.session = new User()
    this.requestProduto = new RequestProducts()
    
  }
  ngOnInit(): void {
    this.session = this.sessionService.getSession()
    this.getProduto()
  }

  updateProduto(){
    if(typeof this.id === 'string'){
    this.produtoService.editById(this.id, this.requestProduto)
    .subscribe(result =>{
        window.alert("Produto atualizado.")
        this.route.navigate([`/home/produtos/detalhes/${this.id}`])
    }, erro=>{
      console.log(erro)
    })
  }
  }


  getProduto(){
    if(typeof this.id === 'string'){
    this.produtoService.getById(this.id)
      .subscribe(result =>{
        let produto = result as Produtos
        // let form = document.getElementsByTagName('input')
        // let description = document.getElementsByTagName('textarea')
        this.requestProduto.name = produto.name
        this.requestProduto.price = produto.price
        this.requestProduto.description = produto.description
        
      })
    }
  }
}

