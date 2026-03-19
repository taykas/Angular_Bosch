import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaPageComponentComponent } from './comida-page-component.component';

describe('ComidaPageComponentComponent', () => {
  let component: ComidaPageComponentComponent;
  let fixture: ComponentFixture<ComidaPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidaPageComponentComponent]
    });
    fixture = TestBed.createComponent(ComidaPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
