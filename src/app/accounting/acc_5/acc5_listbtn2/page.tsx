"use client";

import React, { useState } from "react";
import { ConfigProviderProps } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, theme, Tabs } from "antd";
import SideLayout from "@/app/ui/sidelayout";
import NavBar from "@/app/ui/navbar";
import FootLayout from "@/app/ui/footlayout";
import FormTap1 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-1";
import FormTap2 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-2";
import FormTap3 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-3";
import FormTap4 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-4";
import FormTap5 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-5";
import FormTap6 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-6";
import FormTap7 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-7";
import FormTap8 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-8";
import FormTap9 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-9";
import FormTap10 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-10";
import FormTap11 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-11";
import FormTap12 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-12";
import FormTap13 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-13";
import FormTap14 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-14";
import FormTap15 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-15";
import FormTap16 from "@/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-16";

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

const AccountingList2: React.FC = () => {
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
              <Tabs.TabPane tab="総括表" key="1">
                <FormTap1 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票１" key="2">
                <FormTap2 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 2 " key="3">
                <FormTap3 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 3 " key="4">
                <FormTap4 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 4" key="5">
                <FormTap5 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="チーム" key="6">
                <FormTap6 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 5" key="7">
                <FormTap7 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 6" key="8">
                <FormTap8 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 7" key="9">
                <FormTap9 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 8" key="10">
                <FormTap10 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 9" key="11">
                <FormTap11 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 10" key="12">
                <FormTap12 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 10 (添付書類）" key="13">
                <FormTap13 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 11" key="14">
                <FormTap14 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 12" key="15">
                <FormTap15 />
              </Tabs.TabPane>
              <Tabs.TabPane tab="個票 13" key="16">
                <FormTap16 />
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </Layout>
  );
};

export default AccountingList2;
