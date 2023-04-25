import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUserCurdEditComponent } from './edit.component';

describe('SystemUserCurdEditComponent', () => {
  let component: SystemUserCurdEditComponent;
  let fixture: ComponentFixture<SystemUserCurdEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SystemUserCurdEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemUserCurdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
