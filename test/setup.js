import '@testing-library/jest-dom/vitest';
import { format } from 'node:util';
import { configure } from '@testing-library/react';
import M from 'materialize-css';

// Render every test in StrictMode, so components must survive React's
// mount → effect cleanup → mount cycle.
configure({ reactStrictMode: true });

vi.mock('../src/idgen', async importOriginal => ({
  ...(await importOriginal()),
  default: vi.fn(() => 'mockId')
}));

globalThis.M = M;

// Fail any test that logs an error or warning (React's warnings go through
// console.error). A plain wrapper rather than vi.spyOn, so the many
// `vi.restoreAllMocks()` calls in spec files can't remove it. A test that
// expects a warning can still replace console.error with its own spy.
const unexpectedConsole = [];
for (const method of ['error', 'warn']) {
  const original = console[method];
  console[method] = (...args) => {
    unexpectedConsole.push(`console.${method}: ${format(...args)}`);
    original(...args);
  };
}

afterEach(() => {
  if (unexpectedConsole.length > 0) {
    const messages = unexpectedConsole.splice(0);
    throw new Error(
      `Unexpected console output during the test:\n\n${messages.join('\n\n')}`
    );
  }
});
