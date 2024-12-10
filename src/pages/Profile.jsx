import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, Typography, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <Card style={{ maxWidth: 600, margin: '24px auto' }}>
      <Title level={2}>Профиль пользователя</Title>
      <Space direction="vertical" size="large" style={{ width: '100%', marginTop: 24 }}>
        <div>
          <Text strong>ID пользователя: </Text>
          <Text>{user.id}</Text>
        </div>
        <div>
          <Text strong>Имя пользователя: </Text>
          <Text>{user.username}</Text>
        </div>
        <Button type="primary" danger onClick={handleLogout} block>
          Выйти
        </Button>
      </Space>
    </Card>
  );
};

export default Profile;
