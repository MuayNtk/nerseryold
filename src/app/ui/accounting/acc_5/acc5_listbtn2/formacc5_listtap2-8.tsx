import React from "react";
import {
  Col,
  Divider,
  Form,
  Radio,
  Row,
  Table,
  TableColumnsType,
  TableProps,
  Typography,
} from "antd";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

const { Title, Paragraph, Text } = Typography;

interface DataItem {
  key: string;
  choice: string;
  month: string;
  土曜日の閉所日数: {
    第１: string | number;
    第２: string | number;
    第３: string | number;
    第４: string | number;
    第５: string | number;
    合計: string | number;
  };
  土曜日に閉所する理由: string;
  ABから選択: string;
  Bを選択した場合の理由を記入: string;
}

const columns: TableColumnsType<DataItem> = [
  {
    title: " ",
    dataIndex: "choice",
    width: 50,
    align: "center",
  },
  {
    title: "対象月",
    dataIndex: "month",
    width: 150,
  },
  {
    title: "土曜日の閉所日数",
    children: [
      {
        title: "第１",
        dataIndex: ["土曜日の閉所日数", "第１"],
        width: 100,
      },
      {
        title: "第２",
        dataIndex: ["土曜日の閉所日数", "第２"],
        width: 100,
      },
      {
        title: "第３",
        dataIndex: ["土曜日の閉所日数", "第３"],
        width: 100,
      },
      {
        title: "第４",
        dataIndex: ["土曜日の閉所日数", "第４"],
        width: 100,
      },
      {
        title: "第５",
        dataIndex: ["土曜日の閉所日数", "第５"],
        width: 100,
      },
      {
        title: "合計",
        dataIndex: ["土曜日の閉所日数", "合計"],
        width: 100,
      },
    ],
  },
  {
    title: "土曜日に閉所する理由",
    children: [
      {
        title: "ABから選択",
        dataIndex: "ABから選択",
        width: 120,
      },
      {
        title: "Bを選択した場合の理由を記入",
        dataIndex: "Bを選択した場合の理由を記入",
        width: 300,
      },
    ],
  },
];

const months = [
  "４月",
  "５月",
  "６月",
  "７月",
  "８月",
  "９月",
  "１０月",
  "１１月",
  "１２月",
  "１月",
  "２月",
  "３月",
];

const data: DataItem[] = months.map((month, index) => ({
  key: index.toString(),
  choice: `${index + 1}`,
  month: month,
  土曜日の閉所日数: {
    第１: 0,
    第２: 0,
    第３: 0,
    第４: 0,
    第５: 0,
    合計: 0,
  },
  土曜日に閉所する理由: "",
  ABから選択: "",
  Bを選択した場合の理由を記入: "",
}));

const FormTap6: React.FC = () => {
  return (
    <div>
      <Row justify="start">
        <Col xs={24} sm={12} lg={18} xl={20}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                <p>個票 6</p>
              </li>
              <br />
            </ol>
            <div>
              <ol>
                <li>
                  <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                    １０　土曜日に閉所する場合
                  </p>
                  <li>
                    <p style={{ marginBottom: "10px", marginLeft: "15px" }}>
                      （土曜日閉所とは）
                    </p>
                  </li>
                  <Paragraph style={{ marginLeft: "10px" }}>
                    土曜における保育の利用希望がないなどの理由により、施設として保育を提供していない場合（開所していても、保育を提供していない場合を含む。）を指します。
                    ただし、他の保育施設等と共同保育を実施することにより、事業所を利用する児童の土曜日における保育が確保されている場合は、「土曜日閉所」には該当せず、リストに「×」を記載する必要はありません。
                  </Paragraph>
                  <li>
                    <p style={{ marginBottom: "10px", marginLeft: "15px" }}>
                      （土曜日閉所に該当しない場合の例）　＝　リストに「×」を記載する必要のない場合の例
                    </p>
                    <p>
                      （例１）新型コロナウィルス感染症の影響により、臨時休園（自宅待機要請を含む）とした場合
                    </p>
                    <p>
                      （例２）土曜保育の希望があったものの、当日、子どもの体調不良等で、結果的に受け入れ利用がなかった場合
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginLeft: "15px",
                        color: "#33A5FF",
                      }}
                    >
                      ※（例２）については、土曜日に登園予定であったこと、土曜日に開園していたことが分かる資料とともに、「当日」キャンセルになった児童名及び
                      連絡日時の記録の提出を求める場合があります。
                    </p>
                  </li>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: "10px",
                    }}
                  >
                    ■ リストの記入方法
                  </p>
                  <li>
                    <p>
                      ※
                      土曜日に閉所した場合でも、上記「土曜日閉所に該当しない場合」については、「×」の記載不要です。
                    </p>
                    <p>
                      ①
                      閉所した土曜日に×を記入（プルダウンで選択）してください。
                    </p>
                    <p>
                      ②「理由」欄に、土曜日に閉所する理由を下記A～Cから選択し、記入（プルダウンで選択）してください。
                    </p>
                    <p style={{ marginTop: "10px", fontSize: "16px" }}>
                      （理由）
                    </p>
                    <p>
                      　A　土曜日に係る保育の利用希望がないなどの理由により閉所している場合。
                    </p>
                    <p>　B　その他（枠内に理由を記入してください。）</p>
                  </li>
                </li>
              </ol>
            </div>
          </Form.Item>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            style={{ width: "100%", marginBottom: "40px" }}
            pagination={false}
            size="small"
          />
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

export default FormTap6;
