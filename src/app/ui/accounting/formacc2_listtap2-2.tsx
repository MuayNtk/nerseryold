import React from "react";
import { Divider, Typography } from "antd";
import UserSelector from "../userselector";
import CostCalculatorTable from "../costcalculatortable";
import SalaryCalculator from "../salarycalculator";
import { SubmitCancelButtons } from "../sub-canbtn";

const FormTap2: React.FC = () => {
  return (
    <>
      <p>別添1－1</p>
      <Divider>交付申請額積算根拠</Divider>
      <div style={{ float: "right" }}>
        <UserSelector />
      </div>
      <br />
      <br />
      <br />
      <div>
        <p style={{ fontSize: "20px", justifyItems: "center" }}>
          月における保育支援者
        </p>
      </div>
      <CostCalculatorTable />
      <br />
      <div>
        <Typography.Text type="warning">
          （注）　人件費には，保育支援者の人件費にかかる金額(報酬，給料，職員手当，賃金等)を記載すること。
        </Typography.Text>
      </div>
      <br />
      <SalaryCalculator />
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

export default FormTap2;
