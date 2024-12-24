import { TestBed } from '@angular/core/testing';

import { YyAngUtilsService } from './yy-ang-utils.service';

describe('YyAngUtilsService', () => {
  let service: YyAngUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YyAngUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
