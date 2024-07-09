import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

import { server } from '@/mocks/node';

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url);
});
beforeAll(() => server.listen());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());
