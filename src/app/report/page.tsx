"use client";

import React, { useState } from 'react';
import {
  UserOutlined,
  HomeOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Col, ConfigProviderProps, Layout, theme } from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import Buttonlist from '../ui/report/buttonlist';

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

const Report: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  

 
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
            <Buttonlist/>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default Report;

