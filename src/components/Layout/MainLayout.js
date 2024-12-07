import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{ height: 32, margin: 16, background: 'rgba(255,255,255,.2)' }} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Menu Item 1',
            },
            // Add more menu items as needed
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
