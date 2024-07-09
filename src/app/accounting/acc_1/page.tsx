"use client";

import React, { useState } from 'react';
import {  Button,  ConfigProviderProps,} from 'antd';
import {
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout,  theme , Tabs} from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import FormTab1 from '@/app/ui/accounting/formacc1_1';
import FormTaball from '@/app/ui/accounting/formacc1_all';
import FormTab6 from '@/app/ui/accounting/formacc1_6';



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

type SizeType = ConfigProviderProps['componentSize'];


const AccountingList: React.FC = () => {
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

                <Tabs.TabPane tab="様式" key="1">
                <br/> <br/>
                  <FormTab1 />   {/* 令和５年度 */}
                    <div className="flex justify-end">
                      <Button type="primary">
                          Save 
                      </Button>
                    </div>
                </Tabs.TabPane>

                <Tabs.TabPane tab="①世代間交流" key="2">
                <br/> <br/>
                    <FormTaball /> 
                </Tabs.TabPane>

                <Tabs.TabPane tab="②異年齢児交流" key="3">
                <br/> <br/>
                      <FormTaball /> 
                </Tabs.TabPane>

                <Tabs.TabPane tab="③育児講座・両立支援" key="4">
                <br/> <br/>
                      <FormTaball /> 
                </Tabs.TabPane>

                <Tabs.TabPane tab="④地域の特性" key="5">
                <br/> <br/>
                      <FormTaball /> 
                </Tabs.TabPane>

                <Tabs.TabPane tab="様式" key="6">
                <br/> <br/>
                    <FormTab6 /> 
                </Tabs.TabPane>


              </Tabs>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default AccountingList;
