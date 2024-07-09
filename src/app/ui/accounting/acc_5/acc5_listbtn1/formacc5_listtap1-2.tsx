import React from "react";
import { Col, Divider, Input, Row, Table, ConfigProvider } from "antd";
import InformationInputTable from "@/app/ui/informationinputtable";
import InformationInputTable3 from "@/app/ui/informationinputtable3";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

const FormTap2: React.FC = () => {
  const dataSource1 = [
    { key: "人数A", value1: "（職員数の１／３）", value2: "4.67", value3: "5" },
    { key: "人数B", value1: "（職員数の１／５）", value2: "2.80", value3: "3" },
  ];

  const columns1 = [
    {
      dataIndex: "key",
      key: "key",
    },
    {
      dataIndex: "value1",
      key: "value1",
    },
    {
      dataIndex: "value2",
      key: "value2",
    },
    {
      dataIndex: "value3",
      key: "value3",
    },
  ];

  const dataSource2 = [
    { key: " ", value1: "48,900 円 × 人数A", value2: "244,500" },
    { key: " ", value1: "6,110 円 × 人数B", value2: "18,330" },
    { key: "合計", value1: "", value2: "262,830" },
    { key: "年間見込額", value1: "", value2: "3,153,000" },
  ];

  return (
    <ConfigProvider>
      <Row justify="end">
        <Col xs={24} sm={12} lg={12} xl={8}>
          <Input addonBefore="園番号" />
        </Col>
      </Row>
      <br />
      <Divider>処遇改善等加算Ⅱ　加算対象職員数計算表（保育所）</Divider>
      <br />
      <Row justify="center">
        <Col xs={24} sm={14} lg={14} xl={10}>
          <Input addonBefore="施設・事業所名" />
        </Col>
      </Row>
      <br />
      <br />
      <Row justify="start">
        <Col xs={24} sm={12} lg={6} xl={18}>
          <p style={{ fontWeight: "bold" }}>0．基礎情報</p>
          <InformationInputTable />
        </Col>
      </Row>
      <br />
      <br />
      <Row justify="start">
        <Col xs={24} sm={12} lg={6} xl={18}>
          <p style={{ fontWeight: "bold" }}>
            １．加算対象人数の基礎となる職員数（人）
          </p>
          <InformationInputTable3 />
        </Col>
      </Row>
      <br />
      <Row justify="start">
        <Col xs={24} sm={12} lg={6} xl={18}>
          <p style={{ fontWeight: "bold" }}>２．加算対象職員数（人）</p>
          <Table
            dataSource={dataSource1}
            columns={columns1}
            pagination={false}
            showHeader={false}
          />
        </Col>
      </Row>
      <br />
      <Row justify="start">
        <Col xs={24} sm={12} lg={6} xl={18}>
          <p style={{ fontWeight: "bold" }}>（参考）加算見込額（円）</p>
          <Table
            dataSource={dataSource2}
            columns={columns1}
            pagination={false}
            showHeader={false}
          />
        </Col>
      </Row>
      <br />
      <br />
      <SubmitCancelButtons
        onSubmit={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCancel={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </ConfigProvider>
  );
};
export default FormTap2;
