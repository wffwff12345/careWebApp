import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRecommendCurdViewComponent } from './view.component';

describe('SystemRecommendCurdViewComponent', () => {
  let component: SystemRecommendCurdViewComponent;
  let fixture: ComponentFixture<SystemRecommendCurdViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SystemRecommendCurdViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemRecommendCurdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
