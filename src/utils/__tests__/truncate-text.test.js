import { doTruncateText } from '../truncate-text';

describe('doTruncateText', () => {
  it('doTruncateText should return the full text when it is shorter than the limit', () => {
    const text = 'This is a short text...';
    const limit = 20;
    const truncatedText = doTruncateText(text, limit);
    expect(truncatedText).toEqual(text);
  });

  it('doTruncateText should return a truncated text when it is longer than the limit', () => {
    const text = 'This is a longer text that needs to be truncated.';
    const limit = 20;
    const expectedText = 'This is a longer tex...';
    const truncatedText = doTruncateText(text, limit);
    expect(truncatedText).toEqual(expectedText);
  });

  it('doTruncateText should return an empty string for an empty text', () => {
    const text = '';
    const limit = 10;
    const truncatedText = doTruncateText(text, limit);
    expect(truncatedText).toEqual('');
  });

  it('doTruncateText should return null for a null text', () => {
    const text = null;
    const limit = 10;
    const truncatedText = doTruncateText(text, limit);
    expect(truncatedText).toBeNull();
  });
});
