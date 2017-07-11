import {CrudEntity} from "../framework/crud.entity";

export class Produto implements CrudEntity<number> {

  id: number;

  descricao: string;

  valor: number;

  getId(): number {
    return this.id;
  }

}
