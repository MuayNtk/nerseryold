import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";
import { Col, Form, Radio, Row } from "antd";
import Paragraph from "antd/es/skeleton/Paragraph";
import React from "react";

const FormTap15: React.FC = () => {
  return (
    <div>
      <Row justify="center">
        <Col xs={22} sm={18} md={18} lg={20} xl={22}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                個票 12
              </li>
              <li>1７　第三者評価受審加算（３月加算）</li>
              <li style={{ marginTop: "15px" }}>
                ※　第三者評価の受審は5年に一度程度を想定しており、加算適用年度から5年度間は再度の加算適用はできません。
              </li>
              <div>
                <p style={{ marginTop: "20px", marginBottom: "10px" }}>
                  加算要件 該当する適・否に ✔ 印をすること
                  (１・２の要件全てが「適」の場合に加算)
                </p>
                <li>
                  1　「福祉サービス第三者評価基準ガイドライン」等に沿って、第三者評価を適切に実施することが可能であると市町村が認める第三者機関による評価（行政が委託等により民間機関に行わせるものを含む。）を受審。
                </li>
                <div>
                  <Radio.Group
                    style={{
                      display: "flex",
                      gap: "100px",
                      marginLeft: "50px",
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <Radio value="適"> １　適 </Radio>
                    <Radio value="否"> ２　否 </Radio>
                  </Radio.Group>
                </div>
                <li>
                  2　第三者機関による評価の受審結果をホームページ等により広く公表。
                </li>
                <div>
                  <Radio.Group
                    style={{
                      display: "flex",
                      gap: "100px",
                      marginLeft: "50px",
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <Radio value="適"> １　適 </Radio>
                    <Radio value="否"> ２　否 </Radio>
                  </Radio.Group>
                </div>
              </div>
              <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <p style={{ fontSize: "13px", color: "#F5B041 " }}>
                  ※　評価機関との間の契約書等により、当年度に第三者評価の受審や結果の公表（評価機関からの評価結果の提示が翌年度にな
                  るため、結果の公表が翌年度になる場合を含む。）が行われることが確認できる場合は本加算の対象とします。
                  その場合は、事後に受審や結果の公表が行われていることが確認できる資料等を市に提出してください。
                </p>
              </div>
            </ol>
          </Form.Item>
        </Col>
      </Row>
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
export default FormTap15;
