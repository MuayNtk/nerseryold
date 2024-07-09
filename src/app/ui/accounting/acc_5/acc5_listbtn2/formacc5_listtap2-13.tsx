import React from "react";
import { Col, Form, Input, Row, Table, Typography } from "antd";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";
import UserSelector from "@/app/ui/userselector";
import TextArea from "antd/es/input/TextArea";

const { Text } = Typography;

const columns = [
  {
    title: " ",
    dataIndex: "name",
    key: "name",
    width: "50px",
    align: "center" as const,
  },
  {
    title: "①雇用時間（予定）数",
    dataIndex: "column1",
    key: "column1",
    width: "80px",
    align: "center" as const,
  },
  {
    title: "②雇用時間（予定）数",
    dataIndex: "column2",
    key: "column2",
    width: "80px",
    align: "center" as const,
  },
  {
    title: "③雇用時間（予定）数",
    dataIndex: "column3",
    key: "column3",
    width: "80px",
    align: "center" as const,
  },
  {
    title: "④雇用時間（予定）数",
    dataIndex: "column4",
    key: "column4",
    width: "80px",
    align: "center" as const,
  },
  {
    title: "計",
    dataIndex: "column5",
    key: "column5",
    width: "80px",
    align: "center" as const,
  },
];

const dataSource = [
  {
    key: "1",
    name: "氏名",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "2",
    name: "４月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "3",
    name: "５月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "4",
    name: "６月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "5",
    name: "７月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "6",
    name: "８月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "7",
    name: "９月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "8",
    name: "１０月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "9",
    name: "１１月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "10",
    name: "１２月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "11",
    name: "１月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "12",
    name: "２月",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
  {
    key: "13",
    name: "合　計",
    column1: <Input />,
    column2: <Input />,
    column3: <Input />,
    column4: <Input />,
    column5: <Input />,
  },
];

const dataInput = () => {
  return (
    <div>
      <p
        style={{
          display: "inline-block",
          marginRight: "10px",
          marginTop: "20px",
        }}
        contentEditable="true"
      >
        氏名
      </p>
      <Input
        style={{
          display: "inline-block",
          marginRight: "10px",
          width: "200px",
          marginBottom: "10px",
        }}
      />
      <p
        style={{
          display: "inline-block",
          marginRight: "10px",
          marginTop: "20px",
        }}
      >
        年齢{" "}
      </p>
      <Input
        style={{
          display: "inline-block",
          marginRight: "10px",
          width: "100px",
          marginBottom: "10px",
        }}
      />
      <p
        style={{
          display: "inline-block",
          marginRight: "10px",
          marginTop: "20px",
        }}
      >
        歳　　 雇用枠
      </p>
      <Input
        style={{
          display: "inline-block",
          marginRight: "10px",
          width: "200px",
          marginBottom: "10px",
        }}
      />
    </div>
  );
};

const FormTap13: React.FC = () => {
  return (
    <div>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={18} xl={22}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                個票１０添付資料
              </li>
              <li
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginTop: "5px",
                }}
              >
                高齢者等活躍促進加算調書
              </li>
            </ol>
            <br />
            <UserSelector label={""} width={400} />
            {dataInput()}
            {dataInput()}
            {dataInput()}
            {dataInput()}
            <div>
              <p style={{ marginBottom: "5px", marginTop: "10px" }}>業務内容</p>
              <TextArea
                placeholder="利用児童の話し相手や身の回りの世話、給食の後片付けや洗濯清掃作業等について従事している。"
                rows={4}
              />
            </div>
            <div>
              <p style={{ marginBottom: "5px", marginTop: "10px" }}>
                加算の効果必要性等
              </p>
              <TextArea
                placeholder="大人の目が増え、より安全に保育の提供を行えると共に、人手が必要な部分を補うことができ、地域での雇用を生み出すこともできる。"
                rows={4}
              />
            </div>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={18} xl={22}>
          <Form.Item>
            <div style={{ marginTop: "20px" }}>
              <Table
                dataSource={dataSource}
                columns={columns}
                bordered
                size="small"
                pagination={false}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <Text type="warning">
                注１　４月から１１月については、各月の実際の雇用時間の累計を記入すること。
              </Text>
              <br />
              <Text type="warning">
                注２　１２月から３月については、実績等を考慮した雇用予定時間を記入すること。
              </Text>
            </div>
          </Form.Item>
        </Col>
      </Row>
      <SubmitCancelButtons
        onSubmit={() => {
          throw new Error("Function not implemented.");
        }}
        onCancel={() => {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default FormTap13;
