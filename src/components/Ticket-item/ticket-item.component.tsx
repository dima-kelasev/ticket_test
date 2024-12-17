import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';
import { TTicketType } from '../../types/index.type';
import { LeftSection } from '../Left-section/left-section.component';
import { RightSection } from '../Right-section/Right-section.component';
import './ticket-item.css';

type TTicketItem = {
  ticket: TTicketType;
  filterByPrice: FILTER_BY_PRICE;
};

export const TicketItem = ({ ticket, filterByPrice }: TTicketItem) => {
  return (
    <div className="ticketBlock">
      <LeftSection ticket={ticket} filterByPrice={filterByPrice} />
      <RightSection ticket={ticket} />
    </div>
  );
};
