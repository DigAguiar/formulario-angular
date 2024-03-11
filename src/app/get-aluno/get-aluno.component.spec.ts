import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlunoComponent } from './get-aluno.component';

describe('GetAlunoComponent', () => {
  let component: GetAlunoComponent;
  let fixture: ComponentFixture<GetAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
