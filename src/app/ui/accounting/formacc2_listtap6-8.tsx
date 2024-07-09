import React from "react";
import {
  Checkbox,
  Divider,
  Typography,
  Input,
  DatePicker,
  Row,
  Col,
} from "antd";
import PaymentForm from "../paymentform";
import { SubmitCancelButtons } from "../sub-canbtn";

const { Text } = Typography;

const onChange = (checkedValues: any, record: any) => {
  record.onChange("branch", checkedValues);
}
  
const FormTap8: React.FC = () => {
  return (
    <>
      <Divider> 請求書 </Divider>

      <Row justify="center">
        <Col xs={24} lg={12} xl={17}>
          <Input addonBefore="金額" style={{ width: "100%" }} />
          <Text type="warning" style={{ fontSize: "11px" }}>
            ※（金額の記載は、アラビア数字を用いその頭部に「￥」を記入してください。）
          </Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={24} lg={12} xl={17}>
          <span>件名: </span>
          <Input.TextArea
            aria-label="件名"
            placeholder="件名を記入してください。"
            rows={3}
            style={{ width: "100%" }}
          />
          <Text type="warning" style={{ fontSize: "11px" }}>
            ※ 希望する希望する支払方法を選択してください。 ☑
            にチェックを入れてください。
          </Text>
        </Col>
      </Row>

      <br />
      <Row justify="center">
        <Col xs={24} lg={12} xl={17}>
          <Checkbox onChange={(record) => onChange(1,record)}>口座振込を希望します。</Checkbox>
          <Text style={{ fontSize: "12px", color: "blue" }}>
            ※（本市に２つ以上口座を登録されている方等は、以下に振込を希望する口座をご記入ください。）
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ overflow: "auto" }}>
        <Col xs={24} lg={12} xl={18}>
          <PaymentForm />
          <Text type="warning" style={{ fontSize: "11px" }}>
            ※（記入する口座は請求者名義のものに限ります。また、口座名義等の記入にあたっては、必ず預金通帳を確認のうえ、記載のとおり正確に記入してください。）
          </Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={24} lg={12} xl={17}>
          <Checkbox onChange={(record) => onChange(1,record)}>現金受領を希望します</Checkbox>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={24} lg={12} xl={17}>
          <Checkbox onChange={(record) => onChange(1,record)}>
            隔地払（外国送金等）を希望します。
          </Checkbox>
        </Col>
      </Row>

      <Divider>上記の金額を請求します。</Divider>

      <Row justify="end">
        <Col xs={24} lg={12} xl={17}>
          <span>日付：</span>
          <DatePicker />
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={24} lg={12} xl={17}>
          <span>住所: </span>
          <Input.TextArea
            aria-label="住所"
            placeholder="住所を記入してください。"
            rows={3}
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={24} lg={12} xl={17}>
          <span>氏名: </span>
          <Input.TextArea
            aria-label="氏名"
            placeholder="氏名を記入してください。"
            rows={3}
            style={{ width: "100%" }}
          />
          <Text style={{ fontSize: "12px" }}>（あて先）福岡市（区）長</Text>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={24} lg={12} xl={17}>
          <div>
            <Text type="warning" style={{ fontSize: "12px" }}>
              ※ ご注意
            </Text>
            <br />
            <Text type="warning" style={{ fontSize: "12px" }}>
              １　金額と口座番号は、右づめで記入してください。
            </Text>
            <br />
            <Text type="warning" style={{ fontSize: "12px" }}>
              なお、ゆうちょ銀行への振込を希望される場合は、振込用の口座番号を記入してください。
            </Text>
            <br />
            <Text type="warning" style={{ fontSize: "12px" }}>
              ２　請求書の金額は、訂正できません。
            </Text>
          </div>
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col xs={24} lg={12} xl={17}>
          <div>
            <p>※ 法人等の場合</p>
            <p>担当者 部署・氏名 : 事務員 三宅</p>
          </div>
          <div>
            <p>連絡先電話番号: ０９２－４０６－８２１５</p>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <Row justify="end">
        <Col xs={24} lg={12} xl={17}>
          <SubmitCancelButtons
            onSubmit={function (): void {
              throw new Error("Function not implemented.");
            }}
            onCancel={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Col>
        <Row />
      </Row>
    </>
  );
};

export default FormTap8;
