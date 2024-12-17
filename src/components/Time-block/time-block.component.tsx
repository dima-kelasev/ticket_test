import './time-block.css';
import { Typography } from 'antd';

const { Title, Text } = Typography;

type TTimeBlock = {
  time: string;
  code: string;
  cityName: string;
  date: string;
};

export const TimeBlock = ({ time, code, cityName, date }: TTimeBlock) => {
  return (
    <div className="timeContainer">
      <Title level={2}>{time}</Title>
      <div className="airPortCodeAndName">
        <Text>{code}</Text>
        <Text>,</Text>
        <Text>{cityName}</Text>
      </div>
      <div className="dateTimeBlock">
        <Text type="secondary">{date}</Text>
      </div>
    </div>
  );
};
