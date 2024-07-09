"use client";

import React from 'react';
import {
  SettingFilled,
  HomeOutlined,
} from '@ant-design/icons';
import t from "@/app/locales/jp/common.json";//import language
import { Breadcrumb, Layout, theme, Typography, Input, Flex, Button, Space } from 'antd';
import SideLayout from '../../ui/sidelayout';
import NavBar from '../../ui/navbar';
import FootLayout from '../../ui/footlayout';
import info from "@/app/sample/nurseryinfo.json";//import language

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
        <SettingFilled />
        <span>{t.menu.setting}</span>
      </>
    ),
  },
  {title: t.menu.nurseryinfo},
];


const App: React.FC = () => {
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
            }}
          >
            <Flex vertical gap={16}>
              <Flex gap="small">
                <Input
                style={{ width: '25%' }} 
                addonBefore="市町村名"
                placeholder='市町村名' 
                defaultValue={info.nurseryProvince} />
                <Input 
                 style={{ width: '25%' }}
                 addonBefore="園番号"
                placeholder='園番号' 
                defaultValue={info.nurseryID} />
                <Input 
                 style={{ width: '50%' }}
                 addonBefore="施設・事業所名"
                placeholder='施設・事業所名' 
                defaultValue={info.nurseryName} />
              </Flex>	
              <div>
                <Typography.Title level={5}>法人名</Typography.Title>
                <Input 
                placeholder='法人名' 
                defaultValue={info.legalName} />
              </div>
              <div>
                <Typography.Title level={5}>法人住所</Typography.Title>
                <Flex gap="small">
                  <Input style={{ width: '20%' }} addonBefore="〒" placeholder="111-2222" maxLength={8} defaultValue={info.legalAddress.zipcode} />
                  <Input style={{ width: '30%' }}
                  placeholder='アパートなど建物名・部屋番号（ある場合）' 
                  defaultValue={info.legalAddress.building} />
                  <Input	style={{ width: '50%' }}							
                  placeholder='郡市、都道府県、番地、丁・町村' 
                  defaultValue={info.legalAddress.adress} />
                </Flex>	
              </div>
              <div>
                <Typography.Title level={5}>保育園住所</Typography.Title>
                  <Flex gap="small">
                    <Input  style={{ width: '20%' }} addonBefore="〒" placeholder="111-2222" maxLength={8} defaultValue={info.legalAddress.zipcode} />
                    <Input  style={{ width: '30%' }}
                    placeholder='アパートなど建物名・部屋番号（ある場合）' 
                    defaultValue={info.nurseryAddress.building} />
                    <Input  style={{ width: '50%' }}
                    placeholder='郡市、都道府県、番地、丁・町村' 
                    defaultValue={info.nurseryAddress.adress} />
                  </Flex>	
              </div>
              <div>
                <Typography.Title level={5}>連絡先</Typography.Title>
                <Flex gap="small">
                  <Input
                  style={{ width: '50%' }} 
                  addonBefore="電話番号"
                  placeholder='111-222-3333' 
                  defaultValue={info.nurseryContact.phone} />
                  <Input 
                  style={{ width: '50%' }}
                  addonBefore="メールアドレス"
                  placeholder='tokyo@japan.com' 
                  defaultValue={info.nurseryContact.email} />
                </Flex>
              </div>
              
              <center><Button type="primary">修正</Button></center>
            </Flex>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default App;