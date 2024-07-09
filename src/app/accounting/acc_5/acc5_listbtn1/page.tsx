"use client";

import React, { useState } from "react";
import { ConfigProviderProps } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, theme, Tabs } from "antd";
import SideLayout from "@/app/ui/sidelayout";
import NavBar from "@/app/ui/navbar";
import FootLayout from "@/app/ui/footlayout";
import FormTap1 from "@/app/ui/accounting/acc_5/acc5_listbtn1/formacc5_listtap1-1";
import FormTap2 from "@/app/ui/accounting/acc_5/acc5_listbtn1/formacc5_listtap1-2";
import FormTap3 from "@/app/ui/accounting/acc_5/acc5_listbtn1/formacc5_listtap1-3";

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

const AccountingList1: React.FC = () => {
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
              <Tabs.TabPane tab="【提出用】加算申請書（仮）" key="1">
                <FormTap1 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="（参考）【処遇Ⅱ】加算対象職員数計算表" key="2">
                <FormTap2 />
              </Tabs.TabPane>

              <Tabs.TabPane
                tab="（参考）【処遇Ⅱ・Ⅲ】平均年齢別児童数計算表"
                key="3"
              >
                <FormTap3 />
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </Layout>
  );
};

export default AccountingList1;
