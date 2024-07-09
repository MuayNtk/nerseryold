import React, { useState } from "react";
import { Button, Divider, Form, Input, Typography, Col, Row } from "antd";
import SurveyForm from "../survayform";
import { SubmitCancelButtons } from "../sub-canbtn";

const { Text } = Typography;

const FormTap3: React.FC = () => {
  const [tableCount, setTableCount] = useState(1);
  const [userNames, setUserNames] = useState<string[]>([""]); // State to store user names

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handleSubmit = () => {
    console.log("Submit button clicked");
  };

  const handleAddTable = () => {
    setTableCount((prevCount) => prevCount + 1);
    setUserNames((prevNames) => [...prevNames, ""]); // Add an empty string for the new table
  };

  const handleUserNameChange = (value: string, index: number) => {
    setUserNames((prevNames) =>
      prevNames.map((name, i) => (i === index ? value : name))
    );
  };

  return (
    <div>
      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
        様式第１号　別添１－２（保育所、幼保連携型認定こども園のみ）
      </p>

      <Row justify="end">
        <Col xs={24} sm={12} md={12} lg={8} xl={6} xxl={4}>
          <div style={{ marginBottom: "20px" }}>
            <Form.Item label="園番号">
              <b>いちざきみんなの家</b>
            </Form.Item>
          </div>
        </Col>
      </Row>

      <Divider />

      {[...Array(tableCount)].map((_, index) => (
        <div key={index}>
          <div style={{ marginTop: "50px" }}>
            <label style={{ marginTop: "8px" }}>氏名：</label>
            <Input
              style={{ maxWidth: "400px", marginBottom: "16px" }}
              placeholder="氏名"
              onChange={(e) => handleUserNameChange(e.target.value, 0)} // Use 0 for the first table
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <p>従事する業務、従事回数の目安を記載ください。</p>
          </div>

          <SurveyForm key={index} />
        </div>
      ))}

      <Row justify="start" style={{ marginTop: "10px" }}>
        <Col>
          <Text type="warning">
            （注）１　その他、保育士の負担軽減に資する業務を選んだ場合，（　　　　　　　　）内に従事する業務を記載すること
          </Text>
        </Col>
      </Row>

      <Row justify="start" style={{ marginBottom: "20px", marginTop: "10px" }}>
        <Col xs={24} sm={12} md={12} lg={8} xl={6} xxl={4}>
          <Button
            onClick={handleAddTable}
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#2980B9 ",
              marginBottom: "20px",
              justifyContent: "start",
            }}
          >
            追加
          </Button>
        </Col>
      </Row>
      <div style={{ marginRight: "20px" }}>
        <SubmitCancelButtons onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default FormTap3;
