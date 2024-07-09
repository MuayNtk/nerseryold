"use client";

import React from 'react';
import {
  UserAddOutlined,
  TeamOutlined,
  HomeOutlined,
  WarningOutlined,
  SnippetsOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import t from "@/app/locales/jp/common.json";//import language
import { Breadcrumb, Layout, theme, Row, Col, Button } from 'antd';
import SideLayout from './ui/sidelayout';
import NavBar from './ui/navbar';
import FootLayout from './ui/footlayout';

const { Content } = Layout;

const bcList = [
  {
    href: '',
    title: <HomeOutlined />,
  },
  {title: t.menu.home},
];

function redirection (path:string){
  window.location.assign("http://localhost:3000/"+path);
  return false;
}

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
            <>
              <Row gutter={[30, 30]}>
                <Col span="6">
                <Button block type="primary" size="large" icon={<UserAddOutlined />} onClick={(e) => redirection("teacher/todolist")}>保育士登録</Button>
                </Col>
                <Col span="6">
                <Button block type="primary" size="large" icon={<UserAddOutlined />} onClick={(e) => redirection("student")}>園児登録</Button>
                </Col>
                <Col span="6">
                <Button block type="primary" size="large" icon={<TeamOutlined />} onClick={(e) => redirection("setting/class")}>クラス登録</Button>
                </Col>
                <Col span="6">
                <Button block disabled type="primary" size="large" icon={<ClockCircleOutlined />} onClick={(e) => redirection("")}>登降園記録</Button>
                </Col>
                
                <Col span="6">
                <Button block disabled type="primary" size="large" icon={<SnippetsOutlined />} onClick={(e) => redirection("")}>日誌登録</Button>
                </Col>
                <Col span="6">
                <Button block disabled type="primary" size="large" icon={<WarningOutlined />} onClick={(e) => redirection("")}>事故登録</Button>
                </Col>
                <Col span="6">
                <Button block disabled type="primary" size="large" icon={<MailOutlined />} onClick={(e) => redirection("")}>メッセージ配信</Button>
                </Col>
              </Row>
            </>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default App; 