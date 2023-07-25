import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaSvgComponent } from './insta-svg.component';

describe('InstaSvgComponent', () => {
  let component: InstaSvgComponent;
  let fixture: ComponentFixture<InstaSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstaSvgComponent]
    });
    fixture = TestBed.createComponent(InstaSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
