import { Injectable } from '@angular/core';
import { IAluno, listaAlunos } from './types/Aluno';
import { NotificacaoService } from './notificacao.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoListService {

  listaAlunosExistentes : IAluno[] = listaAlunos;

  constructor(
    private notificacaoService: NotificacaoService
  ) { }

  getAllAlunos() {
    return this.listaAlunosExistentes;
  }

  getAlunoById(idAluno: number) : IAluno | any {
    return this.listaAlunosExistentes.find(aluno => aluno.id === idAluno);
  }

  addAluno(id:number,nome: string, nota1: number, nota2: number) {
    const aluno = {id,nome, nota1, nota2};
    this.listaAlunosExistentes.push(aluno);
    this.notificacaoService.notificar('Aluno adicionado com sucesso');
  }

  deleteAluno(index: number) {
    this.listaAlunosExistentes.splice(index, 1);
  }

  alunosQuantidade () {
    return this.listaAlunosExistentes.length;
  }



}
