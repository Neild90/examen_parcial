import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentoMotoComponent } from './descuento-moto.component';

describe('DescuentoMotoComponent', () => {
  let component: DescuentoMotoComponent;
  let fixture: ComponentFixture<DescuentoMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescuentoMotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescuentoMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
