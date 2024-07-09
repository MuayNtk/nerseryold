import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";
import { Col, Form, Radio, Row } from "antd";
import React from "react";

const FormTap4: React.FC = () => {
  return (
    <div>
      <Row justify="start">
        <Col xs={24} sm={12} lg={16} xl={18}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                個票 ３
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
                  ５　賃借料加算 （１～４のすべてが「適」となる場合に加算適用）
                </p>
              </li>
              <li>
                <p>
                  ※　加算要件 該当する適・否にㇾ印をすること (１～４の要件
                  全てが「適」に該当する場合に加算)
                </p>
              </li>
              <li style={{ marginTop: "10px" }}>
                <p>
                  　１）保育所の用に供する建物が賃貸物件である。（事業所の一部が自己所有の場合は、賃貸による建物の延べ面積が事業所全体の延べ面積の50％以上であること。）
                </p>
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
                  <Radio value="適"> １　適 </Radio>
                  <Radio value="否"> ２　否 </Radio>
                </Radio.Group>
              </div>
              <li style={{ marginTop: "10px" }}>
                <p>
                  　２）　小規模保育事業の用に供する建物に対する賃借料が発生している。
                </p>
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
                  <Radio value="適"> １　適 </Radio>
                  <Radio value="否"> ２　否 </Radio>
                </Radio.Group>
              </div>
              <li style={{ marginTop: "10px" }}>
                <p>
                  　３）　賃借料の国庫補助を受けた施設については、当該補助に係る残額が生じていない。
                </p>
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
                  <Radio value="適"> １　適 </Radio>
                  <Radio value="否"> ２　否 </Radio>
                </Radio.Group>
              </div>
              <li style={{ marginTop: "10px" }}>
                <p>　４）　減価償却費加算の対象となっていない。</p>
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
                  <Radio value="適"> １　適 </Radio>
                  <Radio value="否"> ２　否 </Radio>
                </Radio.Group>
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
export default FormTap4;
