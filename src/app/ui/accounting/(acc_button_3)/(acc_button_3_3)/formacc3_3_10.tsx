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
  prefecture: string;
  cityName: string;
  facilityName: string;
  contributeAmount: string;
  receivedAmount: string;
}

type LayoutType = Parameters<typeof Form>[0]["layout"];

const columnData: columnHeaderData[] = [
  {
    key: "1",
    order: "No.1",
    prefecture: "○○県",
    cityName: "○○市",
    facilityName: "○○保育所",
    contributeAmount: "string",
    receivedAmount: "string",
  },
  {
    key: "2",
    order: "No.2",
    prefecture: "○○県",
    cityName: "○○市",
    facilityName: "○○保育所",
    contributeAmount: "string",
    receivedAmount: "string",
  },
  {
    key: "3",
    order: "No.3",
    prefecture: "福岡県",
    cityName: "福岡市",
    facilityName: "いちざきみんなの家",
    contributeAmount: "string",
    receivedAmount: "string",
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
    title: "都道府県名",
    dataIndex: "prefecture",
    render: (prefecture) => (
      <>
        <Text>{prefecture}</Text>
      </>
    ),
  },
  {
    title: "市町村名",
    dataIndex: "cityName",
    render: (cityName) => (
      <>
        <Text>{cityName}</Text>
      </>
    ),
  },
  {
    title: "施設・事業所名※",
    dataIndex: "facilityName",
    render: (facilityName) => (
      <>
        <Text>{facilityName}</Text>
      </>
    ),
  },
  {
    title: "他事業所への拠出額",
    dataIndex: "contributeAmount",
    render: (contributeAmount) => (
      <>
        <InputNumber addonAfter="円" />
      </>
    ),
  },
  {
    title: "他事業所からの受入額",
    dataIndex: "receivedAmount",
    render: (receivedAmount) => (
      <>
        <InputNumber addonAfter="円" />
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
      <Title level={3}>同一事業者内における拠出見込額・受入見込額一覧表</Title>
      <Form {...formItemLayout}>
        <Form.Item label="施設・事業所名">
          <Input defaultValue={"いちざきみんなの家"} />
        </Form.Item>
      </Form>
      <Card>
        <Table
          dataSource={columnData}
          columns={columnsTitle}
          bordered
          summary={() => (
            <>
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={4} align="center">
                  合計
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={5}>
                    <InputNumber addonAfter="円" />
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={6}>
                    <InputNumber addonAfter="円" />
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            </>
          )}
        />

        <Text type="secondary">※ 同一事業者が運営する全ての施設・事業所(特定教育・保育施設及び特定地域型保育事業所、特例保育を提供する施設)について記入すること。</Text>
      </Card>
    </>
  );
};

export default Form3_3;
