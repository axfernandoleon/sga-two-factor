import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesNotaComponent } from './detalles-nota.component';

describe('DetallesNotaComponent', () => {
  let component: DetallesNotaComponent;
  let fixture: ComponentFixture<DetallesNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
