import { convertPrice } from '../../helpers/convert-price.helper';
import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';
import { TTicketType } from '../../types/index.type';
import './left-section.css';

type TLeftSection = {
  ticket: TTicketType;
  filterByCurrency: FILTER_BY_PRICE;
};

export const LeftSection = ({ ticket, filterByCurrency }: TLeftSection) => {
  const price = convertPrice({ filterByCurrency, price: ticket.price });

  return (
    <div className="LeftSectionItemContainer">
      <div className="itemBox">
        <img
          src={ticket.img}
          alt={ticket.arriveAirPortCode}
          height={70}
          className="itemImg"
        />
        <button className="itemBtn">
          <div className="btnText">
            <p>Купить</p>
            <p>от {price}</p>
          </div>
        </button>
      </div>
    </div>
  );
};
