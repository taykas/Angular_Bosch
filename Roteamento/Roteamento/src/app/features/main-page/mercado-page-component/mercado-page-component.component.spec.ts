import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoPageComponentComponent } from './mercado-page-component.component';

describe('MercadoPageComponentComponent', () => {
  let component: MercadoPageComponentComponent;
  let fixture: ComponentFixture<MercadoPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercadoPageComponentComponent]
    });
    fixture = TestBed.createComponent(MercadoPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
