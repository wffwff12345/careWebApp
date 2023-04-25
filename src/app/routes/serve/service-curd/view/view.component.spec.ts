import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeServiceCurdViewComponent } from './view.component';

describe('ServeServiceCurdViewComponent', () => {
  let component: ServeServiceCurdViewComponent;
  let fixture: ComponentFixture<ServeServiceCurdViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ServeServiceCurdViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeServiceCurdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
