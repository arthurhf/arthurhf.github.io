import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhateverComponent } from './whatever.component';

describe('WhateverComponent', () => {
  let component: WhateverComponent;
  let fixture: ComponentFixture<WhateverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhateverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhateverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
