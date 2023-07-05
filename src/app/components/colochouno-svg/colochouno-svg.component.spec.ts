import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColochounoSvgComponent } from './colochouno-svg.component';

describe('ColochounoSvgComponent', () => {
  let component: ColochounoSvgComponent;
  let fixture: ComponentFixture<ColochounoSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColochounoSvgComponent]
    });
    fixture = TestBed.createComponent(ColochounoSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
