"use client";

import React, { ReactNode, useState } from "react";
import type { DatePickerProps, MenuProps, TableColumnsType } from "antd";
import {
  Button,
  Form,
  Input,
  Space,
  Dropdown,
  Tag,
  Card,
  InputNumber,
  Typography,
  Table,
} from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
const { Title, Text } = Typography;

interface columnHeaderData {
  key: React.Key | string;
  order: string;
  jobTitle: string;
  occupation: string;
  fullName: string;
}

type LayoutType = Parameters<typeof Form>[0]["layout"];

const columnData: columnHeaderData[] = [
  {
    key: "1",
    order: "No.1",
    jobTitle: "副主任保育士",
    occupation: "保育士",
    fullName: "○○　○○",
  },
  {
    key: "2",
    order: "No.2",
    jobTitle: "副主任保育士",
    occupation: "保育士",
    fullName: "■■　■■",
  },
  {
    key: "3",
    order: "No.3",
    jobTitle: "指導教諭",
    occupation: "幼稚園教諭",
    fullName: "△△　△△",
  },
];

const columnsTitle: TableColumnsType<columnHeaderData> = [
  {
    title: "番号",
    dataIndex: "order",
    render: (order) => (
      <>
        <Text>{order}</Text>
      </>
    ),
  },
  {
    title: "職名",
    dataIndex: "jobTitle",
    render: (jobTitle) => (
      <>
        <Text>{jobTitle}</Text>
      </>
    ),
  },
  {
    title: "職種",
    dataIndex: "occupation",
    render: (occupation) => (
      <>
        <Text>{occupation}</Text>
      </>
    ),
  },
  {
    title: "氏名",
    dataIndex: "fullName",
    render: (fullName) => (
      <>
        <Text>{fullName}</Text>
      </>
    ),
  },
];

const Form3_3: React.FC = () => {
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 6 },
          wrapperCol: { span: 14, flex: 1 },
          labelWrap: true,
        }
      : null;
  return (
    <>
      <Title level={3}>令和５年度 処遇改善等加算Ⅱ 加算対象職員名簿</Title>
      <Form {...formItemLayout}>
        <Form.Item label="施設・事業所名">
          <Input defaultValue={"いちざきみんなの家"} />
        </Form.Item>
        <Form.Item label="作成日">
          <Space>
            <InputNumber
              addonBefore="令和"
              value="5"
              addonAfter="年"
              disabled
              width="30%"
            />
            <InputNumber addonAfter="月" />
            <InputNumber addonAfter="日" />
          </Space>
        </Form.Item>
      </Form>
      <Card>
        <Table dataSource={columnData} columns={columnsTitle} bordered />
      </Card>
    </>
  );
};

export default Form3_3;
