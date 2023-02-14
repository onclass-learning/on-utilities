export const formatMoney = (value) =>
  value
    ? `R$ ${value.toLocaleString('pt-BR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        currency: 'BRL',
      })}`
    : 'R$ 0,00';
