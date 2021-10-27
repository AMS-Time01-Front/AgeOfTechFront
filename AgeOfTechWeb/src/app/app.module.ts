import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './Usuario/user-login/user-login.component';
import { UserCadastrarComponent } from './Usuario/user-cadastrar/user-cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [	
    AppComponent,
    UserLoginComponent,
    UserCadastrarComponent,
    CategoriaComponent,
      ProdutoComponent
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
