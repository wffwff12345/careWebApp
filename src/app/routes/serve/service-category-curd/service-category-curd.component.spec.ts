import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeServiceCategoryCurdComponent } from './service-category-curd.component';

describe('ServeServiceCategoryCurdComponent', () => {
  let component: ServeServiceCategoryCurdComponent;
  let fixture: ComponentFixture<ServeServiceCategoryCurdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ServeServiceCategoryCurdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeServiceCategoryCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
