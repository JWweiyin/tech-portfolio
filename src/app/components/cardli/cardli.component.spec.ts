import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardliComponent } from './cardli.component';

describe('CardliComponent', () => {
  let component: CardliComponent;
  let fixture: ComponentFixture<CardliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
