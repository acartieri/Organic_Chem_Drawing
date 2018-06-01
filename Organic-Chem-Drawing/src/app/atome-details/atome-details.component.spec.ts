import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomeDetailsComponent } from './atome-details.component';

describe('AtomeDetailsComponent', () => {
  let component: AtomeDetailsComponent;
  let fixture: ComponentFixture<AtomeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
