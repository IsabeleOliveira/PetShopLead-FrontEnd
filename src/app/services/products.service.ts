import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = "http://localhost:8080/Produto-Lead"
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<any>(this.apiUrl)
  }

  save(requestCadastro: object){
    return this.http.post<Object>(this.apiUrl, requestCadastro);
  }

  getById(id: string){
    return this.http.get<Produtos>(`${this.apiUrl}/${id}`)
  }

  deleteById(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  editById(id: string, product:object){
    return this.http.put(`${this.apiUrl}/${id}`, product)
  }

  getByPetshop(id:string){
    return this.http.get<any>(`${this.apiUrl}/petshop?id=${id}`)
  }
}