import { Dispatch, SetStateAction } from 'react';
import { CHECKBOXES_OPTIONS } from '../../consts/check-boxes.const';
import './filter-by-transfer.css';
import { Checkbox, Typography } from 'antd';

const { Text } = Typography;

type TFilterByTransfer = {
  filterByTransfer: string[];
  setFilterByTransfer: Dispatch<SetStateAction<string[]>>;
};

export const FilterByTransfer = ({
  filterByTransfer,
  setFilterByTransfer,
}: TFilterByTransfer) => {
  const onChange = (checkedValues: string[]) => {
    setFilterByTransfer(checkedValues);
  };
  return (
    <div className="filterByTransferBox">
      <Text>КОЛИЧЕТСВО ПЕРЕСАДОК</Text>
      <Checkbox.Group
        options={CHECKBOXES_OPTIONS}
        onChange={onChange}
        value={filterByTransfer}
      />
      <div className="filterByTransferContainer"></div>
    </div>
  );
};
