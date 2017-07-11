import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule, DataTableModule, DialogModule, GrowlModule, InputTextModule, SharedModule} from "primeng/primeng";
import {MdButtonModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {ProdutoComponent} from "./produto.component";
import {ProdutoService} from "./produto.service";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    MdButtonModule,
    InputTextModule,
    FormsModule,
    GrowlModule
  ],
  declarations: [ProdutoComponent],
  exports: [ProdutoComponent],
  providers: [ProdutoService]
})
export class ProdutoModule { }
