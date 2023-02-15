import { createNameIcon } from '../create-name-icon';

describe('createNameIcon', () => {
  it('createNameIcon should return the correct initials for a full name', () => {
    const name = 'John Doe';
    const expectedInitials = 'JD';
    const initials = createNameIcon(name);
    expect(initials).toEqual(expectedInitials);
  });

  it('createNameIcon should return the correct initials for a single-word name', () => {
    const name = 'Cher';
    const expectedInitials = 'CH';
    const initials = createNameIcon(name);
    expect(initials).toEqual(expectedInitials);
  });

  it('createNameIcon should return null for a null name', () => {
    const name = null;
    const initials = createNameIcon(name);
    expect(initials).toBeNull();
  });

  it('createNameIcon should return null for an empty name', () => {
    const name = '';
    const initials = createNameIcon(name);
    expect(initials).toBeNull();
  });
});
