import {CrudService} from "./crud.service";
import {OnInit} from "@angular/core";
import {CrudEntity} from "./crud.entity";
import {MensagemService} from "../growl/mensagem.service";

export abstract class CrudController<T extends CrudEntity<ID>, ID> implements OnInit {

  lista: T[];
  objeto: T;
  display: Boolean = false;
  displayEdit: Boolean = false;

  constructor(public crudService: CrudService<T, ID>, public mensagemService: MensagemService, public type: any) {
    this.objeto = new this.type;
  }

  persist() {
    if (this.objeto.getId() != null) {
      this.crudService.update(this.objeto)
        .subscribe(res => {
          this.mensagemService.send("Registro editado");
          this.displayEdit = false;
        });
    } else {
      this.crudService.insert(this.objeto)
        .subscribe(res => {
          const usuarioList = [...this.lista];
          usuarioList.push(res);
          this.lista = usuarioList;
          this.mensagemService.send("Usuário cadastrado");
          this.displayEdit = false;
        });
    }
  }

  ngOnInit() {
    this.crudService.get()
      .subscribe(res => this.lista = res);
  }

  novo() {
    this.objeto = new this.type;
    this.displayEdit = true;
  }

  remover(entity: T) {
    this.crudService.remove(entity.getId()).subscribe(res => {
      const usuarioList = [...this.lista];
      const index = usuarioList.indexOf(entity);
      usuarioList.splice(index, 1);
      this.lista = usuarioList;

      this.mensagemService.send("Registro removido");
      this.display = false;
    });
  }

}
