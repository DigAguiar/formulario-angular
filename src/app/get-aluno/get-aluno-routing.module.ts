import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAlunoComponent } from './get-aluno.component';
import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';

const routes: Routes = [
  { path: '', component: GetAlunoComponent },
  { path: ':id', component: DetalheAlunoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetAlunoRoutingModule { }
