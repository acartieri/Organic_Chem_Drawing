import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomesComponent } from './atomes.component';

describe('AtomesComponent', () => {
  let component: AtomesComponent;
  let fixture: ComponentFixture<AtomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
