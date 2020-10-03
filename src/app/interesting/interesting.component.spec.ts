import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingComponent } from './interesting.component';

describe('InterestingComponent', () => {
  let component: InterestingComponent;
  let fixture: ComponentFixture<InterestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
