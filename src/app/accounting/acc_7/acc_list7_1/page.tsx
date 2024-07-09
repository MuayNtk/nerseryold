"use client";

import React, { useState } from 'react';
import {
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout,  theme , Tabs, ConfigProviderProps} from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import FormAcc7_Tab1 from '@/app/ui/accounting/acc_7/formacc7_1';
import FormAcc7_Tab2 from '@/app/ui/accounting/acc_7/formacc7_2';



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


const AccountingList7: React.FC = () => {
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

                  <Tabs
                  defaultActiveKey="1"
                  type="card"
                  size={size}
                  items={new Array(2).fill(null).map((_, i) => {
                  const id = String(i + 1);
                  return {
                        label: id === "1" ? "様式第１号" :  "役員名簿", // label: id === "1" ? "様式第１号" : id === "2" ? "役員名簿" : "อื่นๆ",
                        key: id,
                        children: id === "1" ? <FormAcc7_Tab1/> : <FormAcc7_Tab2/> , // children: id === "1" ? 'd' : id === "2" ? 'dds' : 'อื่นๆ',
                      };
                  })}
                  />

          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default AccountingList7;
