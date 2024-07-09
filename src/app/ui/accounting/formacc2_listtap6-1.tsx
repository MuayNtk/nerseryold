import React from "react";
import {
  Divider,
  Form,
  Input,
  DatePicker,
  Typography,
  Row,
  Col,
  Select,
} from "antd";
import { SubmitCancelButtons } from "../sub-canbtn";
import UserSelector from "../userselector";
import PaymentSelector from "../paymentselector";
import IncomeTable from "../incomecalculator";
import form from "antd/es/form";
import FormEra from "../common/formera";

const { Paragraph, Text } = Typography;

const FormTap1: React.FC = () => {
  const handleDateInput = (date: any, dateString: string) => {
    console.log("Selected Date: ", date);
    console.log("Formatted Date String: ", dateString);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <p style={{ fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>
        様式第１号
      </p>

      <Form.Item label="園番号">
        <b>566</b>
      </Form.Item>

      <Divider>保育体制強化事業補助金交付申請書</Divider>

      <Row gutter={16}>
        <Col><label>日時:</label></Col>
        <Col> <FormEra/></Col>

        <Col xs={24} md={12} lg={6}>
          <Form.Item label="あて先">
            <b>福岡市 長</b>
          </Form.Item>
        </Col>
      </Row>

      <div style={{ marginBottom: "20px" }}>
        <Form.Item label="法人名">
          <b>社会福祉法人つばさ福祉会</b>
        </Form.Item>
        <Form.Item label="法人所在地">
          <b>〒 881-0032 宮崎県西都市白馬町３番地</b>
        </Form.Item>
        <Form.Item label="代表者職・氏名">
          <b>理事長 渡部 圭子</b>
        </Form.Item>
        <Form.Item label="施設名">
          <b>いちざきみんなの家</b>
        </Form.Item>
      </div>

      <Paragraph>
        令和５年度保育体制強化事業について、補助金の交付を下記のとおり申請します。
        <br />
        福岡市保育体制強化事業補助金の交付要件である「本市の市税を滞納していないこと」の確認に当たり、
        税務担当課に「保育体制強化事業補助金交付申請書」が開示され、
        市税等の課税状況及び納付状況についての照会がなされることに同意します。
        <br />
        福岡市保育体制強化事業補助金の交付要件である「福岡市暴力団排除条例
        （平成22年福岡市条例第30号）第２条第２号に規定する暴力団員、
        法人でその役員のうちに同号に該当する者のあるもの又は同条例第６条に規定する暴力団若しくは暴力団員と密接な関係を有する者でないこと」
        の確認に当たり、福岡県警察に照会がなされることに同意します。
      </Paragraph>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>記</span>
      </div>

      <Row justify="start">
        <Col xs={24} md={12} lg={12}>
          <Form.Item label="交付申請額">
            <Input placeholder="0" suffix="円" />
          </Form.Item>
        </Col>
      </Row>

      <div style={{ textAlign: "left", marginBottom: "20px" }}>
        <Text type="warning">※ 収入・支出の部の計は一致</Text>
      </div>

      <IncomeTable />

      <div style={{ textAlign: "left", marginTop: "20px" }}>
        <Text type="warning">
          ※雇用契約書、派遣契約書の写しを添付すること。
        </Text>
        <br />
        <Text type="warning">
          ※ 別添１－１、１－２及び雇用契約書等の写しを添付すること。
        </Text>
      </div>

      <SubmitCancelButtons
        onSubmit={() => {
          // handle submit function
        }}
        onCancel={() => {
          // handle cancel function
        }}
      />
    </div>
  );
};

export default FormTap1;
