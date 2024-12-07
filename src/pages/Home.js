import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Title level={2}>Welcome to Dashboard</Title>
      <p>This is your workspace area. Add your content here.</p>
    </div>
  );
};

export default Home;
