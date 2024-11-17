import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroRomanoComponent } from './numero-romano.component';

describe('NumeroRomanoComponent', () => {
  let component: NumeroRomanoComponent;
  let fixture: ComponentFixture<NumeroRomanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumeroRomanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeroRomanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
