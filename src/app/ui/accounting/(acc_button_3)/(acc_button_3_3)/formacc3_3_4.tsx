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
  improveSalaryType: string;
  improveAmount1: ReactNode;
  improveAmount2: ReactNode;
}

type LayoutType = Parameters<typeof Form>[0]["layout"];

const columnData: columnHeaderData[] = [
  {
    key: "1",
    order: "No.1",
    jobTitle: "副主任保育士",
    occupation: "保育士",
    improveSalaryType: "基本給",
    improveAmount1: (
      <>
        <InputNumber
          controls={false}
          addonAfter="円"
          style={{ width: "100px" }}
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="月"
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="人"
        />{" "}
        = <InputNumber addonAfter="円" />
      </>
    ),
    improveAmount2: (
      <>
        <InputNumber
          controls={false}
          addonAfter="円"
          style={{ width: "100px" }}
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="月"
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="人"
        />{" "}
        = <InputNumber addonAfter="円" />
      </>
    ),
  },
  {
    key: "2",
    order: "No.2",
    jobTitle: "副主任保育士",
    occupation: "保育士",
    improveSalaryType: "手当",
    improveAmount1: (
      <>
        <InputNumber
          controls={false}
          addonAfter="円"
          style={{ width: "100px" }}
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="月"
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="人"
        />{" "}
        = <InputNumber addonAfter="円" />
      </>
    ),
    improveAmount2: (
      <>
        <InputNumber
          controls={false}
          addonAfter="円"
          style={{ width: "100px" }}
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="月"
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="人"
        />{" "}
        = <InputNumber addonAfter="円" />
      </>
    ),
  },
  {
    key: "3",
    order: "No.3",
    jobTitle: "指導教諭",
    occupation: "幼稚園教諭",
    improveSalaryType: "基本給",
    improveAmount1: (
      <>
        <InputNumber
          controls={false}
          addonAfter="円"
          style={{ width: "100px" }}
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="月"
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="人"
        />{" "}
        = <InputNumber addonAfter="円" />
      </>
    ),
    improveAmount2: (
      <>
        <InputNumber
          controls={false}
          addonAfter="円"
          style={{ width: "100px" }}
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="月"
        />{" "}
        x{" "}
        <InputNumber
          controls={false}
          style={{ width: "100px" }}
          addonAfter="人"
        />{" "}
        = <InputNumber addonAfter="円" />
      </>
    ),
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
    title: "改善した給与項目",
    dataIndex: "improveSalaryType",
    render: (improveSalaryType) => (
      <>
        <Text>{improveSalaryType}</Text>
      </>
    ),
  },
  {
    title: "処遇改善等加算Ⅱによる賃金改善額",
    dataIndex: "improveAmount1",
    render: (text: string) => <>{text}</>,
  },
  {
    title: "うち基準翌年度から加算当年度における賃金改善分",
    dataIndex: "improveAmount2",
    render: (text: string) => <>{text}</>,
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
      <Title level={3}>別紙様式７別添１</Title>
      <Form {...formItemLayout}>
        <Form.Item label="施設・事業所名">
          <Input />
        </Form.Item>
      </Form>
      <Card title="（４）副主任保育士等に係る賃金改善について（内訳）">
        <Text type="secondary">
          記載例に従って、下記の表に記載すること（職名・職種・改善する給与項目、算出方法が同じ場合には、まとめて記載すること）。
        </Text>
        <Table
          dataSource={columnData}
          columns={columnsTitle}
          bordered
          pagination={false}
          summary={() => (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}>
                  ①賃金改善見込額　計
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <InputNumber addonAfter="円" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}>
                  <InputNumber addonAfter="円" />
                </Table.Summary.Cell>
              </Table.Summary.Row>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}>
                  ②上記に対応する法定福利費等の事業主負担分の総額
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <InputNumber addonAfter="円" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}></Table.Summary.Cell>
              </Table.Summary.Row>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}>
                  ③①＋②
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <InputNumber addonAfter="円" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}></Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
      </Card>
      <Card title="（５）職務分野別リーダー等に係る賃金改善について（内訳）">
        <Text type="secondary">
          記載例に従って、下記の表に記載すること（職名・職種・改善する給与項目、算出方法が同じ場合には、まとめて記載すること）。
        </Text>
        <Table
          dataSource={columnData}
          columns={columnsTitle}
          bordered
          pagination={false}
          summary={() => (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}>
                  ①賃金改善見込額　計
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <InputNumber addonAfter="円" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}>
                  <InputNumber addonAfter="円" />
                </Table.Summary.Cell>
              </Table.Summary.Row>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}>
                  ②上記に対応する法定福利費等の事業主負担分の総額
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <InputNumber addonAfter="円" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}></Table.Summary.Cell>
              </Table.Summary.Row>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}>
                  ③①＋②
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <InputNumber addonAfter="円" />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}></Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
      </Card>
    </>
  );
};

export default Form3_3;
