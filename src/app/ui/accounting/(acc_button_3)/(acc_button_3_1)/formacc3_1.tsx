"use client";

import React, { useState } from "react";
import type { DatePickerProps, MenuProps, TableColumnsType } from "antd";
import {
  Button,
  Typography,
  Form,
  Input,
  Space,
  Dropdown,
  Card,
  Table,
  ConfigProvider,
} from "antd";

import { DownloadOutlined, DownOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";

import FormEra from "@/app/ui/common/formera";

const { Text, Title } = Typography;

interface addBenefitDataType {
  key: React.Key;
  order: string;
  fullName: string;
  occupation: string;
  jobTitle: string;
  trainingCompleted: string;
  infantChildcare: string;
  earlyChildhoodEducate: string;
  disabilityChildcare: string;
  foodEducate: string;
  hygieneChildcare: string;
  parentSupport: string;
  manageTrain: string;
  childcareTrain: string;
  remark: string;
}

interface documentDetailType {
  key: React.Key;
  label: string;
  detail: string | React.ReactNode;
}

interface additionalType {
  key: React.Key;
  label: string;
  detail: string | React.ReactNode;
}

type LayoutType = Parameters<typeof Form>[0]["layout"];

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const facilityType: MenuProps["items"] = [
  {
    key: 1,
    label: "保育所",
  },
  {
    key: 2,
    label: "地域型保育事業",
  },
];

const addBenefitData: addBenefitDataType[] = [];

for (let i = 1; i <= 5; i++) {
  addBenefitData.push({
    key: `${i}`,
    order: `${i}`,
    fullName: `John doe${i}`,
    occupation: `Occupation - ${i}`,
    jobTitle: `Job Title - ${i}`,
    trainingCompleted: `string - ${i}`,
    infantChildcare: `string - ${i}`,
    earlyChildhoodEducate: `string - ${i}`,
    disabilityChildcare: `string - ${i}`,
    foodEducate: `string - ${i}`,
    hygieneChildcare: `string - ${i}`,
    parentSupport: `string - ${i}`,
    manageTrain: `string - ${i}`,
    childcareTrain: `string - ${i}`,
    remark: `ReMark${i}`,
  });
}

const addBenefitHeader: TableColumnsType<addBenefitDataType> = [
  {
    title: "No.",
    width: "5%",
    key: "1",
    dataIndex: "order",
    render: (order) => <>{order}</>,
  },
  {
    title: "氏名",
    key: "2",
    dataIndex: "fullName",
    render: (fullName) => <>{fullName}</>,
  },
  {
    title: "職種",
    key: "3",
    dataIndex: "occupation",
    render: (occupation) => <>{occupation}</>,
  },
  {
    title: "役職名",
    key: "4",
    dataIndex: "jobTitle",
    render: (jobTitle) => <>{jobTitle}</>,
  },

  {
    title: "修了した専門分野別研修数",
    key: "5",
    dataIndex: "trainingCompleted",
    render: (trainingCompleted) => <>{trainingCompleted}</>,
  },

  {
    title: "保育士等キャリアアップ研修又は免許状更新講習",
    key: "15",
    children: [
      {
        title: "（専門分野別研修）",
        key: "16",
        children: [
          {
            title: "①乳児保育",
            key: "6",
            dataIndex: "infantChildcare",
            render: (infantChildcare) => <>{infantChildcare}</>,
          },
          {
            title: "②幼児教育",
            key: "7",
            dataIndex: "earlyChildhoodEducate",
            render: (earlyChildhoodEducate) => <>{earlyChildhoodEducate}</>,
          },
          {
            title: "③障がい児保育",
            key: "8",
            dataIndex: "disabilityChildcare",
            render: (disabilityChildcare) => <>{disabilityChildcare}</>,
          },
          {
            title: "④食育・アレルギー対応",
            key: "9",
            dataIndex: "foodEducate",
            render: (foodEducate) => <>{foodEducate}</>,
          },
          {
            title: "⑤保育衛生・安全対策",
            key: "10",
            dataIndex: "hygieneChildcare",
            render: (hygieneChildcare) => <>{hygieneChildcare}</>,
          },
          {
            title: "⑥保護者支援・子育て支援",
            key: "11",
            dataIndex: "parentSupport",
            render: (parentSupport) => <>{parentSupport}</>,
          },
        ],
      },

      {
        title: "⑦マネジメント研修（副主任保育士は必須）※令和元年度まで有効",
        key: "12",
        dataIndex: "manageTrain",
        render: (manageTrain) => <>{manageTrain}</>,
      },
      {
        title: "⑧保育実践研修 ※令和元年度まで有効",
        key: "13",
        dataIndex: "childcareTrain",
        render: (childcareTrain) => <>{childcareTrain}</>,
      },
    ],
  },

  {
    title: "備考",
    key: "14",
    dataIndex: "remark",
    render: (remark) => <>{remark}</>,
  },
];

const documentDetailData: documentDetailType[] = [
  {
    key: "6",
    label: "生年月日",
    detail: <FormEra />,
  },
  {
    key: "1",
    label: "市町村名",
    detail: "福岡市",
  },
  {
    key: "2",
    label: "園番号",
    detail: "566",
  },
  {
    key: "3",
    label: "施設・事業所名",
    detail: "いちざきみんなの家",
  },
  {
    key: "4",
    label: "施設類型",
    detail: (
      <>
        <Dropdown menu={{ items: facilityType }}>
          <Button>
            <Space>
              保育所
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </>
    ),
  },
  {
    key: "5",
    label: "設置者名",
    detail: "理事長 渡部圭子",
  },
];

const documentDetailHeader: TableColumnsType<documentDetailType> = [
  {
    key: "1",
    dataIndex: "label",
    width: 150,
    render: (label) => <>{label}</>,
  },
  {
    key: "2",
    dataIndex: "detail",
    width: 550,
    render: (detail) => <>{detail}</>,
  },
];

const additionalData: additionalType[] = [
  {
    key: "1",
    label: "人数A（副主任保育士等）",
    detail: "5",
  },
  {
    key: "2",
    label: "人数B（職務分野別リーダー）",
    detail: "3",
  },
];

const additionalHeader: TableColumnsType<additionalType> = [
  {
    key: "1",
    dataIndex: "label",
    width: 250,
    render: (label) => <>{label}</>,
  },
  {
    key: "2",
    dataIndex: "detail",
    width: 450,
    render: (detail) => <>{detail}</>,
  },
];

const Form3_1: React.FC = () => {
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14, flex: 1 },
          labelWrap: true,
        }
      : null;

  const [size, setSize] = useState<SizeType>("large"); // default is 'middle'

  const { TextArea } = Input;

  return (
    <>
      
        <Form
          {...formItemLayout}
          style={{ maxWidth: 800 }}
          labelWrap
          wrapperCol={{ flex: 1 }}
        >
          <Form.Item>
            <Card title="処遇改善等加算Ⅱ　研修受講歴一覧表（保育所及び地域型保育事業所）">
              <Table
                dataSource={documentDetailData}
                columns={documentDetailHeader}
                pagination={false}
                bordered
                showHeader={false}
                // style={{ border: "1px solid #000000" }}
              />
              <Title level={5}>加算Ⅱ</Title>
              <Table
                dataSource={additionalData}
                columns={additionalHeader}
                pagination={false}
                bordered
                showHeader={false}
              />
            </Card>
          </Form.Item>
        </Form>
        <br />

        <Card title="人数A">
          <Table
            dataSource={addBenefitData}
            columns={addBenefitHeader}
            pagination={false}
            bordered
            scroll={{ x: "calc(1500px + 50%)", y: 480 }}
          ></Table>
        </Card>

        <br />
        <Card title="人数B">
          <Table
            dataSource={addBenefitData}
            columns={addBenefitHeader}
            pagination={false}
            bordered
            scroll={{ x: "calc(1500px + 50%)", y: 480 }}
          ></Table>
        </Card>

        <div className="flex justify-end">
          <Button type="primary" size={size}>
            Submit
          </Button>
        </div>
      
    </>
  );
};

export default Form3_1;
