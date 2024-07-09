"use client";

import React, { useState } from 'react';
import { ConfigProviderProps, Tabs} from 'antd';
import {
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout,  theme} from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import FormStudent9_1 from '@/app/ui/student/formstudent_9_1';
import FormStudent9_2 from '@/app/ui/student/formstudent_9_2';



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

const onFinish = (values: any) => {
  console.log(values);
};




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

                <Tabs.TabPane tab="週 案 と 保 育 日 誌（未満児）" key="1">
                    <FormStudent9_1 /> {/* <ชื่อ  ui/> */}
                </Tabs.TabPane>

                <Tabs.TabPane tab="週 案 と 保 育 日 誌（以上児）" key="2">
                    <FormStudent9_2 /> {/* <ชื่อ  ui/> */}
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
