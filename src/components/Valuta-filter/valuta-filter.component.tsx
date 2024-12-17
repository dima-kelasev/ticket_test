import { Dispatch, SetStateAction } from 'react';
import './valuta-filter.css';
import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';

type TValutaFilter = {
  setFilterByPrice: Dispatch<SetStateAction<FILTER_BY_PRICE>>;
};

export const ValutaFilter = ({ setFilterByPrice }: TValutaFilter) => {
  const handleAddActiveTab = (value: FILTER_BY_PRICE) => {
    setFilterByPrice(value);
  };

  const renderButton = [
    {
      onClick: () => handleAddActiveTab(FILTER_BY_PRICE.RUB),
      title: FILTER_BY_PRICE.RUB,
    },
    {
      onClick: () => handleAddActiveTab(FILTER_BY_PRICE.USD),
      title: FILTER_BY_PRICE.USD,
    },
    {
      onClick: () => handleAddActiveTab(FILTER_BY_PRICE.EUR),
      title: FILTER_BY_PRICE.EUR,
    },
  ];

  return (
    <div className="valutaFilterBox">
      <p>ВАЛЮТА</p>
      <div className="valutaFilterContainer">
        {renderButton.map((item) => (
          <button onClick={item.onClick} key={item.title}>
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};
