import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Usuario} from "./usuario";
import {CrudService} from "../framework/crud.service";

@Injectable()
export class UsuarioService extends CrudService<Usuario, number> {

  constructor(http: Http) {
    super(http, Usuario);
  }

}
