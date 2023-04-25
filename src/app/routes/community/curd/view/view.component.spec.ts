import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCurdViewComponent } from './view.component';

describe('CommunityCurdViewComponent', () => {
  let component: CommunityCurdViewComponent;
  let fixture: ComponentFixture<CommunityCurdViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityCurdViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCurdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
