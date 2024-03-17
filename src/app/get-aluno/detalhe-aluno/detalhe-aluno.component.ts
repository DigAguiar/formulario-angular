import { Component, OnInit } from '@angular/core';
import { AlunoListService } from '../../aluno-list.service';
import { ActivatedRoute } from '@angular/router';
import { IAluno } from '../../types/Aluno';

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrl: './detalhe-aluno.component.css'
})
export class DetalheAlunoComponent implements OnInit{

  nomeAluno : string | any;
  nota1Aluno :number | any
  nota2Alunos : number | any;

  alunoDetalhes : IAluno | any;
  id: number | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunoService: AlunoListService

  ) { }
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.alunoDetalhes = this.alunoService.getAlunoById(this.id);
    this.nomeAluno = this.alunoDetalhes.nome;
    this.nota1Aluno = this.alunoDetalhes.nota1;
    this.nota2Alunos = this.alunoDetalhes.nota2;
  }

  editarAluno() {
    this.alunoService.editarAluno(this.id, this.nomeAluno, this.nota1Aluno, this.nota2Alunos);

  }



}
