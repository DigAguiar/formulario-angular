import { Injectable } from '@angular/core';
import { IAluno, listaAlunos } from './types/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoListService {

  listaAlunosExistentes : IAluno[] = listaAlunos;

  constructor() { }

  getAllAlunos() {
    return this.listaAlunosExistentes;
  }

  addAluno(nome: string, nota1: number, nota2: number) {
    const aluno = {nome, nota1, nota2};
    this.listaAlunosExistentes.push(aluno);
  }

  deleteAluno(index: number) {
    this.listaAlunosExistentes.splice(index, 1);
  }

  alunosQuantidade () {
    return this.listaAlunosExistentes.length;
  }


}
