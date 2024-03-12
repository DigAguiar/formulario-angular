import { Component, OnInit } from '@angular/core';
import { AlunoListService } from '../aluno-list.service';
import { IAluno } from '../types/Aluno';

@Component({
  selector: 'app-get-aluno',
  templateUrl: './get-aluno.component.html',
  styleUrl: './get-aluno.component.css'
})
export class GetAlunoComponent implements OnInit {
  listaAlunos : IAluno[] | any;
  mensagemResultadoAluno : string = "";

  constructor (
    private alunoService: AlunoListService
  ) { }


  ngOnInit() { 
     this.listaAlunos = this.alunoService.getAllAlunos();
  }

  apagarAluno(idAluno : number) {
    this.alunoService.deleteAluno(idAluno);

  }

}
