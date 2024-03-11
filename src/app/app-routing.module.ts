import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlunoComponent } from './add-aluno/add-aluno.component';

const routes: Routes = [
  { path: '', redirectTo: 'aluno', pathMatch: 'full'},
  { path: 'aluno', loadChildren: () => import('./get-aluno/get-aluno.module').then(m => m.GetAlunoModule) },
  { path: 'add-aluno', component: AddAlunoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
