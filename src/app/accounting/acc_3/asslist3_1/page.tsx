"use client";

import React, { useState } from 'react';
import {  Col, ConfigProviderProps, DatePicker, DatePickerProps, Row, Select, Space } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout,  theme , Tabs,  Form, Input} from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import Form3_1 from '@/app/ui/accounting/formacc3_1';




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
  {title: 'List1'},
];

/* eslint-enable no-template-curly-in-string */

type SizeType = ConfigProviderProps['componentSize'];






const AccountingList3: React.FC = () => {
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
            }}
          >
              <Tabs defaultActiveKey="1" type="card" size={size}>

                <Tabs.TabPane tab="施設別研修受講歴一覧表（認定こども園）" key="1">
                <br/> <br/>
                  <Form3_1/>
                </Tabs.TabPane>

                <Tabs.TabPane tab="職員別研修受講歴一覧表（認定こども園）" key="2">
                <br/> <br/>
                    
                </Tabs.TabPane>

                <Tabs.TabPane tab="" key="3">
                <br/> <br/>
                      
                </Tabs.TabPane>

                <Tabs.TabPane tab="" key="4">
                <br/> <br/>
                     
                </Tabs.TabPane>
              </Tabs>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default AccountingList3;
