import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleVarsComponent } from './style-vars.component';

describe('StyleVarsComponent', () => {
  let component: StyleVarsComponent;
  let fixture: ComponentFixture<StyleVarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleVarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleVarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
