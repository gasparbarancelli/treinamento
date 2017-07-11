import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UsuarioModule} from "./usuario/usuario.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {UsuarioComponent} from "./usuario/usuario.component";
import {ProdutoComponent} from "./produto/produto.component";
import {ProdutoModule} from "./produto/produto.module";
import {MensagemModule} from "./growl/mensagem.module";
import {MensagemService} from "./growl/mensagem.service";


const appRoutes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: '',      component: UsuarioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    UsuarioModule,
    ProdutoModule,
    MensagemModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MensagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
