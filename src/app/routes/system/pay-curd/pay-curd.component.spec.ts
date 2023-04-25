import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPayCurdComponent } from './pay-curd.component';

describe('SystemPayCurdComponent', () => {
  let component: SystemPayCurdComponent;
  let fixture: ComponentFixture<SystemPayCurdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SystemPayCurdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemPayCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
