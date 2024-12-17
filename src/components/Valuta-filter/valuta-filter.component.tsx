import React, { Dispatch, SetStateAction } from 'react';
import './valuta-filter.css';
import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';
import { Radio, RadioChangeEvent } from 'antd';
import { CURRENCY_OPTIONS } from '../../consts/currency-options.const';

type TValutaFilter = {
  filterByCurrency: FILTER_BY_PRICE;
  setFilterByCurrency: Dispatch<SetStateAction<FILTER_BY_PRICE>>;
};

export const ValutaFilter = ({
  setFilterByCurrency,
  filterByCurrency,
}: TValutaFilter) => {
  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio3 checked', value);
    setFilterByCurrency(value);
  };

  return (
    <div className="valutaFilterBox">
      <p>ВАЛЮТА</p>
      <Radio.Group
        options={CURRENCY_OPTIONS}
        onChange={onChange3}
        value={filterByCurrency}
        optionType="button"
      />
      <div className="valutaFilterContainer">
        {/* {renderButton.map((item) => (
          <button onClick={item.onClick} key={item.title}>
            {item.title}
          </button>
        ))} */}
      </div>
    </div>
  );
};
