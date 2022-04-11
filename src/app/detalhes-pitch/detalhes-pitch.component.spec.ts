import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPitchComponent } from './detalhes-pitch.component';

describe('DetalhesPitchComponent', () => {
  let component: DetalhesPitchComponent;
  let fixture: ComponentFixture<DetalhesPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesPitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
