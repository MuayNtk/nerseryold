import React, { useState } from "react";
import {
  Col,
  Form,
  InputNumber,
  Row,
  Table,
  TableColumnsType,
  Input,
  Typography,
} from "antd";
import Search from "antd/es/input/Search";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

const { Text } = Typography;

interface DataType {
  key: React.Key;
  choice: string;
  choices: string;
  sumValue1: number | string;
  sumValue2: number | string;
  difference: number | string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: " ",
    dataIndex: "choice",
    render: (_, record, index) => index + 1,
    width: 40,
    align: "center",
  },
  {
    title: " ",
    dataIndex: "choices",
    align: "center",
  },
  {
    title: "必要保育士数 ①",
    dataIndex: "sumValue1",
    width: 200,
    align: "center",
    render: (_, record) => (
      <InputNumber
        placeholder="名"
        style={{ width: "80px" }}
        value={record.sumValue1}
        onChange={(value) =>
          handleInputChange(value ?? undefined, record.key, "sumValue1")
        }
      />
    ),
  },
  {
    title: "実際の配置人数 ②",
    dataIndex: "sumValue2",
    width: 200,
    align: "center",
    render: (_, record) => (
      <InputNumber
        placeholder="名"
        style={{ width: "80px" }}
        value={record.sumValue2}
        onChange={(value) =>
          handleInputChange(value ?? undefined, record.key, "sumValue2")
        }
      />
    ),
  },
  {
    title: "差引（②－①）",
    dataIndex: "difference",
    width: 200,
    align: "center",
  },
];

const dataChoice = ["保育士数 ※ 2"];

const handleInputChange = (
  value: number | string | undefined,
  key: React.Key,
  field: keyof DataType
) => {
  setData((prevData) =>
    prevData.map((item: { key: React.Key }) =>
      item.key === key ? { ...item, [field]: value } : item
    )
  );
};

const FormTap5: React.FC = () => {
  const [data, setData] = useState<DataType[]>(
    dataChoice.map((choice, index) => ({
      key: index.toString(),
      choice: (index + 1).toString(),
      choices: choice,
      sumValue1: "",
      sumValue2: "",
      difference: "",
    }))
  );

  const onSearch = (value: any) => console.log(value);

  return (
    <div>
      <Row justify="start">
        <Col xs={24} sm={12} lg={16} xl={18}>
          <ol>
            <li style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}>
              個票 4
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
                6　チーム保育推進加算
              </p>
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
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginRight: "10px", marginTop: "10px" }}>
                利用定員数 :
              </p>
              <div
                style={{
                  border: "2px solid #33A5FF",
                  width: "80px",
                  height: "25px",
                  borderRadius: "5px",
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ margin: "0" }}>90</p>
              </div>
            </li>
          </ol>
          {/* //TODO: Fetching data from the server */}
          <div style={{ marginTop: "10px" }}>
            <Table<DataType>
              columns={columns}
              dataSource={data}
              bordered
              size="small"
              pagination={false}
            />
            <p style={{ marginTop: "40px" }}>
              ※
              利用定員が121人以上の場合のみ、加配保育士数を２名まで配置可能となります。
            </p>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Form.Item label="平均経験年数: ">
              <Input suffix="年" style={{ width: "120px" }} />
              <Text type="secondary">
                　 ※ 職員の平均経験年数が12年以上であること
              </Text>
            </Form.Item>
            <div style={{ marginBottom: "20px" }}>
              <Form.Item label="チーム保育体制の取組内容: ">
                <Input style={{ width: "500px", height: "60px" }} />
              </Form.Item>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} lg={16} xl={18}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            加算見込額
          </p>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginRight: "10px",
                  fontSize: "11px",
                  color: "#33A5FF",
                }}
              >
                <p>月平均利用児童数</p>
                <InputNumber placeholder="人" style={{ width: "80px" }} />
              </div>
              <div style={{ marginRight: "10px", marginTop: "10px" }}>
                <p>×</p>
              </div>
              <div
                style={{
                  marginRight: "10px",
                  fontSize: "11px",
                  color: "#33A5FF",
                }}
              >
                <p>加算単価</p>
                <InputNumber placeholder="円" style={{ width: "80px" }} />
              </div>
              <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                <p>+</p>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                  fontSize: "11px",
                  color: "#33A5FF",
                }}
              >
                <p>処遇改善等加算の％</p>
                <InputNumber
                  placeholder="処遇改善の％"
                  style={{ width: "80px" }}
                />
              </div>
              <div
                style={{
                  marginRight: "10px",
                  marginTop: "10px",
                  display: "inline",
                }}
              >
                <p>×</p>
              </div>
              <div
                style={{
                  marginRight: "10px",
                  fontSize: "11px",
                  color: "#33A5FF",
                }}
              >
                <p>加算単価</p>
                <InputNumber
                  placeholder="円"
                  style={{ width: "80px", marginRight: "5px" }}
                />
              </div>
              <div
                style={{
                  marginRight: "10px",
                  marginTop: "10px",
                  display: "inline",
                }}
              >
                <p>×</p>
              </div>
              <div
                style={{
                  marginRight: "10px",
                  display: "inline",
                  fontSize: "11px",
                  color: "#33A5FF",
                }}
              >
                <p>加配人数</p>
                <InputNumber
                  placeholder="人"
                  style={{ width: "80px", marginRight: "5px" }}
                />
              </div>
              <div
                style={{
                  marginRight: "10px",
                  marginTop: "10px",
                  display: "inline",
                }}
              >
                <p>×</p>
              </div>
              <div
                style={{
                  marginRight: "10px",
                  display: "inline",
                  fontSize: "11px",
                  color: "#33A5FF",
                }}
              >
                <p>月数</p>
                <InputNumber
                  placeholder="月"
                  style={{ width: "80px", marginRight: "5px" }}
                />
              </div>
              <div
                style={{
                  marginRight: "10px",
                  marginTop: "10px",
                  display: "inline",
                }}
              >
                <p>=</p>
              </div>
              <div style={{ display: "inline", marginTop: "10px" }}>
                <p>円</p>
              </div>
            </div>
            <p style={{ marginBottom: "10px", fontSize: "12px" }}>
              ※ 加算見込額の使途）※両方選択可
            </p>
            <div>
              <p style={{ marginTop: "10px" }}>（具体的な使途内容）</p>
              <Input
                style={{ width: "600px", height: "60px", marginTop: "5px" }}
              />
            </div>
            <ol style={{ marginTop: "5px" }}>
              <li style={{ fontSize: "12px" }}>
                ※1　「保育士数」欄の「必要保育士数①」は、３歳児配置改善加算の適用がある場合には、３歳児の配置を20:1から15:1に置き換えて算定すること。
              </li>
              <li style={{ fontSize: "12px" }}>
                ※2　「保育士数」欄について、短時間勤務保育士を充てる場合には常勤換算数を用いること。
              </li>
            </ol>
          </div>
        </Col>
      </Row>
      <div style={{ marginTop: "20px" }}>
        <SubmitCancelButtons
          onSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
          onCancel={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};

export default FormTap5;
function setData(arg0: (prevData: any) => any) {
  throw new Error("Function not implemented.");
}
