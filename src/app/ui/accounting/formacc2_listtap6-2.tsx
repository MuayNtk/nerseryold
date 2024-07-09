import { Divider, Typography, Button, Select, Form, Row, Col } from "antd";
import React, { useState } from "react";
import CostCalculatorTable from "../costcalculatortable";
import SalaryCalculator from "../salarycalculator";
import { SubmitCancelButtons } from "../sub-canbtn";

const { Text } = Typography;
const { Option } = Select;

const FormTap2: React.FC = () => {
  const [tableCount, setTableCount] = useState(1);

  const handleMonthChange = (month: number) => {
    console.log("Selected Month:", month);
    // Handle month change logic here
  };

  const handleAddTable = () => {
    setTableCount((prevCount) => prevCount + 1);
  };

  const renderTables = () => {
    const tables = [];
    for (let i = 1; i <= tableCount; i++) {
      tables.push(
        <ol key={i}>
          <CostCalculatorTable />
        </ol>
      );
    }
    return tables;
  };

  return (
    <>
      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
        様式第１号　別添１－１（保育所、幼保連携型認定こども園用）
      </p>
      <Divider>交付申請額積算根拠</Divider>

      <Row justify="start">
        <Col xs={24} sm={12} lg={8} xl={6} xxl={4}>
          <Form.Item label="園番号">
            <b>いちざきみんなの家</b>
          </Form.Item>
        </Col>
      </Row>

      <div style={{ marginBottom: "30px" }}>
        {renderTables()}
        <Button
          type="primary"
          onClick={handleAddTable}
          style={{ fontSize: "14px", fontWeight: "bold", marginTop: "5px" }}
        >
          追加
        </Button>
        <div style={{ marginTop: "20px" }}>
          <Text type="warning">
            （注）　人件費等には、保育支援者又はスポット支援員の人件費にかかる金額(報酬、給料、職員手当、賃金等)を記載すること。
          </Text>
        </div>
        <div>
          <Text type="warning">
            （注）　（２）には（１）とは別の職員を記載すること。
          </Text>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <SalaryCalculator />
        </div>
      </div>

      <SubmitCancelButtons
        onSubmit={() => {
          // Handle form submission
        }}
        onCancel={() => {
          // Handle cancel action
        }}
      />
    </>
  );
};

export default FormTap2;
