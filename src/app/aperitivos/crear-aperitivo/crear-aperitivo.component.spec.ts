import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAperitivoComponent } from './crear-aperitivo.component';

describe('CrearAperitivoComponent', () => {
  let component: CrearAperitivoComponent;
  let fixture: ComponentFixture<CrearAperitivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAperitivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAperitivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
