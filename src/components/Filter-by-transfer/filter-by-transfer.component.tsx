import { Dispatch, SetStateAction } from 'react';
import { CHECKBOXES } from '../../consts/check-boxes.const';
import { FILTER_BY_TRANSFER } from '../../types/filter-by-transfer.type';
import './filter-by-transfer.css';

type TFilterByTransfer = {
  setFilterByTransfer: Dispatch<SetStateAction<FILTER_BY_TRANSFER | string[]>>;
};

export const FilterByTransfer = ({
  setFilterByTransfer,
}: TFilterByTransfer) => {
  //   const handleAddFilter = (value: FILTER_BY_TRANSFER) => [
  //     setFilterByTransfer((prev) => {
  //       return {
  //         ...prev,
  //         value,
  //       };
  //     }),
  //   ];
  return (
    <div className="filterByTransferBox">
      <p>КОЛИЧЕТСВО ПЕРЕСАДОК</p>
      <div className="filterByTransferContainer">
        {/* {CHECKBOXES.map((item) => (
          <p onClick={() => handleAddFilter(item.value)} key={item.id}>
            {item.title}
          </p>
        ))} */}
      </div>
    </div>
  );
};
