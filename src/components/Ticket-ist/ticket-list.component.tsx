import { TICKETS } from '../../consts/ticket.const';
import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';
import { TicketItem } from '../Ticket-item/ticket-item.component';
import './ticket-list.css';

type TTicketList = {
  filterByPrice: FILTER_BY_PRICE;
};

export const TicketList = ({ filterByPrice }: TTicketList) => {
  return (
    <div className="listContainer">
      {TICKETS.map((ticket) => (
        <TicketItem
          ticket={ticket}
          filterByPrice={filterByPrice}
          key={ticket.price}
        />
      ))}
    </div>
  );
};
