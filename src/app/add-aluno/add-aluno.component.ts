import { Component } from '@angular/core';
import { AlunoListService } from '../aluno-list.service';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrl: './add-aluno.component.css'
})
export class AddAlunoComponent {
  id = 2;
  nome = "";
  nota1 = "";
  nota2 = "";

  constructor(
    private alunoService: AlunoListService
  ) { }

  adicionarAluno(nome: string, nota1: string, nota2: string) {
    this.id++;
    this.alunoService.addAluno(this.id,nome, Number(nota1), Number(nota2));

    this.nome = "";
    this.nota1 = "";
    this.nota2 = "";

  }

}
