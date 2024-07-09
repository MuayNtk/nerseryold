"use client";

import React, { ReactNode, useState } from "react";
import type { DatePickerProps, MenuProps, TableColumnsType } from "antd";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Space,
  Dropdown,
  Table,
  Card,
  InputNumber,
} from "antd";

import { DownloadOutlined, DownOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";

import FormEra from "@/app/ui/common/formera";

interface addBenefitDataType {
  key: React.Key;
  order: string;
  yearAttend: string;
  implementAgence: string;
  trainingField: string | ReactNode;
  hourNumber: string;
  hourFromLeftColumn: string;
  endDate: string;
  previousForm: string;
}

interface documentDetailType {
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

const trainingField: MenuProps["items"] = [
  {
    key: 1,
    label: "①乳児保育",
  },
  {
    key: 2,
    label: "②幼児教育",
  },
  {
    key: 3,
    label: "③障害児保育",
  },
  {
    key: 4,
    label: "④食育・アレルギー対応",
  },
  {
    key: 5,
    label: "⑤保健衛生・安全対策",
  },
  {
    key: 6,
    label: "⑥保護者支援・子育て支援",
  },
  {
    key: 7,
    label: "⑦マネジメント",
  },
  {
    key: 8,
    label: "⑧保育実践",
  },
];

const menuProps = {
  items,
  facilityType,
  trainingField,
};

const addBenefitData: addBenefitDataType[] = [];
for (let i = 0; i <= 5; i++) {
  addBenefitData.push({
    key: `${i}`,
    order: "string",
    yearAttend: "string",
    implementAgence: "string",
    trainingField: (
      <>
        <Dropdown menu={{ items: trainingField }}>
          <Button>
            <Space>
              研修分野
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </>
    ),
    hourNumber: "string",
    hourFromLeftColumn: "string",
    endDate: "string",
    previousForm: "string",
  });
}

const addBenefitData2: addBenefitDataType[] = [];
for (let i = 0; i <= 5; i++) {
  addBenefitData2.push({
    key: `${i}`,
    order: "string",
    yearAttend: "string",
    implementAgence: "string",
    trainingField: "string",
    hourNumber: "string",
    hourFromLeftColumn: "string",
    endDate: "string",
    previousForm: "string",
  });
}

const addBenefitHeader: TableColumnsType<addBenefitDataType> = [
  {
    key: "1",
    title: "No.",
    dataIndex: "order",
    render: (order) => <>{order}</>,
  },
  {
    key: "2",
    title: "受講年度",
    dataIndex: "yearAttend",
    render: (yearAttend) => <>{yearAttend}</>,
  },
  {
    key: "3",
    title: "実施機関",
    dataIndex: "implementAgence",
    render: (implementAgence) => <>{implementAgence}</>,
  },
  {
    key: "4",
    title: "研修分野",
    dataIndex: "trainingField",
    render: (trainingField) => <>{trainingField}</>,
  },
  {
    key: "5",
    title: "時間数",
    dataIndex: "hourNumber",
    render: (hourNumber) => <>{hourNumber}</>,
  },
  {
    key: "6",
    title: "左記のうちマネジメント分野時間数",
    dataIndex: "hourFromLeftColumn",
    render: (hourFromLeftColumn) => <>{hourFromLeftColumn}</>,
  },
  {
    key: "7",
    title: "終了年月日",
    dataIndex: "endDate",
    render: (endDate) => <>{endDate}</>,
  },
  {
    key: "8",
    title: "前回申請時に提出済",
    dataIndex: "previousForm",
    render: (previousForm) => <>{previousForm}</>,
  },
];

const addBenefitHeader2: TableColumnsType<addBenefitDataType> = [
  {
    key: "1",
    title: "No.",
    dataIndex: "order",
    render: (order) => <>{order}</>,
  },
  {
    key: "2",
    title: "受講年度",
    dataIndex: "yearAttend",
    render: (yearAttend) => <>{yearAttend}</>,
  },
  {
    key: "3",
    title: "実施機関",
    dataIndex: "implementAgence",
    render: (implementAgence) => <>{implementAgence}</>,
  },
  {
    key: "4",
    title: "研修名または内容",
    dataIndex: "trainingField",
    render: (trainingField) => <>{trainingField}</>,
  },
  {
    key: "5",
    title: "時間数",
    dataIndex: "hourNumber",
    render: (hourNumber) => <>{hourNumber}</>,
  },
  {
    key: "6",
    title: "左記のうちマネジメント分野時間数",
    dataIndex: "hourFromLeftColumn",
    render: (hourFromLeftColumn) => <>{hourFromLeftColumn}</>,
  },
  {
    key: "7",
    title: "終了年月日",
    dataIndex: "endDate",
    render: (endDate) => <>{endDate}</>,
  },
  {
    key: "8",
    title: "前回申請時に提出済",
    dataIndex: "previousForm",
    render: (previousForm) => <>{previousForm}</>,
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
        <Dropdown menu={{ items: facilityType }} disabled>
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
  {
    key: "7",
    label: "合計受講時間",
    detail: "0",
  },
  {
    key: "7",
    label: "（うちマネジメント分野）",
    detail: "0",
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
            <Card title="処遇改善等加算Ⅱ　職員別研修受講歴一覧表（認定こども園）">
              <Table
                dataSource={documentDetailData}
                columns={documentDetailHeader}
                pagination={false}
                bordered
                showHeader={false}
                // style={{ border: "1px solid #000000" }}
              />
            </Card>
          </Form.Item>
      </Form>
      <br />

      <Card title="（１）保育士等キャリアアップ研修（令和元年度以降に受講した「保育実践」分野を除く。）">
        <Table
          dataSource={addBenefitData}
          columns={addBenefitHeader}
          pagination={false}
          bordered
          scroll={{ x: "calc(1000px + 50%)", y: 480 }}
          summary={() => (
            <>
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={5}>
                    小計
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={5}>
                    <InputNumber />
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={6}>
                    <InputNumber />
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            </>
          )}
        ></Table>
      </Card>

      <br />
      <Card title="（２）県または市町村（教育委員会を含む）が実施する研修（上記（１）を除く）">
        <Table
          dataSource={addBenefitData2}
          columns={addBenefitHeader2}
          pagination={false}
          bordered
          scroll={{ x: "calc(1000px + 50%)", y: 480 }}
          summary={() => (
            <>
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={5}>
                    小計
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={5}>
                    <InputNumber />
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={6}>
                    <InputNumber />
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            </>
          )}
        ></Table>
      </Card>

      <br />

      <Card title="（３）県が研修の実施主体として認定をした団体が実施する研修">
        <Table
          dataSource={addBenefitData2}
          columns={addBenefitHeader2}
          pagination={false}
          bordered
          scroll={{ x: "calc(1000px + 50%)", y: 480 }}
          summary={() => (
            <>
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={5}>
                    小計
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={5}>
                    <InputNumber />
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={6}>
                    <InputNumber />
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            </>
          )}
        ></Table>
      </Card>

      <br />

      <Card title="（４）大学等（大学、指定教育養成機関、大学共同利用機関など）が実施する研修">
        <Table
          dataSource={addBenefitData2}
          columns={addBenefitHeader2}
          pagination={false}
          bordered
          scroll={{ x: "calc(1000px + 50%)", y: 480 }}
          summary={() => (
            <>
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={5}>
                    小計
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={5}>
                    <InputNumber />
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={6}>
                    <InputNumber />
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            </>
          )}
        ></Table>
      </Card>

      <br />

      <Card title="（５）免許状更新講習（幼稚園教諭免許状に係るもの）及び免許法認定講習（いわゆる上進講習）">
        <Table
          dataSource={addBenefitData2}
          columns={addBenefitHeader2}
          pagination={false}
          bordered
          scroll={{ x: "calc(1000px + 50%)", y: 480 }}
          summary={() => (
            <>
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={5}>
                    小計
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={5}>
                    <InputNumber />
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={6}>
                    <InputNumber />
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            </>
          )}
        ></Table>
      </Card>

      <br />

      <Card title="（６）園内研修　※中核・専門リーダー：15時間以内　　若手リーダー：4時間以内">
        <Table
          dataSource={addBenefitData2}
          columns={addBenefitHeader2}
          pagination={false}
          bordered
          scroll={{ x: "calc(1000px + 50%)", y: 480 }}
          summary={() => (
            <>
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={5}>
                    小計
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={5}>
                    <InputNumber />
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={6}>
                    <InputNumber />
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            </>
          )}
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

export default Form3_3;
