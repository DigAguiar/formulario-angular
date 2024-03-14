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
    let media = (nota1 + nota2) / 2;
    let aluno = {id,nome, nota1, nota2,media};
    this.listaAlunosExistentes.push(aluno);
    this.notificacaoService.notificar('Aluno adicionado com sucesso');
  }

  deleteAluno(idAluno: number) {
    let index = this.listaAlunosExistentes.findIndex(aluno => aluno.id === idAluno);
    if(index === null) {
      this.notificacaoService.notificar('Aluno não encontrado');
      return;
     }
    this.notificacaoService.notificar('Aluno removido com sucesso');
    this.listaAlunosExistentes.splice(index, 1);

  }

  alunosQuantidade () {
    return this.listaAlunosExistentes.length;
  }

  editarAluno (id:number,nome: string, nota1: number, nota2: number) {
    let media = (nota1 + nota2) / 2;
    let aluno = {id,nome, nota1, nota2,media};
    let index = this.listaAlunosExistentes.findIndex(aluno => aluno.id === id);
    this.listaAlunosExistentes[index] = aluno;
    this.notificacaoService.notificar('Aluno editado com sucesso');
  }



}
