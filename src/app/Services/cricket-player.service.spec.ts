import { TestBed } from '@angular/core/testing';

import { CricketPlayerService } from './cricket-player.service';

describe('CricketPlayerService', () => {
  let service: CricketPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CricketPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
