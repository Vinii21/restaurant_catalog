import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColochoCredistSvgComponent } from './colocho-credist-svg.component';

describe('ColochoCredistSvgComponent', () => {
  let component: ColochoCredistSvgComponent;
  let fixture: ComponentFixture<ColochoCredistSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColochoCredistSvgComponent]
    });
    fixture = TestBed.createComponent(ColochoCredistSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
