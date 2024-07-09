"use client";

import React, { useState } from "react";
import { ConfigProviderProps } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, theme, Tabs } from "antd";
import SideLayout from "@/app/ui/sidelayout";
import NavBar from "@/app/ui/navbar";
import FootLayout from "@/app/ui/footlayout";
import FormStudent21 from "@/app/ui/student/formstudent_2_1";
import FormStudent22 from "@/app/ui/student/formstudent_2_2";
import FormStudent23 from "@/app/ui/student/formstudent_2_3";
import FormStudent24 from "@/app/ui/student/formstudent_2_4";
import FormStudent25 from "@/app/ui/student/formstudent_2_5";
import FormStudent26 from "@/app/ui/student/formstudent_2_6";

const { Content } = Layout;

const bcList = [
  {
    href: "",
    title: <HomeOutlined />,
  },
  {
    href: "",
    title: (
      <>
        <UserOutlined />
        <span>ユーザー</span>
      </>
    ),
  },
  { title: "Student_2_1" },
];

type SizeType = ConfigProviderProps["componentSize"];

const onFinish = (values: any) => {
  console.log(values);
};

const AccountingList: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideLayout />
      <Layout>
        <NavBar />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb items={bcList} style={{ margin: "16px 0" }} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <ชื่อ  ui/> */}
            <Tabs defaultActiveKey="1" type="card" size="small">
              <Tabs.TabPane tab="年度 ０ 歳児保育経過記録" key='1'>
                <FormStudent21 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="年度 1 歳児保育経過記録" key='2'>
                <FormStudent22 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="年度 2 歳児保育経過記録" key='3'>
                <FormStudent23 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="年度 3 歳児保育経過記録" key='4'>
                <FormStudent24 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="年度 4 歳児保育経過記録" key='5'>
                <FormStudent25 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="年度 5 歳児保育経過記録" key='6'>
                <FormStudent26 />
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </Layout>
  );
};

export default AccountingList;
