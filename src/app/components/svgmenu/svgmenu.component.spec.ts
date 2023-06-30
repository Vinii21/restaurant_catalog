import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgmenuComponent } from './svgmenu.component';

describe('SvgmenuComponent', () => {
  let component: SvgmenuComponent;
  let fixture: ComponentFixture<SvgmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgmenuComponent]
    });
    fixture = TestBed.createComponent(SvgmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
