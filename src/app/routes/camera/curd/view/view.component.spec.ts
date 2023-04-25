import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraCurdViewComponent } from './view.component';

describe('CameraCurdViewComponent', () => {
  let component: CameraCurdViewComponent;
  let fixture: ComponentFixture<CameraCurdViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CameraCurdViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraCurdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
