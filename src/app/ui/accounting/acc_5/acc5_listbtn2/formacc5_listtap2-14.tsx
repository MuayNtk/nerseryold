import React from "react";

import {
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Table,
} from "antd";
import { Dayjs } from "dayjs";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

interface DataType {
  key: string;
  implementationPeriod: string;
  content: string;
  totalCost: number | string;
  subject: string;
  price: number | string;
  costBreakdown: number | string;
}

const data: DataType[] = [
  {
    key: "1",
    implementationPeriod: "",
    content: "",
    totalCost: "",
    subject: "",
    price: "",
    costBreakdown: "",
  },
  {
    key: "2",
    implementationPeriod: "",
    content: "",
    totalCost: "",
    subject: "",
    price: "",
    costBreakdown: "",
  },
  {
    key: "3",
    implementationPeriod: "",
    content: "",
    totalCost: "",
    subject: "",
    price: "",
    costBreakdown: "",
  },
];

const columns = [
  {
    title: "実施時期",
    dataIndex: "implementationPeriod",
    key: "implementationPeriod",
  },
  {
    title: "内容",
    dataIndex: "content",
    key: "content",
  },
  {
    title: "総事業費（円）",
    dataIndex: "totalCost",
    key: "totalCost",
  },
  {
    title: "科目※1",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "金額（円）",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "積算内訳",
    dataIndex: "costBreakdown",
    key: "costBreakdown",
  },
];

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

function handleDateChange(date: Dayjs | null, dateString: string): void {
  console.log(date);
}
const FormTap14: React.FC = () => {
  return (
    <div>
      <Row justify="center">
        <Col xs={22} sm={18} md={18} lg={20} xl={22}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                個票 11
              </li>
              <li style={{ marginTop: "10px" }}>
                <p>16　施設機能強化推進費加算（３月加算）</p>
              </li>
              <li>
                <p>
                  【事業実施計画及び支出予定額】（火災・地震等の災害時に備えた防災教育・防災対策に係る事業内容）
                </p>
              </li>
              <li style={{ marginTop: "7px", marginBottom: "10px" }}>
                <p style={{ border: "solid black 2px", width: "auto" }}>
                  避難訓練や防災教育などの活動、避難具の整備や災害に備えた物品の購入等が対象となります。
                  保育、教育の提供にあたり通常要するものや一般的な物品と区別がつかないもの（拡声器、救急箱等）、
                  本来施設に備えておくべきもの（常設用消火器、ＡＥＤ等）は対象外となります。
                </p>
              </li>
              <div>
                <Table
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                  summary={(pageData) => {
                    let totalTotalCost = 0;
                    let totalPrice = 0;

                    pageData.forEach(({ totalCost, price }) => {
                      totalTotalCost += parseFloat(totalCost as string);
                      totalPrice += parseFloat(price as string);
                    });

                    return (
                      <Table.Summary.Row>
                        <Table.Summary.Cell index={0} colSpan={2}>
                          Total
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={1}>
                          {totalTotalCost}
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={2}></Table.Summary.Cell>
                        <Table.Summary.Cell index={3}>
                          {totalPrice}
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={4}></Table.Summary.Cell>
                      </Table.Summary.Row>
                    );
                  }}
                />
              </div>
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
                    　１）延長保育事業
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
                    　2 ）一時預かり事業（一般型）
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
                    　3
                    ）病児保育事業（子ども・子育て支援交付金に係る要件に適合するもの及びこれと同等の要件を満たして自主事業として実施しているもの。）
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
                    　4 ）乳児が３人以上利用している施設
                    （４月から11月までの各月初日を平均して乳児が３人以上利用していること。）
                    　
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
                    　5
                    ）障がい児（軽度障がい児を含む。）※が１人以上利用している施設
                    （４月から11月までの間に１人以上の障がい児の利用があること。）
                  </p>
                </div>
                {selectMonth(handleDateChange)}
              </div>
              <div>
                <Divider />
                <li>
                  ※1　支出予定(済)額の科目欄には、記載の科目以外に該当するものがあれば、適宜記入してください。
                </li>
                <li>
                  ※2　さぽ～と保育（福岡市特別支援保育事業）に係る支援区分１～支援区分４の決定を受けた児童を指します。
                </li>
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

export default FormTap14;
