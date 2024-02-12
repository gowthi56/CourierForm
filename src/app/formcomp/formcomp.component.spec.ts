import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcompComponent } from './formcomp.component';

describe('FormcompComponent', () => {
  let component: FormcompComponent;
  let fixture: ComponentFixture<FormcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcompComponent]
    });
    fixture = TestBed.createComponent(FormcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
