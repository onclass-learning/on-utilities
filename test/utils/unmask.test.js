import { unmask } from '../../src/utils/unmask.js';

describe('unmask', () => {
  it('must return the string value without mask', () => {
    expect(unmask('016.911.570-40')).toEqual('01691157040');
  });

  it('passing null value should return null', () => {
    expect(unmask(null)).toEqual(null);
  });
});
