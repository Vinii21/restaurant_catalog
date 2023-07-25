import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappSvgComponent } from './whatsapp-svg.component';

describe('WhatsappSvgComponent', () => {
  let component: WhatsappSvgComponent;
  let fixture: ComponentFixture<WhatsappSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappSvgComponent]
    });
    fixture = TestBed.createComponent(WhatsappSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
