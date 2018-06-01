import { TestBed, inject } from '@angular/core/testing';

import { AtomesService } from './atomes.service';

describe('AtomesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtomesService]
    });
  });

  it('should be created', inject([AtomesService], (service: AtomesService) => {
    expect(service).toBeTruthy();
  }));
});
