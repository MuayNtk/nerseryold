"use client";

import React, { useState } from "react";
import type { DatePickerProps, MenuProps, TableColumnsType } from "antd";
import {
  Button,
  Form,
  Input,
  Table,
  Dropdown,
  Tag,
  Card,
  InputNumber,
  Typography,
} from "antd";

import { DownloadOutlined, DownOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";

type LayoutType = Parameters<typeof Form>[0]["layout"];
const { Text, Title } = Typography;

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
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "6px",
          fontWeight: "bolder",
        }}
      >
        別紙様式７別添２
      </Tag>
      <Form {...formItemLayout}>
        <Form.Item label="施設・事業所名">
          <Input placeholder="" />
        </Form.Item>
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
      </Form>
    </>
  );
};

export default Form3_3;
