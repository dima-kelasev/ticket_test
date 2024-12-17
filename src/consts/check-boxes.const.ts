import { FILTER_BY_TRANSFER } from '../types/filter-by-transfer.type';

export const CHECKBOXES_OPTIONS = [
  { label: 'Все', value: FILTER_BY_TRANSFER.ALL },
  { label: 'Без пересадки', value: FILTER_BY_TRANSFER.WITHOUT },
  { label: '1 пересадка', value: FILTER_BY_TRANSFER.ONE },
  { label: '2 пересадки', value: FILTER_BY_TRANSFER.TWO },
  { label: '3 пересадки', value: FILTER_BY_TRANSFER.THREE },
];
