import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraCurdEditComponent } from './edit.component';

describe('CameraCurdEditComponent', () => {
  let component: CameraCurdEditComponent;
  let fixture: ComponentFixture<CameraCurdEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CameraCurdEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraCurdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
