import {CrudEntity} from "../framework/crud.entity";

export class Usuario implements CrudEntity<number> {

  id: number;

  usuario: string;

  senha: string;

  getId(): number {
    return this.id;
  }

}
