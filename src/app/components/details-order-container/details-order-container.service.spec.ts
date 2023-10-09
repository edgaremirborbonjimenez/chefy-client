import { TestBed } from '@angular/core/testing';

import { DetailsOrderContainerService } from './details-order-container.service';

describe('DetailsOrderContainerService', () => {
  let service: DetailsOrderContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsOrderContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
