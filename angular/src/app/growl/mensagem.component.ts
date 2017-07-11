import {Component, OnInit} from '@angular/core';
import {Message} from "primeng/primeng";
import {MensagemService} from "./mensagem.service";

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  msgs: Message[] = [];

  constructor(private mensagemService: MensagemService) {}

  ngOnInit(): void {
    this.mensagemService.observable().subscribe(msg => {
      this.msgs.push({
        severity: "info",
        summary: "Sucesso!",
        detail: msg.toString()
      });
    });
  }
}
