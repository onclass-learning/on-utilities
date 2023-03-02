import { wait } from '../../src/utils/wait';

describe('wait', () => {
  it('wait should resolve after the specified timeout', async () => {
    const timeout = 1000;
    const start = Date.now();
    await wait(timeout);
    const end = Date.now();
    const elapsedTime = end - start;
    expect(elapsedTime).toBeGreaterThanOrEqual(timeout);
  });

  it('wait should resolve immediately for a zero timeout', async () => {
    const timeout = 0;
    const start = Date.now();
    await wait(timeout);
    const end = Date.now();
    const elapsedTime = end - start;
    expect(elapsedTime).toBeLessThan(10);
  });

  it('wait should resolve successfully with no timeout specified', async () => {
    await wait();
    expect(true).toBe(true);
  });
});
