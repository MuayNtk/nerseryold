import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";
import { Col, Form, Radio, Row } from "antd";
import Paragraph from "antd/es/skeleton/Paragraph";
import React from "react";

const FormTap16: React.FC = () => {
  return (
    <div>
      <Row justify="center">
        <Col xs={22} sm={18} md={18} lg={20} xl={22}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                個票１３
              </li>
              <li>１９　小学校接続加算（３月加算）</li>
              <li style={{ marginTop: "15px" }}>
                加算要件 該当する適・否に ✔ 印をすること
              </li>
              <li style={{ color: "#C0392B" }}>
                (１～３の要件全てに該当する場合に加算)
              </li>
              <div>
                <p style={{ marginTop: "20px", marginBottom: "10px" }}>
                  加算要件 該当する適・否に印をすること
                  (１・２の要件全てが「適」の場合に加算)
                </p>
                <li>
                  1　小学校との連携・接続に関する業務分掌を明確にしている。。
                </li>
                <li style={{ marginLeft: "10px" }}>
                  　例：小学校との連絡調整を担当する先生が配置されている
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
                  2　授業・行事、研究会・研修等の小学校との子ども及び教職員の交流活動を実施している。
                </li>
                <li style={{ marginLeft: "10px" }}>
                  　例：小学校との共同行事を行っている。
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
                  3　小学校との接続を見通した教育課程を編成していること。なお、継続的な協議会の開催等により具体的な編成に向けた研究に着手していると認められる場合を含む。
                </li>
                <li style={{ marginLeft: "10px" }}>
                  　例：保幼小連絡会を開催している、小学校のカリキュラムを考慮した教育を行っているなど。
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
export default FormTap16;
