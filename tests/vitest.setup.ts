import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

import { worker } from '@/mocks/node';

afterEach(() => {
  cleanup();
});

// Start worker before all tests
beforeAll(() => {
  worker.listen();
});

//  Close worker after all tests
afterAll(() => {
  worker.close();
});

// Reset handlers after each test `important for test isolation`
afterEach(() => {
  worker.resetHandlers();
});
