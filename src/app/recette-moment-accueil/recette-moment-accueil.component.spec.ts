import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteMomentAccueilComponent } from './recette-moment-accueil.component';

describe('RecetteMomentAccueilComponent', () => {
  let component: RecetteMomentAccueilComponent;
  let fixture: ComponentFixture<RecetteMomentAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteMomentAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetteMomentAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
