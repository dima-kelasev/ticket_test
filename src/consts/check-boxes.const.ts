import { FILTER_BY_TRANSFER } from '../types/filter-by-transfer.type';

export const CHECKBOXES = [
  {
    id: '0',
    title: ' - Все',
    value: FILTER_BY_TRANSFER.ALL,
  },
  {
    id: '1',
    title: ' - Без пересадки',
    value: FILTER_BY_TRANSFER.WITHOUT,
  },
  {
    id: '2',
    title: ' - 1 пересадка',
    value: FILTER_BY_TRANSFER.ONE,
  },
  {
    id: '3',
    title: ' - 2 пересадка',
    value: FILTER_BY_TRANSFER.TWO,
  },
  {
    id: '4',
    title: ' - 3 пересадка',
    value: FILTER_BY_TRANSFER.THREE,
  },
];
