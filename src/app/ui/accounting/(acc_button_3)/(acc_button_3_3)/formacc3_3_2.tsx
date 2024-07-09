"use client";

import React, { useState, ReactNode } from "react";
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

import { DownloadOutlined, DownOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";

const { Text, Title } = Typography;

type LayoutType = Parameters<typeof Form>[0]["layout"];

interface listDataType {
  key: React.Key;
  order: string;
  prefectureName: string;
  cityName: string;
  facilityName: string;
  contributeAmountOtherOffice: React.ReactNode;
  increaseOrDecreasedBaseYear1: React.ReactNode;
  receiveAmountOtherOffice: React.ReactNode;
  increaseOrDecreasedBaseYear2: React.ReactNode;
}

interface formHeaderType {
  key: React.Key;
  label: string;
  detail: string;
}

const listData: listDataType[] = [];
for (let i = 1; i < 16; i++) {
  listData.push({
    key: `${i}`,
    order: `${i}`,
    prefectureName: "string",
    cityName: "string",
    facilityName: "string",
    contributeAmountOtherOffice: <InputNumber />,
    increaseOrDecreasedBaseYear1: <InputNumber />,
    receiveAmountOtherOffice: <InputNumber />,
    increaseOrDecreasedBaseYear2: <InputNumber />,
  });
}

const listHeader: TableColumnsType<listDataType> = [
  {
    key: "1",
    title: "番号",
    dataIndex: "order",
    render: (order) => <>{order}</>,
  },
  {
    key: "2",
    title: "都道府県名",
    dataIndex: "prefectureName",
    render: (prefectureName) => <>{prefectureName}</>,
  },
  {
    key: "3",
    title: "市町村名",
    dataIndex: "cityName",
    render: (cityName) => <>{cityName}</>,
  },
  {
    key: "4",
    title: "施設・事業所名※1",
    dataIndex: "facilityName",
    render: (facilityName) => <>{facilityName}</>,
  },
  {
    key: "5",
    title: "他事業所への拠出額（円）",
    dataIndex: "contributeAmountOtherOffice",
    render: (contributeAmountOtherOffice) => <>{contributeAmountOtherOffice}</>,
  },
  {
    key: "6",
    title: "うち基準年度からの増減額（円）",
    dataIndex: "increaseOrDecreasedBaseYear1",
    render: (increaseOrDecreasedBaseYear1) => (
      <>{increaseOrDecreasedBaseYear1}</>
    ),
  },
  {
    key: "7",
    title: "他事業所からの受入額（円）",
    dataIndex: "receiveAmountOtherOffice",
    render: (receiveAmountOtherOffice) => <>{receiveAmountOtherOffice}</>,
  },
  {
    key: "8",
    title: "うち基準年度からの増減額（円）",
    dataIndex: "increaseOrDecreasedBaseYear2",
    render: (increaseOrDecreasedBaseYear2) => (
      <>{increaseOrDecreasedBaseYear2}</>
    ),
  },
];

const formHeaderData: formHeaderType[] = [
  {
    key: "1",
    label: "施設・事業所名",
    detail: "いちざきみんなの家",
  },
];

const formHeader: TableColumnsType<formHeaderType> = [
  {
    key: "1",
    dataIndex: "label",
    width: 200,
    render: (label) => <>{label}</>,
  },
  {
    key: "1",
    dataIndex: "detail",
    width: 400,
    render: (detail) => <>{detail}</>,
  },
];

const Form3_3: React.FC = () => {
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14, flex: 1 },
          labelWrap: true,
        }
      : null;

  return (
    <>
      <Form
        {...formItemLayout}
        style={{ maxWidth: 600 }}
        labelWrap
        wrapperCol={{ flex: 1 }}
      >
        <Form.Item>
          <Table
            dataSource={formHeaderData}
            columns={formHeader}
            bordered
            pagination={false}
            showHeader={false}
          />
        </Form.Item>
      </Form>
      <Card title="同一事業者内における拠出見込額・受入見込額一覧表">
        <Table
          dataSource={listData}
          columns={listHeader}
          bordered
          pagination={false}
          summary={() => (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}>
                  合計
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={7}>
                  <InputNumber />
                </Table.Summary.Cell>
              </Table.Summary.Row>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}>
                  基準年度からの増減分における
                  受入（拠出）見込額と基準年度の受入（拠出）実績額
                  の差額から法定福利費等の事業主負担分を控除した額
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4} colSpan={2}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6} colSpan={2}>
                  <InputNumber />
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        ></Table>
        <Text type="secondary">
          {" "}
          ※1
          同一事業者が運営する全ての施設・事業所（特定教育・保育施設及び特定地域型保育事業所）について記入すること。
        </Text>
      </Card>
    </>
  );
};

export default Form3_3;
