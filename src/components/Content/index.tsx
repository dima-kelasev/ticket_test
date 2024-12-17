import { useState } from 'react';
import { FiltersBar } from '../Filters-bar/filters-bar.component';
import { TicketList } from '../Ticket-ist/ticket-list.component';
import './index.css';
import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';
import { FILTER_BY_TRANSFER } from '../../types/filter-by-transfer.type';

export const Content = () => {
  const [filterByPrice, setFilterByPrice] = useState(FILTER_BY_PRICE.RUB);
  const [filterByTransfer, setFilterByTransfer] = useState<
    FILTER_BY_TRANSFER | string[]
  >(['']);

  return (
    <div className="container">
      <FiltersBar
        setFilterByPrice={setFilterByPrice}
        setFilterByTransfer={setFilterByTransfer}
      />
      <TicketList filterByPrice={filterByPrice} />
    </div>
  );
};
