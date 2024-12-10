import React from 'react';
import { Typography } from 'antd';
import TabulatorTableExample from '../components/TabulatorTable/TabulatorTableExample';

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Title level={2}>Добро пожаловать</Title>
      <p>Рабочая область</p>
      <TabulatorTableExample />
    </div>
  );
};

export default Home;
