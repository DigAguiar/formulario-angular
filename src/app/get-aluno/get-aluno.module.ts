import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetAlunoRoutingModule } from './get-aluno-routing.module';
import { GetAlunoComponent } from './get-aluno.component';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetAlunoComponent,
    DetalheAlunoComponent
  ],
  imports: [
    CommonModule,
    GetAlunoRoutingModule,
    FormsModule
  ]
})
export class GetAlunoModule { }
