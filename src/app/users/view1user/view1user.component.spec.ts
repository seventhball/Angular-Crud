import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1userComponent } from './view1user.component';

describe('View1userComponent', () => {
  let component: View1userComponent;
  let fixture: ComponentFixture<View1userComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1userComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
