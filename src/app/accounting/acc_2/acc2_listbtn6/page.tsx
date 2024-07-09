"use client";

import React, { useState } from "react";
import { ConfigProviderProps } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, theme, Tabs } from "antd";
import SideLayout from "@/app/ui/sidelayout";
import NavBar from "@/app/ui/navbar";
import FootLayout from "@/app/ui/footlayout";
import FormTap1 from "@/app/ui/accounting/formacc2_listtap6-1";
import FormTap2 from "@/app/ui/accounting/formacc2_listtap6-2";
import FormTap3 from "@/app/ui/accounting/formacc2_listtap6-3";
import FormTap4 from "@/app/ui/accounting/formacc2_listtap6-4";
import FormTap5 from "@/app/ui/accounting/formacc2_listtap6-5";
import FormTap6 from "@/app/ui/accounting/formacc2_listtap6-6";
import FormTap7 from "@/app/ui/accounting/formacc2_listtap6-7";

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
    <>
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
              <Tabs.TabPane tab="様式１（申請書）" key="1">
                <FormTap1 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="別添１-１（積算根拠）（当初）" key="2">
                <FormTap2 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="別添１－２（実施計画書①）" key="3">
                <FormTap3 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="別添１－２（実施計画書②）" key="4">
                <FormTap4 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="資金計画書（概算払のみ）" key="5">
                <FormTap5 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="役員名簿（必須）" key="6">
                <FormTap6 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="請求書（概算払のみ）" key="7">
                <FormTap7 />
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
