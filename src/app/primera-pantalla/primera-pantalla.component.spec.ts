import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraPantallaComponent } from './primera-pantalla.component';

describe('PrimeraPantallaComponent', () => {
  let component: PrimeraPantallaComponent;
  let fixture: ComponentFixture<PrimeraPantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraPantallaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeraPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
