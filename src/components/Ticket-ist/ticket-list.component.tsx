import { TICKETS } from '../../consts/ticket.const';
import { getFilterTickets } from '../../helpers/get-filter-tickets.helper';
import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';
import { TicketItem } from '../Ticket-item/ticket-item.component';
import './ticket-list.css';

type TTicketList = {
  filterByCurrency: FILTER_BY_PRICE;
  filterByTransfer: string[];
};

export const TicketList = ({
  filterByCurrency,
  filterByTransfer,
}: TTicketList) => {
  const filteredTickets = getFilterTickets({
    tickets: TICKETS,
    filterByTransfer,
  });

  return (
    <div className="listContainer">
      {filteredTickets.map((ticket) => (
        <TicketItem
          ticket={ticket}
          filterByCurrency={filterByCurrency}
          key={ticket.price}
        />
      ))}
    </div>
  );
};
