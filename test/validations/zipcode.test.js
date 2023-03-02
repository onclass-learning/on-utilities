import { validateZipcode } from '../../src/validations/zipcode';

describe('validateZipcode', () => {
  it('should return true for a valid zipcode in the format "12345-678"', () => {
    const validZipcode = '12345-678';
    const message = 'Invalid zipcode';
    expect(validateZipcode(validZipcode, message)).toBe(true);
  });

  it('should return true for a valid zipcode in the format "12345678"', () => {
    const validZipcode = '12345678';
    const message = 'Invalid zipcode';
    expect(validateZipcode(validZipcode, message)).toBe(true);
  });

  it('should return false for an invalid zipcode', () => {
    const invalidZipcode = '1234';
    const message = 'Invalid zipcode';
    expect(validateZipcode(invalidZipcode, message)).toBe(message);
  });

  it('should return false for a zipcode with more than 8 digits', () => {
    const invalidZipcode = '123456789';
    const message = 'Invalid zipcode';
    expect(validateZipcode(invalidZipcode, message)).toBe(message);
  });

  it('should return false for a zipcode with non-numeric characters', () => {
    const invalidZipcode = '12a45-678';
    const message = 'Invalid zipcode';
    expect(validateZipcode(invalidZipcode, message)).toBe(message);
  });

  it('should return false for a null or undefined zipcode', () => {
    const message = 'Invalid zipcode';
    expect(validateZipcode(null, message)).toBe(message);
    expect(validateZipcode(undefined, message)).toBe(message);
  });
});
