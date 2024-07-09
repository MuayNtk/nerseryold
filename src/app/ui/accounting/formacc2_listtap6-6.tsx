"use client";

import React from "react";
import { Divider, Form, Typography } from "antd";
import CorporateSelector from "@/app/ui/corporateselector";
import AddStaffTable from "../addstafftable";
import { SubmitCancelButtons } from "../sub-canbtn";

const { Text } = Typography;

const FormTap6: React.FC = () => {
  return (
    <>
      <div style={{ float: "right", marginTop: "20px" }}>
        <Form.Item label="園番号">
          <b>いちざきみんなの家</b>
        </Form.Item>
      </div>
      <Divider>役員名簿</Divider>
      <div>
        <AddStaffTable />
        <div style={{ textAlign: "left" }}>
          <Text type="warning">※ 役員全員を記載してください。</Text>
          <br />
          <Text type="warning">
            ※この役員名簿により収集した個人情報については、この補助金からの暴力団排除のため福岡県警察への照会確認に使用します。
          </Text>
        </div>
      </div>
      <br />
      <SubmitCancelButtons
        onSubmit={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCancel={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default FormTap6;
