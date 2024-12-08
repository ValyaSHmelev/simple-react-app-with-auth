import React, { useState } from 'react';
import { Layout, Menu, Button, theme, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined, HomeOutlined, CloudServerOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{ 
          height: 64, 
          margin: '16px', 
          background: 'rgba(255,255,255,.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <CloudServerOutlined style={{ fontSize: '24px', color: '#fff' }} />
          {!collapsed && <Title level={4} style={{ margin: 0, color: '#fff' }}>ЦСМ</Title>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: '/',
              icon: <HomeOutlined />,
              label: 'Главная',
              onClick: () => navigate('/'),
            },
            {
              key: '/profile',
              icon: <UserOutlined />,
              label: 'Профиль',
              onClick: () => navigate('/profile'),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: '16px', width: 64, height: 64 }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span>Welcome, {user?.username}</span>
              <Button type="text" icon={<LogoutOutlined />} onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </Header>
        <div style={{ padding: '16px 16px 0', background: colorBgContainer }}>
          <div style={{ marginBottom: 16 }}>
            {/* Toolbar area */}
            <div style={{ padding: '8px', background: '#fafafa', borderRadius: borderRadiusLG }}>
              Toolbar Content
            </div>
          </div>
        </div>
        <Content style={{ margin: '0 16px 16px', padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
