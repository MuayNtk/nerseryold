import React from "react";
import { Col, Divider, Form, Radio, Row } from "antd";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

const FormTap3: React.FC = () => {
  return (
    <div>
      <Row justify="start">
        <Col xs={24} sm={12} lg={16} xl={18}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                個票 2
              </li>
              <br />
              <li>
                <p
                  style={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    fontSize: "16px",
                  }}
                >
                  ４　減価償却費加算
                  　（加算要件①と加算要件②の両方を満たした場合に加算適用）
                </p>
              </li>
              <li>
                <p>
                  ※　加算要件① 該当する適・否にㇾ印をすること (１～３の「全て」
                  が「適」となる必要あり）
                </p>
              </li>
              <li style={{ marginTop: "10px" }}>
                <p>
                  　１）保育所の用に供する建物が自己所有である。（事業所の一部が賃貸物件の場合は、自己所有の建物の延べ面積が事業所全体の延べ面積の50％以上であること。）
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
                  　２）　建物を整備・改修又は取得する際に、建設資金又は購入資金が発生している。
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
                <p> 　３）　賃借料加算の対象となっていない。</p>
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
              <br />
              <Divider />
              <li style={{ marginTop: "10px" }}>
                <p>
                  ※　加算要件② 該当する適・否にㇾ印をすること
                  (１・２の「いずれか」 が「適」となる必要あり）
                </p>
              </li>
              <li style={{ marginTop: "10px" }}>
                <p>
                  　１）建物の整備・改修に当たって、施設整備費又は改修費等の国庫補助金の交付を受けて建設・改修した建物について、整備後一定年数が経過したものであり、
                  次の①～③の「すべて」を満たす。
                </p>
              </li>
              <li style={{ marginLeft: "60px", marginTop: "10px" }}>
                ①　老朽化等を理由として改修等が必要であったと市町村が認める場合
              </li>
              <li style={{ marginLeft: "60px", marginTop: "10px" }}>
                ②　当該改修等に当たって、国庫補助の交付を受けていない
              </li>
              <li style={{ marginLeft: "60px", marginTop: "10px" }}>
                ③　１事業所当たりの改修等に要した費用を2,000で除して得た値が、建物全体の延面積に２を乗じて得た値を上回る場合で、　　かつ、改修等に要した費用が1,000万円以上である
              </li>
              <div>
                <Radio.Group
                  style={{
                    display: "flex",
                    gap: "100px",
                    marginLeft: "60px",
                    marginTop: "10px",
                  }}
                >
                  <Radio value="適"> １　適 </Radio>
                  <Radio value="否"> ２　否 </Radio>
                </Radio.Group>
              </div>
              <li style={{ marginTop: "10px" }}>
                <p>
                  　２）　建物の整備・改修に当たって、改修費等の国庫補助金の交付を受けていない。
                </p>
              </li>
              <div>
                <Radio.Group
                  style={{
                    display: "flex",
                    gap: "100px",
                    marginLeft: "60px",
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
export default FormTap3;
