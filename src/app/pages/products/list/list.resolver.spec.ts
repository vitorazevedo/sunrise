import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ListResolver } from './list.resolver';

describe('ListResolver', () => {
  let resolver: ListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    resolver = TestBed.inject(ListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
