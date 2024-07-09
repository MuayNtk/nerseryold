"use client";

import React, { useState } from "react";
import {
  Col,
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
import Form3_1 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_4)/formacc3_4_1";

import Form3_4 from "@/app/ui/accounting/(acc_button_3)/(acc_button_3_4)/formacc3_4_4";


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

  const [size] = useState<SizeType>("middle");

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
            <Tabs defaultActiveKey="1" type="card" size={size}>
              <Tabs.TabPane
                tab="1.【様式１】加算率認定（必須）"
                key="1"
              >
                <br /> <br />
                <Form3_1 />
              </Tabs.TabPane>

              <Tabs.TabPane tab="4.【様式２】ｷｬﾘｱﾊﾟｽ要件" key="2">
                <br /> <br />
                <Form3_4 />
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
