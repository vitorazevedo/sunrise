import { TestBed } from '@angular/core/testing';

import { ListResolver } from './list/list.resolver';

describe('ListResolver', () => {
  let resolver: ListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
