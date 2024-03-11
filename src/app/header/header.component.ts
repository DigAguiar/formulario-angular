import { Component } from '@angular/core';
import { AlunoListService } from '../aluno-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private alunoListService: AlunoListService,
  ) { }

    getQuantidadeAlunos () {
      return this.alunoListService.alunosQuantidade();
    }


}
