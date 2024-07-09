import AgeAverageCalculator from "@/app/ui/ageaveragecalculatortabel";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";
import { Col, Divider, Input, Row, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";

const { Text } = Typography;
const FormTap3: React.FC = () => {
  return (
    <>
      <Divider orientation="left">
        処遇改善等加算Ⅱ　加算対象職員数計算表（保育所）
      </Divider>

      <Row justify="end">
        <Col xs={24} sm={12} lg={12} xl={8}>
          <Input addonBefore="園番号" />
        </Col>
      </Row>
      <br />
      <Divider>平均年齢別児童数計算表（認定こども園、保育所等）</Divider>
      <br />
      <Row justify="center">
        <Col xs={24} sm={14} lg={14} xl={10}>
          <Input addonBefore="施設・事業所名" />
        </Col>
      </Row>
      <br />
      <br />
      <Row justify="start">
        <Col xs={24} sm={12} lg={6} xl={18}>
          <p>黄緑セルは入力項目、黄色（オレンジ）セルは自動計算。</p>
          <br />
          <p>児童数は、月初日利用児童数を入力すること。</p>
        </Col>
      </Row>
      <br />
      <br />
      <AgeAverageCalculator data={[]} />
      <br />
      <br />
      <Row justify="start">
        <Col xs={24} sm={12} lg={6} xl={18}>
          <p>（２）前年実績による令和５年度見込み年齢別平均児童数</p>
        </Col>
      </Row>
      <AgeAverageCalculator data={[]} />
      <Row justify="start">
        <Col xs={24} sm={12} lg={6} xl={18}>
          <Text mark>4月、５月、6月は実績</Text>
          <Text mark>見込み（４月実績×（１）で算出された伸び率）</Text>
          <p>※各月の初日人数は各施設の面積基準を下回らないこと</p>
        </Col>
      </Row>
      <br />
      <br />
      <Row justify="start">
        <Col xs={24} sm={12} lg={6} xl={18}>
          <p>（３）前年度実績による見込みによりがたい場合の年齢別平均児童数</p>
        </Col>
      </Row>
      <AgeAverageCalculator data={[]} />
      <Row justify="start">
        <Col xs={24} sm={12} lg={6} xl={18}>
          <Text mark>4月、５月、6月は実績</Text>
          <Text mark>その後、その後、７月から3月までは見込み</Text>
          <p>※各月の初日人数は各施設の面積基準を下回らないこと</p>
        </Col>
      </Row>
      <br />
      <br />
      <Row justify="start">
        <Col xs={24} sm={12} lg={6} xl={18}>
          <Text type="danger">
            前年度実績による見込みによりがたい場合、その理由　（３）の算出結果を使用する場合は入力必須
          </Text>
          <TextArea rows={6} style={{ width: "100%" }} />
        </Col>
      </Row>
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
