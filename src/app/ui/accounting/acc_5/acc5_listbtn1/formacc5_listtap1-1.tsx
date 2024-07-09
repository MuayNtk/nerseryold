import React, { useState } from "react";
import { Col, Divider, Row, Typography, Input, Descriptions } from "antd";
import CommissionFeesForm from "@/app/ui/commissionfeesform";
import TextArea from "antd/es/input/TextArea";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

const { Text } = Typography;

const FormTab1: React.FC = () => {
  const [selectionType] = useState<"checkbox">("checkbox");

  return (
    <div>
      <Divider>【保育所用】</Divider>
      <br />
      <Row justify="start">
        <Col xs={24} lg={12} xl={10}>
          <p>【提出先】</p>
          <p>
            〒810-8620　福岡市中央区天神1-8-1
            福岡市こども未来局運営支援課　施設給付係　村山・鐘ヶ江・藤野　宛
          </p>
        </Col>
      </Row>
      <br />
      <Row justify="start">
        <Col xs={24} lg={12} xl={10}>
          <p>令和５年度　委託費加算申請書（仮）※Ｒ5.4.1時点の加算内容</p>
        </Col>
      </Row>
      <Row justify="start">
        <Col xs={24} lg={12} xl={24}>
          <CommissionFeesForm />
        </Col>
      </Row>
      <br />
      <Row justify="space-between">
        <Col xs={24} lg={12} xl={10}>
          <p>【備考欄】</p>
          <TextArea rows={7} style={{ width: "100%" }} />
        </Col>
        <Col xs={24} lg={10} xl={12}>
          <p>【ご担当者】</p>
          <br />
          <Descriptions column={1}>
            <Descriptions.Item label="所属または職名（園長、事務等)">
              <Input />
            </Descriptions.Item>
            <Descriptions.Item label="お名前">
              <Input />
            </Descriptions.Item>
            <Descriptions.Item label="電話番号">
              <Input />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <br />
      <br />
      <SubmitCancelButtons onSubmit={() => {}} onCancel={() => {}} />
    </div>
  );
};

export default FormTab1;
