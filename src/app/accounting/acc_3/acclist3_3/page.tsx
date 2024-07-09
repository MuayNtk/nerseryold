"use client";
import React, { useState } from "react";
import {
  ConfigProvider,
  ConfigProviderProps,
  DatePicker,
  DatePickerProps,
  Row,
  Select,
  Space,
} from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, theme, Tabs, Form, Input } from "antd";
import SideLayout from "@/app/ui/sidelayout";
import NavBar from "@/app/ui/navbar";
import FootLayout from "@/app/ui/footlayout";
import Form3_1 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_1";
import Form3_2 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_2";
import Form3_3 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_3";
import Form3_4 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_4";
import Form3_5 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_5";
import Form3_6 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_6";
import Form3_7 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_7";
import Form3_8 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_8";
// import Form3_9 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_9";
import Form3_10 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_10";
import Form3_11 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_3)/formacc3_3_11";

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
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    date: "${label} is not a valid date!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

type SizeType = ConfigProviderProps["componentSize"];

const onFinish = (values: any) => {
  console.log(values);
};

const AccountingList3: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [size] = useState<SizeType>("small");

  return (
    <Layout style={{ minHeight: "100vh", flexDirection: "initial" }}>
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
            <Tabs defaultActiveKey="3" type="card" size={size}>
              <Tabs.TabPane
                tab="①【様式５別添１】賃金改善明細書（41名以上)"
                key="1"
              >
                <br /> <br />
                <ConfigProvider
                  theme={{ components: { Table: { borderColor: "black" } } }}
                >
                  <Form3_1 />
                </ConfigProvider>
              </Tabs.TabPane>

              <Tabs.TabPane tab="②【様式５別添２】一覧表" key="2">
                <br /> <br />
                <ConfigProvider
                  theme={{ components: { Table: { borderColor: "black" } } }}
                >
                  <Form3_2 />
                </ConfigProvider>
              </Tabs.TabPane>

              <Tabs.TabPane tab="③【様式５】計画書Ⅰ" key="3">
                <br /> <br />
                <ConfigProvider
                  theme={{ components: { Table: { borderColor: "black" } } }}
                >
                  <Form3_3 />
                </ConfigProvider>
              </Tabs.TabPane>

              <Tabs.TabPane tab="④【様式７別添１】内訳書" key="4">
                <br /> <br />
                <ConfigProvider
                  theme={{ components: { Table: { borderColor: "black" } } }}
                >
                  <Form3_4 />
                </ConfigProvider>
              </Tabs.TabPane>

              <Tabs.TabPane tab="⑤【様式７別添２】一覧表" key="5">
                <br /> <br />
                <ConfigProvider
                  theme={{ components: { Table: { borderColor: "black" } } }}
                >
                  <Form3_5 />
                </ConfigProvider>
              </Tabs.TabPane>

              <Tabs.TabPane tab="⑥【様式７】計画書Ⅱ" key="6">
                <br /> <br />
                <ConfigProvider
                  theme={{ components: { Table: { borderColor: "black" } } }}
                >
                  <Form3_6 />
                </ConfigProvider>
              </Tabs.TabPane>

              <Tabs.TabPane tab="⑦ 処遇Ⅱ加算対象職員名簿" key="7">
                <br /> <br />
                <ConfigProvider
                  theme={{ components: { Table: { borderColor: "black" } } }}
                >
                  <Form3_7 />
                </ConfigProvider>
              </Tabs.TabPane>

              <Tabs.TabPane
                tab="⑧【様式９別添１】賃金改善明細書（職員別）"
                key="8"
              >
                <br /> <br />
                <ConfigProvider
                  theme={{ components: { Table: { borderColor: "black" } } }}
                >
                  <Form3_8 />
                </ConfigProvider>
              </Tabs.TabPane>

              {/* <Tabs.TabPane tab="⑧【様式９別添１】賃金改善明細書（41名以上）" key="9">
                <br /> <br />
                <Form3_9 />
              </Tabs.TabPane> */}

              <Tabs.TabPane tab="⑨【様式９別添２】一覧表" key="10">
                <br /> <br />
                <ConfigProvider
                  theme={{ components: { Table: { borderColor: "black" } } }}
                >
                  <Form3_10 />
                </ConfigProvider>
              </Tabs.TabPane>

              <Tabs.TabPane tab="⑩【様式９】計画書Ⅲ" key="11">
                <br /> <br />
                <ConfigProvider
                  theme={{ components: { Table: { borderColor: "black" } } }}
                >
                  <Form3_11 />
                </ConfigProvider>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </Layout>
  );
};

export default AccountingList3;
