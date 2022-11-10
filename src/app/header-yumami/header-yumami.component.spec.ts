import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderYumamiComponent } from './header-yumami.component';

describe('HeaderYumamiComponent', () => {
  let component: HeaderYumamiComponent;
  let fixture: ComponentFixture<HeaderYumamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderYumamiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderYumamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
