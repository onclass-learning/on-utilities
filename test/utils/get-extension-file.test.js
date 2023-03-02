import { getExtensionFile } from '../../src/utils/get-extension-file';

describe('getExtensionFile', () => {
  it('should return "PDF" for "application/pdf" type', () => {
    expect(getExtensionFile('application/pdf')).toEqual('PDF');
  });

  it('should return "JPG" for "image/jpeg" type', () => {
    expect(getExtensionFile('image/jpeg')).toEqual('JPG');
  });

  it('should return "PNG" for "image/png" type', () => {
    expect(getExtensionFile('image/png')).toEqual('PNG');
  });

  it('should return "GIF" for "image/gif" type', () => {
    expect(getExtensionFile('image/gif')).toEqual('GIF');
  });

  it('should return "CSV" for "text/csv" type', () => {
    expect(getExtensionFile('text/csv')).toEqual('CSV');
  });

  it('should return "MP4" for "video/mp4" type', () => {
    expect(getExtensionFile('video/mp4')).toEqual('MP4');
  });

  it('should return "FILE" for unknown type', () => {
    expect(getExtensionFile('foo/bar')).toEqual('FILE');
  });

  it('should return "FILE" for undefined type', () => {
    expect(getExtensionFile()).toEqual('FILE');
  });
});
