import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTemplate } from './default.template';

describe('DefaultTemplate', () => {
  let component: DefaultTemplate;
  let fixture: ComponentFixture<DefaultTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
