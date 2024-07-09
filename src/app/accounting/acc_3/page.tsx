"use client";

import React, { useState } from 'react';
import {
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Flex, Layout,  theme, ConfigProvider } from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import { SizeType } from 'antd/es/config-provider/SizeContext';


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


const AccountingList: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const [size] = useState<SizeType>('large'); // default is 'middle'
  return (
    <Layout style={{ minHeight: '100vh', flexDirection: "initial"  }}>
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
              <Flex gap="middle"  align="start" vertical>
                <Button type="link" size={size} href='./acc_3/acclist3_1'>【いちざき】02_キャリアアップ研修受講歴一覧</Button>
                {/* <Button type="link" size={size} href=''></Button> */}
                <Button type="link" size={size} href='./acc_3/acclist3_3'> ×【いちざき】【新規事由Ⅰなし・Ⅱなし】処遇計画書</Button>
                <Button type="link" size={size} href='./acc_3/acclist3_4'> 【処遇Ⅰ】R5_加算率認定申請書・キャリアパス要件届出書</Button>
                <Button type="link" size={size} href='./acc_3/acclist3_5'> 【処遇Ⅱ】R5_処遇改善等加算申請書（保育所版）</Button>
                <Button type="link" size={size} href='./acc_3/acclist3_6'> 【処遇Ⅲ】R5_加算算定対象人数等認定申請書（保育所）</Button>
              </Flex>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </Layout>
  );
};

export default AccountingList;

