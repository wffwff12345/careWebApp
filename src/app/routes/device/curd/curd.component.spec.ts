import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCurdComponent } from './curd.component';

describe('DeviceCurdComponent', () => {
  let component: DeviceCurdComponent;
  let fixture: ComponentFixture<DeviceCurdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceCurdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
