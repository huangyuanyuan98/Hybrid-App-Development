import { TestBed } from '@angular/core/testing';

import { TodolistserviceService } from './todolistservice.service';

describe('TodolistserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodolistserviceService = TestBed.get(TodolistserviceService);
    expect(service).toBeTruthy();
  });
});
