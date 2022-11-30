import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-registrarprodutos',
  templateUrl: './registrarprodutos.component.html',
  styleUrls: ['./registrarprodutos.component.css']
})
export class RegistrarprodutosComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  cadastrarProduto() {
    let itens = document.getElementsByTagName('input')
    let produto 
    let stringproduto = '{'
    for (let i=0; i<itens.length; i++){
      stringproduto += `"${itens[i].getAttribute("alt")}":"${itens[i].value}",`
    }
    stringproduto = stringproduto.replace(/.$/,"}");
    produto = JSON.parse(stringproduto)
    this.productsService.save(produto).subscribe(
      resultado => {
        window.alert("Produto cadastrado com sucesso!")
        for(let i=0; i<itens.length; i++){
          itens[i].value = ""
        }
      },
      erro => {
        if(erro.status == 409){
          window.alert("Tente novamente")
        }
      }
    );
  }
}
