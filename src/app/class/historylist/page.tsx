"use client";

import React, { useState } from 'react';
import {
  UserOutlined,
  HomeOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Col, ConfigProviderProps, Layout,  Tabs,  theme } from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';

import FormHistoryList1 from '@/app/ui/class/formhistory1';
import FormHistoryList2 from '@/app/ui/class/formhistory2';
import FormHistoryList3 from '@/app/ui/class/formhistory3';

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
            <Tabs defaultActiveKey="1" type="card" size={size}>

                  <Tabs.TabPane tab="学生の履歴書" key="1">
                
                    <FormHistoryList1 />
                  </Tabs.TabPane>

                  <Tabs.TabPane tab="家族の履歴書" key="2">
                    
                    <FormHistoryList2 />
                
                  </Tabs.TabPane>

                  <Tabs.TabPane tab="訪問者" key="3">
               
                      
                        <FormHistoryList3 />
                
                  </Tabs.TabPane>

            </Tabs>
            
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default ClassList;

