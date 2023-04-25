import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCurdEditComponent } from './edit.component';

describe('CommunityCurdEditComponent', () => {
  let component: CommunityCurdEditComponent;
  let fixture: ComponentFixture<CommunityCurdEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityCurdEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCurdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
