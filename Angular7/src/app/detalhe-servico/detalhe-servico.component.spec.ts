import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheServicoComponent } from './detalhe-servico.component';

describe('DetalheServicoComponent', () => {
  let component: DetalheServicoComponent;
  let fixture: ComponentFixture<DetalheServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
