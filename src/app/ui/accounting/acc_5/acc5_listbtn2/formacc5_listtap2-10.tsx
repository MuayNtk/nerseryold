import React from "react";
import { Dayjs } from "dayjs";
import { Col, DatePicker, Divider, Form, Input, Radio, Row } from "antd";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

const radioChoices = () => {
  return (
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
  );
};

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

const FormTap8: React.FC = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };

  function handleDateChange(date: Dayjs | null, dateString: string): void {
    console.log(date); // date: Dayjs | null
  }

  return (
    <div>
      <Row justify="start">
        <Col xs={24} sm={12} lg={18} xl={24}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                <p>個票 8</p>
              </li>
              <br />
              <li>
                <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                  １2　療育支援加算
                </p>
              </li>
              <div style={{ whiteSpace: "nowrap", marginBottom: "10px" }}>
                <li
                  style={{
                    display: "inline-block",
                    marginTop: "15px",
                    marginRight: "20px",
                  }}
                >
                  <p
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                      marginTop: "15px",
                    }}
                  >
                    ■ 加配保育士数
                  </p>
                  <Input.Search
                    placeholder=""
                    onSearch={onSearch}
                    style={{
                      width: 250,
                      marginTop: "10px",
                      display: "inline-block",
                    }}
                  />
                </li>
              </div>

              <li>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "17px",
                    marginTop: "15px",
                  }}
                >
                  （いずれも「適」の場合に加算適用）
                </p>
              </li>
              <div>
                <p
                  style={{
                    marginTop: "15px",
                    marginLeft: "20px",
                  }}
                >
                  11 主任保育士専任加算(個票７)の対象施設
                </p>
                {radioChoices()}
              </div>
              <div>
                <p
                  style={{
                    marginTop: "15px",
                    marginLeft: "20px",
                  }}
                >
                  主任保育士補助者の配置
                </p>
                {radioChoices()}
              </div>
              <li style={{ marginLeft: "10px" }}>
                <p style={{ fontWeight: "bold" }}>受入障がい児 ※ 数</p>
              </li>
            </ol>
            <p
              style={{
                marginBottom: "10px",
                marginRight: "10px",
                marginTop: "15px",
              }}
            >
              Ａ：特別児童扶養手当支給対象児童
            </p>
            {selectMonth(handleDateChange)}
            <Divider />
            <p
              style={{
                marginBottom: "10px",
                marginRight: "10px",
                marginTop: "15px",
              }}
            >
              Ｂ：それ以外の対象子ども
            </p>
            {selectMonth(handleDateChange)}
            <Divider />
            <p style={{ fontSize: "12px" }}>
              ※　さぽ～と保育（福岡市特別支援保育事業）に係る支援区分１～支援区分４の決定を受けた児童を指します。
            </p>
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

export default FormTap8;
