/**
 * Formata bytes em um formato legível para humanos com unidades apropriadas (Bytes, KB, MB, GB).
 * @param bytes - O número de bytes para formatar.
 * @returns A string formatada.
 * @example
 *
 * ```typescript
 * const formatedValue = formatBytes('1024');
 * console.log(formatedValue); // '1.00 KB'
 * ```
 */
export const formatBytes = (bytes: number): string => {
  if (!bytes || bytes === 0) return '0 bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
};
