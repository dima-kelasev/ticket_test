export const convertSum = (price: number, currency: string) => {
  const sum = price.toFixed();
  const convertToNumberSum = Number(sum);
  return convertToNumberSum.toLocaleString('ru-RU', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
