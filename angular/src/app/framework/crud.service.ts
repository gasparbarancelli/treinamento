import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {CrudEntity} from "./crud.entity";
import 'rxjs/Rx';

export abstract class CrudService<T extends CrudEntity<ID>, ID> {

  constructor(public http: Http, public type: any) { }

  private getUrl() {
    return `http://localhost:8080/api/treinamento/${this.type.name.toLowerCase()}`;
  }

  get(): Observable<T[]> {
    return this.http.get(this.getUrl())
      .map(res => {
        const toReturn = [];
        const objetos = res.json()._embedded.objetos;

        const length = objetos.length;
        for (let i = 0; i < length; i++) {
          toReturn.push(Object.assign(new this.type, objetos[i]));
        }

        return toReturn;
      });
  }

  update(entity: T): Observable<T> {
    const url = `${this.getUrl()}/${entity.getId()}`;
    return this.http.put(url, entity)
      .map(res => Object.assign(new this.type, res.json()));
  }

  insert(entity: T) {
    return this.http.post(this.getUrl(), entity)
      .map(res => Object.assign(new this.type, res.json()));
  }

  remove(id: ID): Observable<Response> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.delete(url);
  }

}
