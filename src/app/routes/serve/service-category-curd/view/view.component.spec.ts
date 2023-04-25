import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeServiceCategoryCurdViewComponent } from './view.component';

describe('ServeServiceCategoryCurdViewComponent', () => {
  let component: ServeServiceCategoryCurdViewComponent;
  let fixture: ComponentFixture<ServeServiceCategoryCurdViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ServeServiceCategoryCurdViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeServiceCategoryCurdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
