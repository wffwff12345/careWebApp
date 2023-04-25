import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUserCurdComponent } from './user-curd.component';

describe('SystemUserCurdComponent', () => {
  let component: SystemUserCurdComponent;
  let fixture: ComponentFixture<SystemUserCurdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SystemUserCurdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemUserCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
