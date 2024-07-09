import React from "react";
import { Divider, Form, Input, DatePicker } from "antd";
import { SubmitCancelButtons } from "../sub-canbtn";
import WorkTimeCalculatorTable from "../worktimecalculatortable";

const FormTap1: React.FC = () => {
  const handleDateInput = (date: any, dateString: string) => {
    console.log("Selected Date: ", date);
    console.log("Formatted Date String: ", dateString);
  };

  return (
    <>
      <p>様式第１号（交付申請書） </p>
      <div style={{ float: "right" }}>
        <Form.Item label="園番号">
          <Input placeholder="園番号" style={{ width: "300px" }} />
        </Form.Item>
      </div>
      <Divider>保育体制強化事業補助金交付申請書</Divider>
      <div style={{ float: "right" }}>
        <Form.Item label="日付">
          {/* Use DatePicker component for date input */}
          <DatePicker
            format="令和 YY 年 MM 月 DD 日"
            style={{ width: "300px" }}
            onChange={(date: any, dateString: string | string[]) =>
              handleDateInput(
                date,
                Array.isArray(dateString) ? dateString[0] : dateString
              )
            }
          />
        </Form.Item>
      </div>
      
      <br />
      <br />
      <div>
        <Form.Item label="あて先:">
          <Input placeholder="あて先" style={{ width: "235px" }} />
        </Form.Item>
      </div>
      <br />
      <div style={{ textAlign: "left", marginLeft: "15%" }}>
        <div style={{ width: "400px" }}>
          <Form.Item label="法人名:">
            <Input placeholder="法 人 名" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="法人所在地:">
            <Input placeholder="法 人 所 在 地" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="代表者職・氏名:">
            <Input placeholder="代 表 者 職・氏 名" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="保育施設名:">
            <Input placeholder="保 育 施 設 名" style={{ width: "100%" }} />
          </Form.Item>
        </div>
      </div>
      <br />
      <div style={{ textAlign: "left", marginLeft: "10%" }}>
        <p>
          ※
          令和３年度保育体制強化事業について，補助金の交付を下記のとおり申請します。
        </p>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "left", marginLeft: "40%" }}>
        <span style={{ fontSize: "16px" }}>記</span>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "left", marginLeft: "20%" }}>
        <Form.Item label="交付申請額:">
          <Input
            placeholder="交 付 申 請 額"
            style={{ width: "400px" }}
            suffix="円"
          />
        </Form.Item>
      </div>
      <br />
      <br />
      <div>
        <p>
          ※　別添１－１，１－２，１－３及び雇用契約書等の写しを添付すること。
        </p>
      </div>
      <br />
      <WorkTimeCalculatorTable />
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

export default FormTap1;
