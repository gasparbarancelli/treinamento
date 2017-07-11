import {Injectable} from '@angular/core';
import {CrudService} from "../framework/crud.service";
import {Http} from "@angular/http";
import {Produto} from "./produto";

@Injectable()
export class ProdutoService extends CrudService<Produto, number> {

  constructor(http: Http) {
    super(http, Produto);
  }

}
