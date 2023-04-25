import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeServiceCurdEditComponent } from './edit.component';

describe('ServeServiceCurdEditComponent', () => {
  let component: ServeServiceCurdEditComponent;
  let fixture: ComponentFixture<ServeServiceCurdEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ServeServiceCurdEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeServiceCurdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
