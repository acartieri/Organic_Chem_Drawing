import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomeCellComponent } from './atome-cell.component';

describe('AtomeCellComponent', () => {
  let component: AtomeCellComponent;
  let fixture: ComponentFixture<AtomeCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomeCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomeCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
