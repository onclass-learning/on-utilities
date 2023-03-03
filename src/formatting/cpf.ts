/**
 * Formata um CPF no formato 999.999.999-99.
 *
 * @param cpf O CPF a ser formatado.
 * @returns O CPF formatado.
 * @throws Um erro se o CPF for inválido.
 * @example
 *
 * ```typescript
 * const cpf = formatCpf('12345678901');
 * console.log(cpf); // '123.456.789-01'
 * ```
 */

export function formatCpf(cpf: string | null | undefined): string {
  /**
   * Expressão regular para validar um CPF.
   *
   * @internal
   */
  const CPF_REGEX = /^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/;

  if (cpf == null || cpf === undefined) {
    return '';
  }

  if (!CPF_REGEX.test(cpf)) {
    throw new Error(`CPF inválido: ${cpf}`);
  }

  return cpf.replace(CPF_REGEX, '$1.$2.$3-$4');
}
