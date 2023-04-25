import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRecommendCurdEditComponent } from './edit.component';

describe('SystemRecommendCurdEditComponent', () => {
  let component: SystemRecommendCurdEditComponent;
  let fixture: ComponentFixture<SystemRecommendCurdEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SystemRecommendCurdEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemRecommendCurdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
