"use client";

import React, { useState } from 'react';
import {
  UserOutlined,
  HomeOutlined,
  DownloadOutlined,
  SaveOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Col, ConfigProviderProps, Layout,  Radio,  RadioChangeEvent,  Row,  Tabs,  theme } from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import FormRegisterTeach1 from '@/app/ui/listteacher/formregisterteach1';
import FormRegisterTeach2 from '@/app/ui/listteacher/formregisterteach2';
import Formradio from '@/app/ui/listteacher/formradio';

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


const TeachList: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  

  const [selectedOption, setSelectedOption] = useState<string>('1'); // กำหนดค่าเริ่มต้นเป็น '1'

  const handleOptionChange = (event: RadioChangeEvent) => {
    setSelectedOption(event.target.value);
  };
 
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
                  <Formradio/>
                 
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default TeachList;

