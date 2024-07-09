import React, { useState } from "react";
import {
  Col,
  Divider,
  Input,
  Row,
  DatePicker,
  Form,
  Alert,
  Button,
} from "antd";
import SummaryTable from "@/app/ui/summarytable";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

const FormTap1: React.FC = () => {
  const [homeCapacity, setHomeCapacity] = useState(0);
  const [branchCapacity, setBranchCapacity] = useState(0);
  const [totalCapacity, setTotalCapacity] = useState(0);
  const [selectedDate, setSelectedDate] = useState<any>(null);

  const handleHomeCapacityChange = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value) || 0;
    setHomeCapacity(value);
    updateTotalCapacity(value, branchCapacity);
  };

  const handleBranchCapacityChange = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value) || 0;
    setBranchCapacity(value);
    updateTotalCapacity(homeCapacity, value);
  };

  const updateTotalCapacity = (home: number, branch: number) => {
    setTotalCapacity(home + branch);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    // Fetch data based on the selected date
    // Example: fetchData(date);
  };

  const handleFetchData = () => {
    // Fetch data based on the selected date
    // Example: fetchData(selectedDate);
  };

  return (
    <div>
      <br />
      <Row justify="end">
        <Col xs={24} sm={12} lg={12} xl={8}>
          <Input addonBefore="園番号" />
        </Col>
      </Row>
      <Divider>
        令和５年度　施設型給付費等にかかる加算（調整）適用申請書 【保育所】
      </Divider>
      <Row justify="end">
        <Col xs={24} sm={12} lg={12} xl={8}>
          <Form.Item label="火付">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={12} lg={10} xl={10}>
          <Input
            addonBefore={
              <span style={{ color: "#1890ff" }}>園番号市町村名</span>
            }
            style={{ marginBottom: "10px" }}
          />
          <Input
            addonBefore={<span style={{ color: "#1890ff" }}>施設所在地</span>}
            style={{ marginBottom: "10px" }}
          />
          <Input
            addonBefore={
              <span style={{ color: "#FFAF33" }}>施設・事業所名</span>
            }
            style={{ marginBottom: "10px" }}
          />
          <Input
            addonBefore={
              <span style={{ color: "#1890ff" }}>法人名・代表者職名</span>
            }
            style={{ marginBottom: "10px" }}
          />
          <Input
            addonBefore={<span style={{ color: "#1890ff" }}>担当者職名</span>}
            style={{ marginBottom: "10px" }}
          />
          <Input
            addonBefore={<span style={{ color: "#1890ff" }}>電話番号</span>}
            style={{ marginBottom: "10px" }}
          />
        </Col>
      </Row>
      <Divider>標記の件につきまして，下記のとおり申請します。</Divider>
      <br />
      <Row justify="start">
        <Col xs={24} sm={12} lg={12} xl={8}>
          <Form.Item label="【総括表】" style={{}}>
            <DatePicker style={{ width: "100%" }} onChange={handleDateChange} />
            <Button
              type="primary"
              onClick={handleFetchData}
              style={{ marginTop: "10px" }}
            >
              Download Data
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start">
        <Col xs={24} sm={12} lg={12} xl={12}>
          <Form.Item label="利用定員" style={{ gap: "10px" }}>
            <Input
              style={{
                width: "130px",
                display: "inline-block",
                marginRight: "10px",
              }}
              addonBefore="本園"
              suffix="名"
              value={homeCapacity}
              onChange={handleHomeCapacityChange}
            />
            <Input
              style={{
                width: "130px",
                display: "inline-block",
                marginRight: "10px",
              }}
              addonBefore="分園"
              suffix="名"
              value={branchCapacity}
              onChange={handleBranchCapacityChange}
            />
            <Input
              style={{
                width: "130px",
                display: "inline-block",
                marginRight: "10px",
              }}
              addonBefore="合計"
              suffix="名"
              value={totalCapacity}
              readOnly
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end">
        <Col xs={24} sm={16} lg={12} xl={8}>
          <Alert
            message="年度途中で変更がある場合のみ"
            type="info"
            showIcon
            style={{ width: "70%", marginLeft: "25%" }}
          />
        </Col>
      </Row>
      <br />
      <SummaryTable />
      <br />
      <Row justify="start">
        <Col xs={24} sm={12} lg={12} xl={16}>
          <p>【記入方法及び注意事項】</p>
          <br />
          <ol>
            <li>
              １　申請する加算（調整）項目の「申請の有無」欄をプルダウンで選択してください。
            </li>
            <li>
              ２　申請する加算（調整）項目の「適用年月」欄に適用を開始する年月をプルダウンで選択してください。
            </li>
            <li>
              ３　申請書提出時に、添付書類に不足がないことを確認し、「添付書類」欄の□に✓を記入してください。
            </li>
            <li>
              ４　添付書類の「職員名簿」及び「資格証の写し」は、指導監査課へ既に提出されたものを確認するのでもれや変更等がなけ
              　　れば提出不要です。
            </li>
            <li>
              ５　「減価償却費加算」及び「賃借料加算」の契約書の写しは、前年度からの継続申請（変更なし）の場合は、提出不要です。
            </li>
            <li>
              ６　「栄養管理加算」に該当する栄養士が、指導監査課へ提出した職員名簿に記載されている場合は、提出不要です。
            </li>
          </ol>
        </Col>
      </Row>
      <br />
      <SubmitCancelButtons
        onSubmit={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCancel={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default FormTap1;
