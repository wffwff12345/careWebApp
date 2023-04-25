import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraCurdComponent } from './curd.component';

describe('CameraCurdComponent', () => {
  let component: CameraCurdComponent;
  let fixture: ComponentFixture<CameraCurdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CameraCurdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
