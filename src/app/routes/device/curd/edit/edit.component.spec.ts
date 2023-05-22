import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCurdEditComponent } from './edit.component';

describe('DeviceCurdEditComponent', () => {
  let component: DeviceCurdEditComponent;
  let fixture: ComponentFixture<DeviceCurdEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceCurdEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCurdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
