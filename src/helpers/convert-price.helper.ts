import { FILTER_BY_PRICE } from '../types/filte-by-price.type';
import { convertSum } from './convert-sum.helper';

type TConvertPrice = {
  filterByCurrency: FILTER_BY_PRICE;
  price: number;
};

export const convertPrice = ({ filterByCurrency, price }: TConvertPrice) => {
  switch (filterByCurrency) {
    case FILTER_BY_PRICE.USD:
      const dollarSum = price / 100;
      return convertSum(dollarSum, 'USD');
    case FILTER_BY_PRICE.EUR:
      const eurSum = price / 105;
      return convertSum(eurSum, 'EUR');
    default:
      return convertSum(price, 'RUB');
  }
};
