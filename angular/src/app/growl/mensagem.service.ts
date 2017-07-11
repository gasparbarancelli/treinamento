import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MensagemService {

  subject: Subject<String> = new Subject<String>();

  send(mensagem: string) {
    this.subject.next(mensagem);
  }

  observable(): Observable<String> {
    return this.subject.asObservable();
  }

}
