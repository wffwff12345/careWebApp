import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRecommendCurdComponent } from './recommend-curd.component';

describe('SystemRecommendCurdComponent', () => {
  let component: SystemRecommendCurdComponent;
  let fixture: ComponentFixture<SystemRecommendCurdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SystemRecommendCurdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemRecommendCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
