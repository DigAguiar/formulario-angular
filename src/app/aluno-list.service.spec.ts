import { TestBed } from '@angular/core/testing';

import { AlunoListService } from './aluno-list.service';

describe('AlunoListService', () => {
  let service: AlunoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
