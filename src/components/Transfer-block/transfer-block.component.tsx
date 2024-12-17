import './transfer-block.css';

import PlaneIcon from '../../assets/jpeg/plane-icon.jpg';
import { Typography } from 'antd';

const { Text } = Typography;

type TTransferBlock = {
  transferInfo: string[];
};

export const TransferBlock = ({ transferInfo }: TTransferBlock) => {
  const isHasTransfer = !!transferInfo.length;
  return (
    <div className="transferBox">
      {isHasTransfer && (
        <div className="transferInfo">
          <Text type="secondary">{transferInfo.length}</Text>
          <Text type="secondary">{`${
            transferInfo.length === 1 ? 'ПЕРЕСАДКА' : 'ПЕРЕСАДКИ'
          }`}</Text>
        </div>
      )}
      <div className="transferLine">
        <div className="transferItem" />
        <img src={PlaneIcon} alt="plane-icon" width={12} height={12} />
      </div>
    </div>
  );
};
