import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/components/header/header.component';
import { AccessibilityBarComponent } from './features/components/acessibilitybar/acessibilitybar.component';
import { ProdutosComponent } from './features/components/produtos/produtos.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormsComponent } from './pages/cadastro/components/forms/forms.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './pages/login/components/forms-login/forms-login.component';
import { FooterComponent } from './features/components/footer/footer.component';
import { PetsComponent } from './features/components/pets/pets.component';
import { EditarProdComponent } from './features/components/editarprodutos/editarprodutos.component';
import { EditarPetsComponent } from './features/components/editarpets/editarpets.component';
import { RegistrarpetsComponent } from './features/components/registrarpets/registrarpets.component';
import { MochilaComponent } from './features/components/produtos/components/mochila/mochila.component';
import { Pet1Component } from './features/components/pets/components/pet1/pet1.component';
import { RegistrarprodutosComponent } from './features/components/registrarprodutos/registrarprodutos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccessibilityBarComponent,
    ProdutosComponent,
    CadastroComponent,
    FormsComponent,
    LandingpageComponent,
    LoginComponent,
    FormLoginComponent,
    FooterComponent,
    PetsComponent,
    EditarProdComponent,
    EditarPetsComponent,
    RegistrarpetsComponent,
    MochilaComponent,
    Pet1Component,
    RegistrarprodutosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
