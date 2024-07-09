import React from "react";
import { Divider, Typography } from "antd";
import UserSelector from "../userselector";
import StaffAssignForm from "../staffassignform";
import NurseryWorkerInputForm from "../nurseryworkerinputform";
import { SubmitCancelButtons } from "../sub-canbtn";

const FormTap3: React.FC = () => {
  return (
    <>
      <p>別添1－2</p>
      <div>
        <Divider>職員配置状況表</Divider>
      </div>
      <div style={{ marginLeft: "60%" }}>
        <UserSelector />
      </div>
      <br />
      <br />
      <div>
        <StaffAssignForm />
      </div>
      <Divider>保育士以外の数</Divider>
      <div>
        <NurseryWorkerInputForm />
      </div>
      <br />
      <div style={{ marginLeft: "20px" }}>
        <Typography.Text type="warning" style={{ textAlign: "left" }}>
          <p>
            （注）１　保育士以外の数については，保育支援者のみならず，調理員，事務員等についても全て記載すること。
          </p>
          <p>
            　　　２　常勤・非常勤関わらず記載すること。（産休・育休中等の職員は含めない）
          </p>
          <p>
            　　　３　補助対象職員を配置していることを証する書類（雇用契約書等）の写しを添付すること。
          </p>
        </Typography.Text>
      </div>
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

export default FormTap3;
