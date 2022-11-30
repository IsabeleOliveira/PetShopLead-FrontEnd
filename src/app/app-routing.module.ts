import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './features/components/produtos/produtos.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';
import { PetsComponent } from './features/components/pets/pets.component';
import { EditarProdComponent } from './features/components/editarprodutos/editarprodutos.component';
import { EditarPetsComponent } from './features/components/editarpets/editarpets.component';
import { RegistrarpetsComponent } from './features/components/registrarpets/registrarpets.component';
import { AccessibilityBarComponent } from './features/components/acessibilitybar/acessibilitybar.component';
import { MochilaComponent } from './features/components/produtos/components/mochila/mochila.component';
import { Pet1Component } from './features/components/pets/components/pet1/pet1.component';
import { RegistrarprodutosComponent } from './features/components/registrarprodutos/registrarprodutos.component';

const routes: Routes = [
  {path:'cadastro',component: CadastroComponent},
  {path:'index', component: LandingpageComponent, 
  children: [{path: 'produtos', component: ProdutosComponent}, {path: 'editarprodutos', component: EditarProdComponent},
  {path: 'registrarprodutos', component: RegistrarprodutosComponent},
  {path: 'mochila', component: MochilaComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'editarpets', component: EditarPetsComponent},
  {path: 'registrarpets', component: RegistrarpetsComponent}, {path: 'pet1', component: Pet1Component},
]},
  {path: '', component: LoginComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'acessibilidade', component: AccessibilityBarComponent},
  
  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }