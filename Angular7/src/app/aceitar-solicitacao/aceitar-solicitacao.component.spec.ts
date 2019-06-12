import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitarSolicitacaoComponent } from './aceitar-solicitacao.component';

describe('AceitarSolicitacaoComponent', () => {
  let component: AceitarSolicitacaoComponent;
  let fixture: ComponentFixture<AceitarSolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceitarSolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceitarSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
