import { TTicketType } from '../../types/index.type';
import { TimeBlock } from '../Time-block/time-block.component';
import { TransferBlock } from '../Transfer-block/transfer-block.component';
import './right-section.css';

type TRightSection = {
  ticket: TTicketType;
};

export const RightSection = ({ ticket }: TRightSection) => {
  return (
    <div className="RightSectionItemContainer">
      <TimeBlock
        time={ticket.departure}
        code={ticket.departureAirPortCode}
        cityName={ticket.departureCity}
        date={ticket.departureDate}
      />
      <TransferBlock transferInfo={ticket.transfer} />
      <TimeBlock
        time={ticket.arrive}
        code={ticket.arriveAirPortCode}
        cityName={ticket.arriveCity}
        date={ticket.arriveDate}
      />
    </div>
  );
};
