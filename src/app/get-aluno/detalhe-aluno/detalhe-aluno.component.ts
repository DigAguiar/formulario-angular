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

  alunoDetalhes : IAluno | any;
  id : number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunoService: AlunoListService

  ) { }
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.alunoDetalhes = this.alunoService.getAlunoById(this.id);
  }



}
