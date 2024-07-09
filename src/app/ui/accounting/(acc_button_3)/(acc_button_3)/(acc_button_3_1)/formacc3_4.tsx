"use client";

import React, { ReactNode, useState } from "react";
import type { DatePickerProps, MenuProps, TableColumnsType } from "antd";
import {
  Button,
  Typography,
  Form,
  Input,
  Space,
  Dropdown,
  ConfigProvider,
  Card,
  InputNumber,
  Table,
} from "antd";

import { DownloadOutlined, DownOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";

import FormEra from "@/app/ui/common/formera";

const { Title } = Typography;

interface addBenefitDataType {
  key: React.Key;
  order: string;
  fullName: string;
  occupation: string;
  jobTitle: string;
  trainHourLastApp: string | ReactNode;
  trainHourLatest: string | ReactNode;
  hourDiff: string | ReactNode;
  trainHourLastAppM: string | ReactNode;
  trainHourLatestM: string | ReactNode;
  hourDiffM: string | ReactNode;
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

const { TextArea } = Input;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Reiwa",
  },
  {
    key: "2",
    label: "Heisei",
  },
  {
    key: "3",
    label: "Showa",
  },
];

const facilityType: MenuProps["items"] = [
  {
    key: 1,
    label: "幼保連携型認定こども園",
  },
  {
    key: 2,
    label: "幼稚園型認定こども園",
  },
  {
    key: 3,
    label: "保育所型認定こども園",
  },
  {
    key: 4,
    label: "地方裁量型認定こども園",
  },
];

const menuProps = {
  items,
};

const addBenefitHeader: TableColumnsType<addBenefitDataType> = [
  {
    key: "1",
    title: "No.	",
    dataIndex: "order",
    render: (order) => <>{order}</>,
  },
  {
    key: "2",
    title: "氏名",
    dataIndex: "fullName",
    render: (fullName) => <>{fullName}</>,
  },
  {
    key: "3",
    title: "職種",
    dataIndex: "occupation",
    render: (occupation) => <>{occupation}</>,
  },
  {
    key: "4",
    title: "役職名",
    dataIndex: "jobTitle",
    render: (jobTitle) => <>{jobTitle}</>,
  },
  {
    key: "5",
    title: "前回申請時までの研修終了時間数",
    children: [
      {
        key: "16",
        dataIndex: "trainHourLastApp",
        render: (trainHourLastApp) => <>{trainHourLastApp}</>,
      },
      {
        key: "6",
        title: "うちマネジメント",
        dataIndex: "trainHourLastAppM",
        render: (trainHourLastAppM) => <>{trainHourLastAppM}</>,
      },
    ],
  },

  {
    key: "7",
    title: "今回申請時までの研修終了時間数",
    children: [
      {
        key: "18",
        dataIndex: "trainHourLatest",
        render: (trainHourLatest) => <>{trainHourLatest}</>,
      },
      {
        key: "8",
        title: "うちマネジメント",
        dataIndex: "trainHourLatestM",
        render: (trainHourLatestM) => <>{trainHourLatestM}</>,
      },
    ],
  },
  {
    key: "9",
    title: "前回と今回の差（今回追加分）",
    children: [
      {
        key: "20",
        dataIndex: "hourDiff",
        render: (hourDiff) => <>{hourDiff}</>,
      },
      {
        key: "10",
        title: "うちマネジメント",
        dataIndex: "hourDiffM",
        render: (hourDiffM) => <>{hourDiffM}</>,
      },
    ],
  },

  {
    key: "11",
    title: "備考",
    dataIndex: "remark",
    render: (remark) => <>{remark}</>,
  },
];

const addBenefitData: addBenefitDataType[] = [];

for (let i = 1; i <= 5; i++) {
  addBenefitData.push({
    key: `${i}`,
    order: `string ${i}`,
    fullName: `John doe${i}`,
    occupation: `Occupation ${i}`,
    jobTitle: `Job Title ${i}`,
    trainHourLastApp: <InputNumber defaultValue={i} />,
    trainHourLatest: <InputNumber defaultValue={i} />,
    hourDiff: <InputNumber defaultValue={i} />,
    trainHourLastAppM: <InputNumber defaultValue={i} />,
    trainHourLatestM: <InputNumber defaultValue={i} />,
    hourDiffM: <InputNumber defaultValue={i} />,
    remark: `string ${i}`,
  });
}

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
    label: "人数A（中核・専門リーダー）",
    detail: "5",
  },
  {
    key: "2",
    label: "人数B（若手リーダー）",
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

const Form3_2: React.FC = () => {
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
  const styles = {
    border: "1px solid #dddddd",
    width: "80%",
    margin: "0 auto",
  };
  const td = {
    border: "1px solid #dddddd",
    height: "50px",
  };

  return (
    <>
      <ConfigProvider
        theme={{ components: { Table: { borderColor: "black" } } }}
      >
        <Form
          {...formItemLayout}
          style={{ maxWidth: 1000 }}
          labelWrap
          wrapperCol={{ flex: 1 }}
        >
          <Form.Item>
            <Card title="処遇改善等加算Ⅱ　研修受講歴一覧表（認定こども園）">
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

        <br />
        <div className="flex justify-end">
          <Button type="primary" size={size}>
            Submit
          </Button>
        </div>
      </ConfigProvider>
    </>
  );
};

export default Form3_2;
