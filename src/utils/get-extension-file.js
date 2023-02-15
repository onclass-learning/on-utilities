export const getExtensionFile = (type) => {
  let icons = {
    'application/pdf': 'PDF',
    'image/jpeg': 'JPG',
    'image/png': 'PNG',
    'image/gif': 'GIF',
    'text/csv': 'CSV',
    'video/mp4': 'MP4',
    default: 'FILE',
  };

  return icons[type] || icons['default'];
};
