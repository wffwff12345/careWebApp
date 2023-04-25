import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPayCurdEditComponent } from './edit.component';

describe('SystemPayCurdEditComponent', () => {
  let component: SystemPayCurdEditComponent;
  let fixture: ComponentFixture<SystemPayCurdEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SystemPayCurdEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemPayCurdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
