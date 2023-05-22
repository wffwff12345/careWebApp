import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCurdViewComponent } from './view.component';

describe('DeviceCurdViewComponent', () => {
  let component: DeviceCurdViewComponent;
  let fixture: ComponentFixture<DeviceCurdViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceCurdViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCurdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
