import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationTemplate } from './authentication.template';

describe('AuthenticationTemplate', () => {
  let component: AuthenticationTemplate;
  let fixture: ComponentFixture<AuthenticationTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
