import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterYumamiComponent } from './footer-yumami.component';

describe('FooterYumamiComponent', () => {
  let component: FooterYumamiComponent;
  let fixture: ComponentFixture<FooterYumamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterYumamiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterYumamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
