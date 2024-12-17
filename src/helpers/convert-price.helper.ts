import { FILTER_BY_PRICE } from '../types/filte-by-price.type';

type TConvertPrice = {
  filterByCurrency: FILTER_BY_PRICE;
  price: number;
};

export const convertPrice = ({ filterByCurrency, price }: TConvertPrice) => {
  switch (filterByCurrency) {
    case FILTER_BY_PRICE.USD:
      const dollarSum = price / 100;
      return `${dollarSum.toFixed()} $`;
    case FILTER_BY_PRICE.EUR:
      const eurSum = price / 105;
      return `${eurSum.toFixed()} €`;
    default:
      return `${price.toFixed()} ₽`;
  }
};
