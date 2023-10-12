import { TestBed } from '@angular/core/testing';

import { HeaderDetailOrderService } from './header-detail-order.service';

describe('HeaderDetailOrderService', () => {
  let service: HeaderDetailOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderDetailOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
