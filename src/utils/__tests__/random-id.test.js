import { randomId } from '../random-id';

describe('randomId', () => {
  it('randomId should return a string', () => {
    const id = randomId();
    expect(typeof id).toBe('string');
  });

  it('randomId should generate different IDs', () => {
    const id1 = randomId();
    const id2 = randomId();

    console.log(id2);
    expect(id1).not.toEqual(id2);
  });

  it('randomId should generate unique IDs', () => {
    const ids = new Set();
    for (let i = 0; i < 100; i++) {
      const id = randomId();
      expect(ids.has(id)).toBeFalsy();
      ids.add(id);
    }
  });
});
