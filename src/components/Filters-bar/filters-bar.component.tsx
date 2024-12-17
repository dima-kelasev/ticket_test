import { Dispatch, SetStateAction } from 'react';
import { ValutaFilter } from '../Valuta-filter/valuta-filter.component';
import './filters-bar.css';
import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';
import { FilterByTransfer } from '../Filter-by-transfer/filter-by-transfer.component';
import { FILTER_BY_TRANSFER } from '../../types/filter-by-transfer.type';

type TFiltersBar = {
  setFilterByPrice: Dispatch<SetStateAction<FILTER_BY_PRICE>>;
  setFilterByTransfer: Dispatch<SetStateAction<FILTER_BY_TRANSFER | string[]>>;
};

export const FiltersBar = ({
  setFilterByPrice,
  setFilterByTransfer,
}: TFiltersBar) => {
  return (
    <div className="filtersContainer">
      <ValutaFilter setFilterByPrice={setFilterByPrice} />
      <FilterByTransfer setFilterByTransfer={setFilterByTransfer} />
    </div>
  );
};
