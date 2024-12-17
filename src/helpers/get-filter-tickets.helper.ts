import { TTicketType } from '../types/index.type';

type TGetFilterTickets = {
  tickets: TTicketType[];
  filterByTransfer: string[];
};

export const getFilterTickets = ({
  tickets,
  filterByTransfer,
}: TGetFilterTickets) => {
  return tickets.filter((ticket) => {
    const transferCount = ticket.transfer.length;

    if (filterByTransfer.includes('all')) return true;

    return filterByTransfer.includes(transferCount.toString());
  });
};
