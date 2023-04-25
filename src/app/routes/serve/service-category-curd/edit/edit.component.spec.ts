import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeServiceCategoryCurdEditComponent } from './edit.component';

describe('ServeServiceCategoryCurdEditComponent', () => {
  let component: ServeServiceCategoryCurdEditComponent;
  let fixture: ComponentFixture<ServeServiceCategoryCurdEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ServeServiceCategoryCurdEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeServiceCategoryCurdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
