import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuedaSvgComponent } from './rueda-svg.component';

describe('RuedaSvgComponent', () => {
  let component: RuedaSvgComponent;
  let fixture: ComponentFixture<RuedaSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuedaSvgComponent]
    });
    fixture = TestBed.createComponent(RuedaSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
