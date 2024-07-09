"use client";

import React, { useState } from "react";
import { ConfigProviderProps } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, theme, Tabs } from "antd";
import SideLayout from "@/app/ui/sidelayout";
import NavBar from "@/app/ui/navbar";
import FootLayout from "@/app/ui/footlayout";
import FormTap1 from "@/app/ui/accounting/formacc2_listtap2-1";
import FormTap2 from "@/app/ui/accounting/formacc2_listtap2-2";
import FormTap3 from "@/app/ui/accounting/formacc2_listtap2-3";
import FormTap4 from "@/app/ui/accounting/formacc2_listtap2-4";

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
  { title: "List1" },
];

type SizeType = ConfigProviderProps["componentSize"];

const AccountingList: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [size] = useState<SizeType>("small");

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
            <Tabs defaultActiveKey="1" type="card" size={size}>
              <Tabs.TabPane tab="様式第１号（交付申請書） " key="1">
                <FormTap1 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="別添1－1" key="2">
                <FormTap2 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="別添1－2" key="3">
                <FormTap3 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="別添1－３" key="4">
                <FormTap4 />
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
