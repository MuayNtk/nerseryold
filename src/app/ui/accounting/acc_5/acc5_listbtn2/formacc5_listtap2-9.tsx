import React from "react";
import {
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Radio,
  Row,
} from "antd";
import { Dayjs } from "dayjs";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

const selectMonth = (
  handleDateChange: (date: Dayjs | null, dateString: string) => void
) => {
  return (
    <div style={{ whiteSpace: "nowrap", marginBottom: "10px" }}>
      <li style={{ display: "inline-block", marginRight: "10px" }}>
        <DatePicker
          picker="month"
          style={{
            width: "150px",
            marginRight: "10px",
            display: "inline-block",
          }}
          onChange={
            handleDateChange as (
              date: Dayjs | null,
              dateString: string | string[]
            ) => void
          }
        />
        <p style={{ marginRight: "10px", display: "inline-block" }}>
          月　初日現在利用児童数
        </p>
        <Input style={{ width: "60px", display: "inline-block" }} />
        <p style={{ display: "inline-block", marginLeft: "8px" }}>名</p>
      </li>
    </div>
  );
};

const FormTap7: React.FC = () => {
  function handleDateChange(date: Dayjs | null, dateString: string): void {
    console.log(date); // date: Dayjs | null
  }

  return (
    <div>
      <Row justify="start">
        <Col xs={24} sm={12} lg={18} xl={20}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                <p>個票 7</p>
              </li>
              <br />
              <li>
                <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                  １１主任保育士専任加算　
                </p>
              </li>
              <li>
                <p>
                  （いずれも「適」で、下記事業のうち「２つ以上」を実施している場合に加算適用）
                </p>
                <div>
                  <p style={{ marginTop: "15px", marginLeft: "20px" }}>
                    主任保育士の配置
                  </p>
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
                </div>
                <div>
                  <p
                    style={{
                      marginTop: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    代替保育士の配置（常勤）
                  </p>
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

                <div style={{ marginTop: "10px" }}>
                  <Form.Item label="代替保育士氏名">
                    <Input
                      placeholder="代替保育士氏名を入力してください"
                      style={{ width: "300px" }}
                    />
                  </Form.Item>
                </div>
              </li>

              <li style={{ marginTop: "10px", marginRight: "10px" }}>
                <p>※　施設長要件 該当する □ に ✔ 印をすること</p>
              </li>

              <div>
                <div>
                  <Checkbox />
                  <p
                    style={{
                      display: "inline-block",
                      marginBottom: "10px",
                      marginRight: "10px",
                      marginTop: "15px",
                    }}
                  >
                    　 1　延長保育事業
                  </p>
                </div>
                {selectMonth(handleDateChange)}
              </div>

              <Divider />

              <div>
                <div>
                  <Checkbox />
                  <p
                    style={{
                      display: "inline-block",
                      marginBottom: "10px",
                      marginRight: "10px",
                      marginTop: "15px",
                    }}
                  >
                    　 2　一時預かり事業（一般型）
                  </p>
                </div>
                {selectMonth(handleDateChange)}
              </div>

              <Divider />

              <div>
                <div>
                  <Checkbox />
                  <p
                    style={{
                      display: "inline-block",
                      marginBottom: "10px",
                      marginRight: "10px",
                      marginTop: "15px",
                    }}
                  >
                    　 3　病児保育事業
                    （子ども・子育て支援交付金に係る要件に適合するもの及びこれと同等の要件を満たして自主事業として実施しているもの。）
                  </p>
                </div>
              </div>

              <Divider />

              <div>
                <div>
                  <Checkbox />
                  <p
                    style={{
                      display: "inline-block",
                      marginBottom: "10px",
                      marginRight: "10px",
                      marginTop: "15px",
                    }}
                  >
                    　 4　乳児が３人以上利用している施設
                    （月の初日において乳児が３人以上利用している月から当該要件を満たしているものとする。）
                  </p>
                </div>
                {selectMonth(handleDateChange)}
              </div>

              <Divider />

              <div>
                <div>
                  <Checkbox />
                  <p
                    style={{
                      display: "inline-block",
                      marginBottom: "10px",
                      marginRight: "10px",
                      marginTop: "15px",
                    }}
                  >
                    　 5　障がい児（軽度障がい児を含む。）
                  </p>

                  <p
                    style={{
                      display: "inline-block",
                      marginBottom: "10px",
                      marginRight: "10px",
                    }}
                  >
                    ※ 1
                    が１人以上利用している施設（月の初日において障がい児が１人以上利用している月から当該要件を満たしているものとする。）
                  </p>
                </div>
                {selectMonth(handleDateChange)}
              </div>

              <Divider />

              <li>
                <p style={{ fontSize: "12px", color: "#33A5FF" }}>
                  ※
                  1　さぽ～と保育（福岡市特別支援保育事業）に係る支援区分１～支援区分４の決定を受けた児童を指します。
                </p>
              </li>
              <li>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "17px",
                    marginTop: "15px",
                  }}
                >
                  １３　事務職員雇上費加算
                </p>
                <p>
                  （いずれかが「適」で、上記事業のうち「１つ以上」を実施している場合に加算適用）
                </p>
              </li>

              <div>
                <p
                  style={{
                    marginTop: "15px",
                    marginLeft: "20px",
                  }}
                >
                  事務職員の配置
                </p>
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

              <div>
                <p
                  style={{
                    marginTop: "15px",
                    marginLeft: "20px",
                  }}
                >
                  施設長等が兼務している（業務委託を含む。）
                </p>
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

export default FormTap7;
