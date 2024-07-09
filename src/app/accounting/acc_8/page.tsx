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
import FormAcc7_Tab2 from '@/app/ui/accounting/acc_7/formacc7_2';
import FormAcc8_Tab1 from '@/app/ui/accounting/acc_8/formacc8_1';
import FormAcc8_Tab2 from '@/app/ui/accounting/acc_8/formacc8_2';
import FormAcc8_Tab3 from '@/app/ui/accounting/acc_8/formacc8_3';
import FormAcc8_Tab5 from '@/app/ui/accounting/acc_8/formacc8_5';



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


const AccountingList8: React.FC = () => {
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
                    items={new Array(5).fill(null).map((_, i) => {
                      const id = String(i + 1);
                      return {
                        label: id === "1" ? "様式第１号" : id === "2" ? "別添１" : id === "3" ? "資金計画書 (概算払のみ)" : id === "4" ? "役員名簿" : "請求書(概算払のみ)",
                        key: id,
                        children: id === "1" ? <FormAcc8_Tab1 /> : id === "2" ? <FormAcc8_Tab2 /> : id === "3" ? <FormAcc8_Tab3 /> : id === "4" ? <FormAcc7_Tab2 /> : <FormAcc8_Tab5 />,
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

export default AccountingList8;
