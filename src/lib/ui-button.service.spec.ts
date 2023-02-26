import { TestBed } from '@angular/core/testing';

import { UiButtonService } from './ui-button.service';

describe('UiButtonService', () => {
  let service: UiButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
