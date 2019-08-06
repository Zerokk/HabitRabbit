import { TestBed } from '@angular/core/testing';

import { PlanManipulatorService } from './plan-manipulator.service';

describe('PlanManipulatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanManipulatorService = TestBed.get(PlanManipulatorService);
    expect(service).toBeTruthy();
  });
});
