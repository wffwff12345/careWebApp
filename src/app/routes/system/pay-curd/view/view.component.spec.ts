import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPayCurdViewComponent } from './view.component';

describe('SystemPayCurdViewComponent', () => {
  let component: SystemPayCurdViewComponent;
  let fixture: ComponentFixture<SystemPayCurdViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SystemPayCurdViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemPayCurdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
