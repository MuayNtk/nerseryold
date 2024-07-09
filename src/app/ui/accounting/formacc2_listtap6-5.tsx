import React from "react";
import { Divider, Form } from "antd";
import FundCalculator from "../fundcaculator";
import { SubmitCancelButtons } from "../sub-canbtn";

const FormTap5: React.FC = () => {
  return (
    <>
      <div style={{ float: "right", marginTop: "20px" }}>
        <Form.Item label="園番号">
          <b>いちざきみんなの家</b>
        </Form.Item>
      </div>
      <Divider>資金計画書</Divider>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ float: "right", marginTop: "40px" }}>
          <p>（単位：円）</p>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      <div>
        <FundCalculator />
      </div>
      <div style={{ marginTop: "50px" }}>
        <SubmitCancelButtons
          onSubmit={() => {
            // handle submit function
          }}
          onCancel={() => {
            // handle cancel function
          }}
        />
      </div>
    </>
  );
};

export default FormTap5;
