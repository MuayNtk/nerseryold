import React from "react";
import { Divider, Form, Input } from "antd";
import SurveyForm from "../survayform";
import { SubmitCancelButtons } from "../sub-canbtn";

const FormTap4: React.FC = () => {
  return (
    <>
      <p>別添1－３</p>
      <div>
        <Divider>補助対象職員の勤務内容等確認予定表</Divider>
      </div>
      <div>
        <Form.Item
          style={{ width: "50%" }}
          label="氏名"
          name="氏名"
          rules={[{ required: true, message: "氏名を入力してください!" }]}
        >
          <Input />
        </Form.Item>
        <br />
        <br />
        <p>従事する業務，従事回数の目安を記載ください。</p>
        <br />
        <br />
      </div>
      <SurveyForm />
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
    </>
  );
};

export default FormTap4;
