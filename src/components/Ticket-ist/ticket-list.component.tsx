import { TICKETS } from '../../consts/ticket.const';
import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';
import { TicketItem } from '../Ticket-item/ticket-item.component';
import './ticket-list.css';

type TTicketList = {
  filterByCurrency: FILTER_BY_PRICE;
};

export const TicketList = ({ filterByCurrency }: TTicketList) => {
  return (
    <div className="listContainer">
      {TICKETS.map((ticket) => (
        <TicketItem
          ticket={ticket}
          filterByCurrency={filterByCurrency}
          key={ticket.price}
        />
      ))}
    </div>
  );
};
