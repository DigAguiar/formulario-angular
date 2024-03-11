import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetAlunoRoutingModule } from './get-aluno-routing.module';
import { GetAlunoComponent } from './get-aluno.component';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';


@NgModule({
  declarations: [
    GetAlunoComponent,
    DetalheAlunoComponent
  ],
  imports: [
    CommonModule,
    GetAlunoRoutingModule
  ]
})
export class GetAlunoModule { }
