import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCurdComponent } from './curd.component';

describe('CommunityCurdComponent', () => {
  let component: CommunityCurdComponent;
  let fixture: ComponentFixture<CommunityCurdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityCurdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
