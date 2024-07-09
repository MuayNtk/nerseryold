import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";
import { Col, Divider, Form, Radio, Row } from "antd";
import React from "react";

const FormTap5: React.FC = () => {
  return (
    <div>
      <Row justify="start">
        <Col xs={24} sm={12} lg={16} xl={18}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                個票 ５
              </li>
              <br />
              <li
                style={{
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  ９　施設長を設置していない場合
                </p>
              </li>
              <li>
                <p>
                  　※ 下記要件の「すべて」を満たさない場合、減額調整されます。
                </p>
              </li>
              <li style={{ marginTop: "10px" }}>
                <p>　施設長要件 該当する □ に ✔ 印をすること</p>
              </li>
              <li style={{ marginTop: "10px" }}>　１）従事経験等</li>
              <div>
                <Radio.Group style={{ marginTop: "10px", marginLeft: "50px" }}>
                  <div style={{ marginBottom: "10px" }}>
                    <Radio value="経験2年未満">
                      １.児童福祉事業等の従事経験2年未満 ※ 1
                    </Radio>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <Radio value="受講した者等">
                      ２.上記と同等以上の能力を有すると認められる者（公的機関等の実施する所長研修等を受講した者等）ではない
                    </Radio>
                  </div>
                </Radio.Group>
              </div>

              <li style={{ marginTop: "10px" }}>
                <p>　２）専従</p>
              </li>
              <div>
                <Radio.Group
                  style={{
                    display: "flex",
                    gap: "100px",
                    marginLeft: "50px",
                    marginTop: "10px",
                  }}
                >
                  <Radio value="専従"> １　非専従 ※ 2 </Radio>
                </Radio.Group>
              </div>
              <li style={{ marginTop: "10px" }}>
                <p>　３）委託費からの給与支出。</p>
              </li>
              <div>
                <Radio.Group
                  style={{
                    display: "flex",
                    gap: "100px",
                    marginLeft: "50px",
                    marginTop: "10px",
                  }}
                >
                  <Radio value="無"> １　無 </Radio>
                </Radio.Group>
              </div>
              <Divider />
              <div>
                <ol>
                  <li style={{ marginTop: "10px" }}>
                    ※ 1　児童福祉事業等に従事した者の例示
                  </li>
                  <li style={{ marginLeft: "10px" }}>
                    　児童福祉施設、幼稚園・小学校等における教諭、市町村長等の公的機関において児童福祉に関する事務を取り扱う部局、民生委員・
                  </li>
                  <li style={{ marginLeft: "25px" }}>
                    児童委員の他、教育・保育施設又は地域型保育事業に移行した施設・事業所における移行前の認可外保育施設等。
                  </li>
                  <li>
                    ※
                    2　2以上の施設若しくは他の事業と兼務し、所長として職務を行っていない者は非専従とみなす。
                  </li>
                </ol>
              </div>
            </ol>
          </Form.Item>
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
export default FormTap5;
