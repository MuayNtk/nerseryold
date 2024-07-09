"use client";

import React, { useState } from 'react';
import {
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, ConfigProviderProps, Layout,  Tabs,  theme } from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import FormNameList from '@/app/ui/class/formnamelist';

const { Content } = Layout;

const bcList = [
  {
    href: '',
    title: <HomeOutlined />,
  },
  {
    href: '',
    title: (
      <>
        <UserOutlined />
        <span>ユーザー</span>
      </>
    ),
  },
  {title: 'List'},
];
type SizeType = ConfigProviderProps['componentSize'];

const ClassList: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const [size] = useState<SizeType>('small');
  
 
  return (
    <>
      <SideLayout />
      <Layout>
        <NavBar />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb items={bcList} style={{ margin: '16px 0' }} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              textAlign: 'center'
            }}
          >
            <FormNameList />
            
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default ClassList;

