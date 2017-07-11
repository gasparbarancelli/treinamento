import {Component} from '@angular/core';
import {CrudController} from "../framework/crud.controller";
import {Produto} from "./produto";
import {ProdutoService} from "./produto.service";
import {MensagemService} from "../growl/mensagem.service";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent extends CrudController<Produto, number> {

  constructor(produtoService: ProdutoService, mensagemService: MensagemService) {
    super(produtoService, mensagemService, Produto);
  }

}
