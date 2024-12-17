import { Dispatch, SetStateAction } from 'react';
import { CurrencyFilter } from '../Currency-filter/currency-filter.component';
import './filters-bar.css';
import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';
import { FilterByTransfer } from '../Filter-by-transfer/filter-by-transfer.component';

type TFiltersBar = {
  filterByCurrency: FILTER_BY_PRICE;
  setFilterByCurrency: Dispatch<SetStateAction<FILTER_BY_PRICE>>;
  filterByTransfer: string[];
  setFilterByTransfer: Dispatch<SetStateAction<string[]>>;
};

export const FiltersBar = ({
  filterByCurrency,
  setFilterByCurrency,
  filterByTransfer,
  setFilterByTransfer,
}: TFiltersBar) => {
  return (
    <div className="filtersContainer">
      <CurrencyFilter
        filterByCurrency={filterByCurrency}
        setFilterByCurrency={setFilterByCurrency}
      />
      <FilterByTransfer
        setFilterByTransfer={setFilterByTransfer}
        filterByTransfer={filterByTransfer}
      />
    </div>
  );
};
