import { Dispatch, SetStateAction } from 'react';
import './currency-filter.css';
import { FILTER_BY_PRICE } from '../../types/filte-by-price.type';
import { Radio, RadioChangeEvent } from 'antd';
import { CURRENCY_OPTIONS } from '../../consts/currency-options.const';
import { Typography } from 'antd';

const { Text } = Typography;

type TValutaFilter = {
  filterByCurrency: FILTER_BY_PRICE;
  setFilterByCurrency: Dispatch<SetStateAction<FILTER_BY_PRICE>>;
};

export const CurrencyFilter = ({
  setFilterByCurrency,
  filterByCurrency,
}: TValutaFilter) => {
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setFilterByCurrency(value);
  };

  return (
    <div className="currencyFilterBox">
      <Text>ВАЛЮТА</Text>
      <Radio.Group
        options={CURRENCY_OPTIONS}
        onChange={onChange}
        value={filterByCurrency}
        optionType="button"
      />
    </div>
  );
};
