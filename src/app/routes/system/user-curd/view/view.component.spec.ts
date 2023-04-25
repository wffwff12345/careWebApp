import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUserCurdViewComponent } from './view.component';

describe('SystemUserCurdViewComponent', () => {
  let component: SystemUserCurdViewComponent;
  let fixture: ComponentFixture<SystemUserCurdViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SystemUserCurdViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemUserCurdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
