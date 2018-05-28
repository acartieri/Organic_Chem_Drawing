import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasnumberComponent } from './casnumber.component';

describe('CasnumberComponent', () => {
  let component: CasnumberComponent;
  let fixture: ComponentFixture<CasnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
