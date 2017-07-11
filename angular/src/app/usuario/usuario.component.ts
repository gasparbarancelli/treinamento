import {Component} from '@angular/core';
import {Usuario} from "./usuario";
import {CrudController} from "../framework/crud.controller";
import {UsuarioService} from "./usuario.service";
import {MensagemService} from "../growl/mensagem.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent extends CrudController<Usuario, number> {

  constructor(usuarioService: UsuarioService, mensagemService: MensagemService) {
    super(usuarioService, mensagemService, Usuario);
  }

}
