import '@testing-library/jest-dom/vitest';
import M from 'materialize-css';

vi.mock('../src/idgen', async importOriginal => ({
  ...(await importOriginal()),
  default: vi.fn(() => 'mockId')
}));

globalThis.M = M;
