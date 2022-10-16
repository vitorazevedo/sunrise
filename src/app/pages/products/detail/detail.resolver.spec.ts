import { TestBed } from '@angular/core/testing';

import { DetailResolver } from './detail.resolver';

describe('DetailResolver', () => {
  let resolver: DetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
