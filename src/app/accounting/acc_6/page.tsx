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

import FormAcc6_1 from '@/app/ui/accounting/acc_6/formacc6_1';
import FormAcc6_2 from '@/app/ui/accounting/acc_6/formacc6_2';
import FormAcc6_3 from '@/app/ui/accounting/acc_6/formacc6_3';




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
                
                <Tabs.TabPane tab="給付費(託費)請求(報告)書" key="1"> 
                  <FormAcc6_1/>
                </Tabs.TabPane>

                <Tabs.TabPane tab="令和5年度保育施設等利用児童数確認票" key="2">
                  <FormAcc6_2/>
                </Tabs.TabPane>

                <Tabs.TabPane tab="令和5年度第3子遇副食費免除確票" key="3">
                  <FormAcc6_3/>
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
