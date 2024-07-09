"use client";

import React, { ReactNode, useState } from "react";
import type { CheckboxProps, MenuProps, TableColumnsType } from "antd";
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
  Checkbox,
} from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { DownOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const { Title, Text } = Typography;

interface columnHeaderData {
  key: React.Key | string;
  order: string;
  occupation: ReactNode;
  jobType: ReactNode;
  staffName: string;
  partTime: ReactNode;
  fullTime: ReactNode;
  corpOfficer: boolean;
  amount: string | ReactNode;
  basicSal: string | ReactNode;
  others: string | ReactNode;
  extraCon: string;
  remark: string;
}

type LayoutType = Parameters<typeof Form>[0]["layout"];

const occupationList: MenuProps["items"] = [
  {
    key: 1,
    label: "施設長",
  },
  {
    key: 2,
    label: "副園長",
  },
  {
    key: 3,
    label: "教頭",
  },
  {
    key: 4,
    label: "主幹教諭",
  },
  {
    key: 5,
    label: "主任保育士",
  },
  {
    key: 6,
    label: "教諭",
  },
  {
    key: 7,
    label: "保育士",
  },
  {
    key: 8,
    label: "看護師",
  },
  {
    key: 9,
    label: "准看護師",
  },
  {
    key: 10,
    label: "調理士",
  },
  {
    key: 11,
    label: "調理士（栄養士）",
  },
  {
    key: 12,
    label: "栄養士",
  },
  {
    key: 13,
    label: "事務員",
  },
  {
    key: 14,
    label: "用務員",
  },
  {
    key: 15,
    label: "パート保育士",
  },
  {
    key: 16,
    label: "パート調理士",
  },
  {
    key: 17,
    label: "その他",
  },
];

const jobType: MenuProps["items"] = [
  {
    key: 1,
    label: "常勤",
  },
  {
    key: 2,
    label: "非常勤",
  },
];

const menuProps = {
  occupationList,
  jobType,
};

const columnData: columnHeaderData[] = [
  {
    key: "1",
    order: "1",
    occupation: (
      <Dropdown menu={{ items: occupationList }}>
        <Space>
          職種 <DownOutlined />
        </Space>
      </Dropdown>
    ),
    jobType: (
      <Dropdown menu={{ items: jobType }}>
        <Space>
          職種 <DownOutlined />
        </Space>
      </Dropdown>
    ),
    staffName: "○○　○○",
    partTime: <InputNumber />,
    fullTime: <InputNumber />,
    corpOfficer: true,
    amount: <InputNumber addonAfter="円" />,
    basicSal: <InputNumber addonAfter="円" />,
    others: <InputNumber addonAfter="円" />,
    extraCon: "string",
    remark: "備考",
  },
  {
    key: "2",
    order: "2",
    occupation: (
      <Dropdown menu={{ items: occupationList }}>
        <Space>
          職種 <DownOutlined />
        </Space>
      </Dropdown>
    ),
    jobType: (
      <Dropdown menu={{ items: jobType }}>
        <Space>
          職種 <DownOutlined />
        </Space>
      </Dropdown>
    ),
    staffName: "○○　○○",
    partTime: <InputNumber />,
    fullTime: <InputNumber />,
    corpOfficer: false,
    amount: <InputNumber addonAfter="円" />,
    basicSal: <InputNumber addonAfter="円" />,
    others: <InputNumber addonAfter="円" />,
    extraCon: "string",
    remark: "備考",
  },
  {
    key: "3",
    order: "3",
    occupation: (
      <Dropdown menu={{ items: occupationList }}>
        <Space>
          職種 <DownOutlined />
        </Space>
      </Dropdown>
    ),
    jobType: (
      <Dropdown menu={{ items: jobType }}>
        <Space>
          職種 <DownOutlined />
        </Space>
      </Dropdown>
    ),
    staffName: "○○　○○",
    partTime: <InputNumber />,
    fullTime: <InputNumber />,
    corpOfficer: false,
    amount: <InputNumber addonAfter="円" />,
    basicSal: <InputNumber addonAfter="円" />,
    others: <InputNumber addonAfter="円" />,
    extraCon: "string",
    remark: "備考",
  },
];


const checkBoxChanged: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const columnsTitle: TableColumnsType<columnHeaderData> = [
  {
    title: "No.",
    width: "5%",
    dataIndex: "order",
    render: (order) => (
      <>
        <Text>{order}</Text>
      </>
    ),
  },
  {
    title: "職員名",
    width: "5%",
    dataIndex: "staffName",
    render: (staffName) => (
      <>
        <Text>{staffName}</Text>
      </>
    ),
  },
  {
    title: "職種 ※1",
    width: "5%",
    dataIndex: "jobType",
    render: (jobType) => <>{jobType}</>,
  },
  {
    title: "職種",
    width: "5%",
    dataIndex: "occupation",
    render: (occupation) => (
      <>
        <Text>{occupation}</Text>
      </>
    ),
  },
  {
    title: "常勤換算値 ※3",
    width: "10%",
    children: [
      {
        title: "常勤",
        width: "5%",
        dataIndex: "fullTime",
        render: (fullTime) => <Text>{fullTime}</Text>,
      },
      {
        title: "非常勤",
        width: "5%",
        dataIndex: "partTime",
        render: (partTime) => (
          <>
            <Text>{partTime}</Text>
          </>
        ),
      },
    ],
  },
  {
    title: "法人役員との兼務",
    align:"center",
    width: "3.5%",
    dataIndex: "corpOfficer",
    render: (corpOfficer) => (
      <>
        <Checkbox
          defaultChecked={corpOfficer}
          onChange={(event) => checkBoxChanged(event)}
        />
      </>
    ),
  },
  {
    title: "加算Ⅲによる賃金改善見込額　※4",
    width: "5%",
    dataIndex: "amount",
    render: (amount) => (
      <>
        <Text>{amount}</Text>
      </>
    ),
  },
  {
    title: "基本給及び決まって毎月支払う手当",
    width: "5%",
    dataIndex: "basicSal",
    render: (basicSal) => (
      <>
        <Text>{basicSal}</Text>
      </>
    ),
  },
  {
    title: "その他",
    width: "5%",
    dataIndex: "others",
    render: (others) => (
      <>
        <Text>{others}</Text>
      </>
    ),
  },
  {
    title: "賃金改善に伴い増加する法定福利費等の事業主負担分　※5",
    width: "5%",
    dataIndex: "extraCon",
    render: (extraCon) => (
      <>
        <Input disabled />
      </>
    ),
  },
  {
    title: "備考　※6",
    width: "5%",
    dataIndex: "remark",
    render: (remark) => (
      <>
        <TextArea defaultValue={remark} />
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
      </Form>
      <Card>
        <Table
          dataSource={columnData}
          columns={columnsTitle}
          bordered
          pagination={false}
          scroll={{ x: "calc(1000px + 50%)", y: 240 }}
          
        />
        <Text type="warning">【記入における留意事項】</Text> <br />
        <Text type="secondary">
        ※1  施設・事業所に現に勤務している職員全員(職種を問わず、非常勤を含む。)を記入すること。
        </Text>{" "}
        <br />
        <Text type="secondary">
        ※2  「常勤」とは、原則として施設で定めた勤務時間（所定労働時間）の全てを勤務する者、又は１日６時間以上かつ20日以上勤務している者をいい、「非常勤」とは常勤以外の者をいう。
        </Text>{" "}
        <br />
        <Text type="secondary">
        ※3  常勤換算値について、常勤の者については1.0とし、非常勤の者については、以下の算式によって得た値とする。
          〔算式〕
          　常勤以外の職員の１か月の勤務時間数の合計÷各施設・事業所の就業規則等で定めた常勤職員の１か月の勤務時間数　＝　常勤換算値
        </Text>{" "}
        <br />
        <Text type="secondary">
        ※4  賃金改善に伴い増加する法定福利費等の事業主負担分を除く。
        </Text>{" "}
        <br />
        <Text type="secondary">
        ※5  賃金改善に伴い増加する法定福利費等の事業主負担分については以下の算式により算定することを標準とする。
          〔算式〕
          加算前年度における法定福利費等の事業主負担分の総額÷加算前年度における賃金の総額×賃金改善額
        </Text>{" "}
        <br />
        <Text type="secondary">
        ※6  備考欄には、賃金改善実施期間中の採用や退職がある場合にはその旨、また、賃金改善額が他の職員と比較して高額(低額、賃金改善を実施しない場合も含む)である場合についてはその理由を記入すること。
        </Text>{" "}
        <br />
        <Text type="secondary">
        ※7  「加算Ⅲによる賃金改善見込額」に占める「基本給及び決まって毎月支払う手当による金額」の割合が３分の２以上であることが必要。法定福利費等の事業主負担額を除く。
        </Text>{" "}
        <br />
      </Card>
    </>
  );
};

export default Form3_3;
