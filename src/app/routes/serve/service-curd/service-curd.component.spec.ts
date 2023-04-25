import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeServiceCurdComponent } from './service-curd.component';

describe('ServeServiceCurdComponent', () => {
  let component: ServeServiceCurdComponent;
  let fixture: ComponentFixture<ServeServiceCurdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ServeServiceCurdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeServiceCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
