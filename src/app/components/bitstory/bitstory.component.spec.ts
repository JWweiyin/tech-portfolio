import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitstoryComponent } from './bitstory.component';

describe('BitstoryComponent', () => {
  let component: BitstoryComponent;
  let fixture: ComponentFixture<BitstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitstoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
