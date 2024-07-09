import {
  Card,
  Form,
  Input,
  Table,
  Dropdown,
  Space,
  InputNumber,
  Typography,
  Button,
} from "antd";
import type { TableColumnsType, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { ReactNode, useState } from "react";

const { Text, Title } = Typography;
const { TextArea } = Input;
type LayoutType = Parameters<typeof Form>[0]["layout"];

interface monthType {
  key: React.Key | string;
  detail1: string;
  detail2: string;
  detail3: string;
  m4: number;
  m5: number;
  m6: number;
  m7: number;
  m8: number;
  m9: number;
  m10: number;
  m11: number;
  m12: number;
  m1: number;
  m2: number;
  m3: number;
  sum: number;
}

const monthData: monthType[] = [
  {
    key: "m41",
    detail1: "４歳以上児",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 1,
    m5: 1,
    m6: 1,
    m7: 1,
    m8: 1,
    m9: 1,
    m10: 1,
    m11: 1,
    m12: 1,
    m1: 1,
    m2: 1,
    m3: 1,
    sum: 1,
  },
  {
    key: "m42",
    detail1: "",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 2,
    m5: 2,
    m6: 2,
    m7: 2,
    m8: 2,
    m9: 2,
    m10: 2,
    m11: 2,
    m12: 2,
    m1: 2,
    m2: 2,
    m3: 2,
    sum: 2,
  },
  {
    key: "m43",
    detail1: "３歳児",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 3,
    m5: 3,
    m6: 3,
    m7: 3,
    m8: 3,
    m9: 3,
    m10: 3,
    m11: 3,
    m12: 3,
    m1: 3,
    m2: 3,
    m3: 3,
    sum: 3,
  },
  {
    key: "m44",
    detail1: "",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 4,
    m5: 4,
    m6: 4,
    m7: 4,
    m8: 4,
    m9: 4,
    m10: 4,
    m11: 4,
    m12: 4,
    m1: 4,
    m2: 4,
    m3: 4,
    sum: 4,
  },
  {
    key: "m45",
    detail1: "うち満３歳児（認定こども園のみ）０歳児",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 5,
    m5: 5,
    m6: 5,
    m7: 5,
    m8: 5,
    m9: 5,
    m10: 5,
    m11: 5,
    m12: 5,
    m1: 5,
    m2: 5,
    m3: 5,
    sum: 5,
  },
  {
    key: "m46",
    detail1: "",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 6,
    m5: 6,
    m6: 6,
    m7: 6,
    m8: 6,
    m9: 6,
    m10: 6,
    m11: 6,
    m12: 6,
    m1: 6,
    m2: 6,
    m3: 6,
    sum: 6,
  },
  {
    key: "m47",
    detail1: "１，２歳児",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 7,
    m5: 7,
    m6: 7,
    m7: 7,
    m8: 7,
    m9: 7,
    m10: 7,
    m11: 7,
    m12: 7,
    m1: 7,
    m2: 7,
    m3: 7,
    sum: 7,
  },
  {
    key: "m48",
    detail1: "",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 8,
    m5: 8,
    m6: 8,
    m7: 8,
    m8: 8,
    m9: 8,
    m10: 8,
    m11: 8,
    m12: 8,
    m1: 8,
    m2: 8,
    m3: 8,
    sum: 8,
  },
  {
    key: "m49",
    detail1: "０歳児",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 9,
    m5: 9,
    m6: 9,
    m7: 9,
    m8: 9,
    m9: 9,
    m10: 9,
    m11: 9,
    m12: 9,
    m1: 9,
    m2: 9,
    m3: 9,
    sum: 9,
  },
  {
    key: "m50",
    detail1: "",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 10,
    m5: 10,
    m6: 10,
    m7: 10,
    m8: 10,
    m9: 10,
    m10: 10,
    m11: 10,
    m12: 10,
    m1: 10,
    m2: 10,
    m3: 10,
    sum: 11,
  },
];

const monthData2: monthType[] = [
  {
    key: "m41",
    detail1: "４歳以上児",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 1,
    m5: 1,
    m6: 1,
    m7: 1,
    m8: 1,
    m9: 1,
    m10: 1,
    m11: 1,
    m12: 1,
    m1: 1,
    m2: 1,
    m3: 1,
    sum: 1,
  },

  {
    key: "m43",
    detail1: "３歳児",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 3,
    m5: 3,
    m6: 3,
    m7: 3,
    m8: 3,
    m9: 3,
    m10: 3,
    m11: 3,
    m12: 3,
    m1: 3,
    m2: 3,
    m3: 3,
    sum: 3,
  },

  {
    key: "m45",
    detail1: "うち満３歳児（認定こども園のみ）０歳児",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 5,
    m5: 5,
    m6: 5,
    m7: 5,
    m8: 5,
    m9: 5,
    m10: 5,
    m11: 5,
    m12: 5,
    m1: 5,
    m2: 5,
    m3: 5,
    sum: 5,
  },

  {
    key: "m47",
    detail1: "１，２歳児",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 7,
    m5: 7,
    m6: 7,
    m7: 7,
    m8: 7,
    m9: 7,
    m10: 7,
    m11: 7,
    m12: 7,
    m1: 7,
    m2: 7,
    m3: 7,
    sum: 7,
  },

  {
    key: "m49",
    detail1: "０歳児",
    detail2: "児童数",
    detail3: "伸び率",
    m4: 9,
    m5: 9,
    m6: 9,
    m7: 9,
    m8: 9,
    m9: 9,
    m10: 9,
    m11: 9,
    m12: 9,
    m1: 9,
    m2: 9,
    m3: 9,
    sum: 9,
  },
];

const columnMonth: TableColumnsType<monthType> = [
  {
    key: "1",
    title: "令和４年度",
    dataIndex: "detail1",
    render: (text: any, record: monthType, index: number) => {
      if ((index + 1) % 2 === 1) {
        return {
          children: text,
        };
      }
      return {
        children: null,
      };
    },
  },
  {
    key: "16",
    title: "児童数 / 伸び率",
    render: (text, record, index) => {
      return {
        children: (index + 1) % 2 === 1 ? record.detail2 : record.detail3,
      };
    },
  },
  {
    key: "14",
    title: "実績",
    children: [
      {
        key: "2",
        title: "m4",
        dataIndex: "m4",
        render: (text, m4, dataIndex) =>
          (dataIndex + 1) % 2 === 1 ? (
            <InputNumber defaultValue={text} />
          ) : null,
      },
      {
        key: "3",
        title: "m5",
        dataIndex: "m5",
        render: (m5) => <InputNumber defaultValue={m5} />,
      },
      {
        key: "4",
        title: "m6",
        dataIndex: "m6",
        render: (m6) => <InputNumber defaultValue={m6} />,
      },
      {
        key: "5",
        title: "m7",
        dataIndex: "m7",
        render: (m7) => <InputNumber defaultValue={m7} />,
      },
      {
        key: "6",
        title: "m8",
        dataIndex: "m8",
        render: (m8) => <InputNumber defaultValue={m8} />,
      },
      {
        key: "7",
        title: "m9",
        dataIndex: "m9",
        render: (m9) => <InputNumber defaultValue={m9} />,
      },
      {
        key: "8",
        title: "m10",
        dataIndex: "m10",
        render: (m10) => <InputNumber defaultValue={m10} />,
      },
      {
        key: "9",
        title: "m11",
        dataIndex: "m11",
        render: (m11) => <InputNumber defaultValue={m11} />,
      },
      {
        key: "10",
        title: "m12",
        dataIndex: "m12",
        render: (m12) => <InputNumber defaultValue={m12} />,
      },
      {
        key: "11",
        title: "m1",
        dataIndex: "m1",
        render: (m1) => <InputNumber defaultValue={m1} />,
      },
      {
        key: "12",
        title: "m2",
        dataIndex: "m2",
        render: (m2) => <InputNumber defaultValue={m2} />,
      },
      {
        key: "13",
        title: "m3",
        dataIndex: "m3",
        render: (m3) => <InputNumber defaultValue={m3} />,
      },
    ],
  },

  {
    key: "15",
    title: "平均 児童数",
    dataIndex: "sum",
    render: (text, sum, dataIndex) =>
      (dataIndex + 1) % 2 === 1 ? (
        <InputNumber defaultValue={text} disabled />
      ) : null,
  },
];

const columnMonth2: TableColumnsType<monthType> = [
  {
    key: "1",
    title: "令和5年度",
    dataIndex: "detail1",
    render: (text: any, record: monthType, index: number) => {
      return {
        children: text,
      };
    },
  },
  {
    key: "16",
    title: "児童数 / 伸び率",
    render: (text, record, index) => {
      return {
        children: record.detail2,
      };
    },
  },
  {
    key: "14",
    title: "実績",
    children: [
      {
        key: "2",
        title: "m4",
        dataIndex: "m4",
        render: (text, m4, dataIndex) => <InputNumber defaultValue={text} />,
      },
      {
        key: "3",
        title: "m5",
        dataIndex: "m5",
        render: (m5) => <InputNumber defaultValue={m5} />,
      },
      {
        key: "4",
        title: "m6",
        dataIndex: "m6",
        render: (m6) => <InputNumber defaultValue={m6} />,
      },
      {
        key: "5",
        title: "m7",
        dataIndex: "m7",
        render: (m7) => <InputNumber defaultValue={m7} />,
      },
      {
        key: "6",
        title: "m8",
        dataIndex: "m8",
        render: (m8) => <InputNumber defaultValue={m8} />,
      },
    ],
  },
  {
    key: "17",
    title: "見込み",
    children: [
      {
        key: "7",
        title: "m9",
        dataIndex: "m9",
        render: (m9) => <InputNumber defaultValue={m9} />,
      },
      {
        key: "8",
        title: "m10",
        dataIndex: "m10",
        render: (m10) => <InputNumber defaultValue={m10} />,
      },
      {
        key: "9",
        title: "m11",
        dataIndex: "m11",
        render: (m11) => <InputNumber defaultValue={m11} />,
      },
      {
        key: "10",
        title: "m12",
        dataIndex: "m12",
        render: (m12) => <InputNumber defaultValue={m12} />,
      },
      {
        key: "11",
        title: "m1",
        dataIndex: "m1",
        render: (m1) => <InputNumber defaultValue={m1} />,
      },
      {
        key: "12",
        title: "m2",
        dataIndex: "m2",
        render: (m2) => <InputNumber defaultValue={m2} />,
      },
      {
        key: "13",
        title: "m3",
        dataIndex: "m3",
        render: (m3) => <InputNumber defaultValue={m3} />,
      },
    ],
  },

  {
    key: "15",
    title: "平均 児童数",
    dataIndex: "sum",
    render: (sum) => <Text>{sum}</Text>,
  },
];

const Formacc3_5_3: React.FC = () => {
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
      <Form style={{ display: "block" }}>
        <Form.Item
          label="園番号"
          style={{ width: 200, marginLeft: "auto", marginRight: "0" }}
        >
          <Input value={566} />
        </Form.Item>
        <Form.Item>
          <Title level={5}>
            平均年齢別児童数計算表（認定こども園、保育所等）
          </Title>
        </Form.Item>
        <Form.Item label="施設・事業所名" {...formItemLayout}>
          <Input
            value={"いちざきみんなの家"}
            style={{ marginLeft: "10px", width: "500px" }}
          />
        </Form.Item>
      </Form>
      <Text>黄緑セルは入力項目、黄色（オレンジ）セルは自動計算。</Text> <br />
      <Text>児童数は、月初日利用児童数を入力すること。</Text> <br />
      <Text>
        小規模保育所、事業所内保育所については、１，２歳児、０歳児欄に記入すること。
      </Text>{" "}
      <br />
      <Card title="（１）令和４年度実績">
        <Table
          dataSource={monthData}
          columns={columnMonth}
          bordered
          pagination={false}
          scroll={{ x: "calc(1500px + 50%)", y: 480 }}
          summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>合計</Table.Summary.Cell>
                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3} colSpan={11}></Table.Summary.Cell>
                <Table.Summary.Cell index={15}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        ></Table>
      </Card>
      <Card title="（２）前年実績による令和５年度見込み年齢別平均児童数">
        <Table
          dataSource={monthData2}
          columns={columnMonth2}
          bordered
          pagination={false}
          scroll={{ x: "calc(1500px + 50%)", y: 480 }}
          summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>合計</Table.Summary.Cell>
                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={7} colSpan={7}></Table.Summary.Cell>
                <Table.Summary.Cell index={15}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        ></Table>
        <Text type="secondary">
          ※各月の初日人数は各施設の面積基準を下回らないこと
        </Text>
      </Card>
      <Card title="（３）前年度実績による見込みによりがたい場合の年齢別平均児童数">
        <Table
          dataSource={monthData2}
          columns={columnMonth2}
          bordered
          pagination={false}
          scroll={{ x: "calc(1500px + 50%)", y: 480 }}
          summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>合計</Table.Summary.Cell>
                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={7}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={8}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={9}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={10}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={11}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={12}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={13}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={14}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={15}>
                  <InputNumber addonAfter="" />
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        ></Table>
        <Text type="secondary">
          ※各月の初日人数は各施設の面積基準を下回らないこと
        </Text>
      </Card>
      <Form {...formItemLayout} labelCol={{ span: 7 }}>
        <Form.Item label="前年度実績による見込みによりがたい場合、その理由　（３）の算出結果を使用する場合は入力必須">
          <TextArea
            rows={3}
            defaultValue={
              "例：近隣の保育園が、10月に閉園予定であり、その児童数の○○人を受け入れる予定であるため。"
            }
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default Formacc3_5_3;
