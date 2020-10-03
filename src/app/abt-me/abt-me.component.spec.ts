import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtMeComponent } from './abt-me.component';

describe('AbtMeComponent', () => {
  let component: AbtMeComponent;
  let fixture: ComponentFixture<AbtMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbtMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
