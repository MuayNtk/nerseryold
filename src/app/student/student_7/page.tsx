"use client";

import React, { useState } from 'react';
import { Button, ConfigProviderProps, Tabs} from 'antd';
import {
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout,  theme} from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import FormStudent7_1 from '@/app/ui/student/formstudent7_1';
import FormStudent7_2 from '@/app/ui/student/formstudent7_2';
import FormStudent7_3 from '@/app/ui/student/formstudent7_3';

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
const StudentApp: React.FC = () => {
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

                <Tabs.TabPane tab="年間指導計画 ０ 歳児" key="1">
                  <FormStudent7_1 />
                </Tabs.TabPane>

                <Tabs.TabPane tab="年間指導計画 １・２ 歳児" key="2">
                  <FormStudent7_2 />
                </Tabs.TabPane>

                <Tabs.TabPane tab="年間指導計画 ３・４・５ 歳児" key="3">
                  <FormStudent7_3 />
                </Tabs.TabPane>
              </Tabs>
             
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default StudentApp;
