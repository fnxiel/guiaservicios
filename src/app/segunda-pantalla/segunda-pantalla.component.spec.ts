import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaPantallaComponent } from './segunda-pantalla.component';

describe('SegundaPantallaComponent', () => {
  let component: SegundaPantallaComponent;
  let fixture: ComponentFixture<SegundaPantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaPantallaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
