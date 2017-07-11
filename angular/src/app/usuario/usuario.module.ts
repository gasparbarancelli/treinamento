import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsuarioComponent} from './usuario.component';
import {UsuarioService} from "./usuario.service";
import {ButtonModule, DataTableModule, DialogModule, GrowlModule, InputTextModule, SharedModule} from "primeng/primeng";
import {MdButtonModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

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
  declarations: [UsuarioComponent],
  exports: [UsuarioComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }
