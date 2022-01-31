import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTOSComponent } from './rtos.component';

describe('RTOSComponent', () => {
  let component: RTOSComponent;
  let fixture: ComponentFixture<RTOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
