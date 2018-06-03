import { TestBed, inject } from '@angular/core/testing';

import { RegisterResolverService } from './register-resolver.service';

describe('RegisterResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterResolverService]
    });
  });

  it('should be created', inject([RegisterResolverService], (service: RegisterResolverService) => {
    expect(service).toBeTruthy();
  }));
});
