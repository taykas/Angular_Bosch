import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoModalComponent } from './novo-modal.component';

describe('NovoModalComponent', () => {
  let component: NovoModalComponent;
  let fixture: ComponentFixture<NovoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoModalComponent]
    });
    fixture = TestBed.createComponent(NovoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
