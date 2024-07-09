import React, { SetStateAction, useState } from "react";
import {
  Checkbox,
  Col,
  Divider,
  Form,
  InputNumber,
  Radio,
  Row,
  Table,
} from "antd";
import { TableColumnsType } from "antd/lib";

interface DataType {
  key: React.Key;
  choice: string;
  choices: string;
  addition1: string;
  addition2: string;
  sumValue: number;
}

const choicesData = ["1.2歳児", "３歳児", "４歳以上児", "計"];

const columns: TableColumnsType<DataType> = [
  {
    title: " ",
    dataIndex: "choices",
    render: (_, record, index) => choicesData[index],
    width: 150,
  },
  {
    title: "利用子ども数 (見込）",
    dataIndex: "addition1",
    width: 70,
    align: "center",
    render: (_, record) => {
      if (record.choice === "4") {
        const sum = typeof record.sumValue === "string" ? 0 : record.sumValue;
        return <InputNumber value={sum} readOnly placeholder="名" />;
      }
      return <InputNumber placeholder="名" />;
    },
  },
  {
    title: "保育士の配置状況 (見込)",
    dataIndex: "addition2",
    width: 70,
    align: "center",
    render: (_, record) => {
      if (record.choice === "4") {
        return <InputNumber placeholder="名" />;
      }
    },
  },
];

const Data: DataType[] = [
  {
    key: "1",
    choice: "1",
    choices: "1",
    addition1: "2歳児",
    addition2: " ",
    sumValue: 0,
  },
  {
    key: "2",
    choice: "2",
    choices: "2",
    addition1: "３歳児",
    addition2: " ",
    sumValue: 0,
  },
  {
    key: "3",
    choice: "3",
    choices: "3",
    addition1: "４歳以上児",
    addition2: " ",
    sumValue: 0,
  },
  {
    key: "4",
    choice: "4",
    choices: "4",
    addition1: "計",
    addition2: " ",
    sumValue: 0,
  },
];

interface DataType2 {
  key: React.Key;
  choice: string;
  choices: string;
  sumValue: number | string;
}

const onChange = (date: any, dateString: string) => {
  console.log(date, dateString);
};

const columns2: TableColumnsType<DataType2> = [
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
    width: 220,
    align: "center",
  },
  {
    title: "4月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "5月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "6月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "7月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "8月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "9月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "10月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "11月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "12月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "1月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "2月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "3月",
    width: 30,
    align: "center",
    render: (_, record, index) => {
      return <InputNumber placeholder="名" style={{ width: "50px" }} />;
    },
  },
  {
    title: "合計",
    width: 60,
    align: "center",
    render: (_, record, index) => {
      const sum = Data.slice(0, -1).reduce((acc, curr) => {
        if (typeof curr.addition1 === "number") {
          return acc + (curr.addition1 as number);
        } else {
          return acc;
        }
      }, 0);
      return <span>{sum}</span>;
    },
  },
];

const choicesData2 = [
  "前年度延べ利用子ども数 ※ 1、2 (実績)",
  "当該年度延べ利用子ども数 ※ 1,2,３（見込）",
];

const Data2: DataType2[] = [
  {
    key: "1",
    choice: "1",
    choices: "前年度延べ利用子ども数 ※1、2  (実績)",
    sumValue: 0,
  },
  {
    key: "2",
    choice: "2",
    choices: "当該年度延べ利用子ども数 ※1、2、３（見込）",
    sumValue: 0,
  },
];

const FormTap2: React.FC = () => {
  const [data, setData] = useState<DataType[]>(Data);

  const onChange = (value: number | string | null, key: React.Key): void => {
    setData((prevData) =>
      prevData.map(
        (item) =>
          item.key === key ? { ...item, sumValue: value as number } : item // Update the sumValue property of the record with the new value
      )
    );
  };

  return (
    <div>
      <Row justify="start">
        <ol>
          <li style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}>
            個票１
          </li>
          <li style={{ fontSize: "16px", fontWeight: "bold" }}>
            2　休日保育加算
          </li>
        </ol>
      </Row>
      <Divider orientation="left">
        加算要件 該当する 適・否に ㇾ印をすること
        (１～４の要件全てが「適」該当する場合に加算)
      </Divider>

      <Row>
        <Col xs={24} sm={12} lg={16} xl={20}>
          <Form.Item style={{ gap: "10px" }}>
            <div>
              <ol>
                <li>
                  <p style={{ fontWeight: "bold" }}>
                    休日等を含めて年間を通じて開所している。
                  </p>
                  <p>1. </p>
                  <p>
                    ※　開所する施設は、複数の特定教育・保育施設、地域型保育事業所（居宅訪問
                    　型保育事業所は除く。）又は企業主導型保育施設との共同により年間を通じて開
                    　所する施設（以下「共　同実施施設」という。）を含む。
                  </p>
                </li>
              </ol>
              <div>
                <Radio.Group
                  style={{
                    display: "flex",
                    gap: "100px",
                  }}
                >
                  <Radio value="適"> １　適 </Radio>
                  <Radio value="否"> ２　否 </Radio>
                </Radio.Group>
              </div>
              <br />
              <div>
                <ol>
                  <li>
                    <p>2.</p>
                    <p>
                      ※　関係法令に基づき、対象子どもの年齢及び人数に応じて、本事業を担当する保育士を配置している。
                    </p>
                    <Table
                      columns={columns}
                      dataSource={Data}
                      bordered
                      size="small"
                      pagination={false}
                    />
                  </li>
                </ol>
              </div>
              <br />
              <div>
                <ol>
                  <li>
                    <p>3. </p>
                    <p>※　適宜、間食又は給食等を提供している。</p>
                    <div>
                      <Radio.Group
                        style={{
                          display: "flex",
                          gap: "100px",
                        }}
                      >
                        <Radio value="適"> １　適 </Radio>
                        <Radio value="否"> ２　否 </Radio>
                      </Radio.Group>
                    </div>
                  </li>
                </ol>
              </div>
              <br />
              <div>
                <ol>
                  <li>
                    <p>4. </p>
                    <p>
                      ※　対象となる子どもは、原則、休日等に常態的に保育を必要とする保育認定子どもである。
                    </p>
                    <div>
                      <Radio.Group
                        style={{
                          display: "flex",
                          gap: "100px",
                        }}
                      >
                        <Radio value="適"> １　適 </Radio>
                        <Radio value="否"> ２　否 </Radio>
                      </Radio.Group>
                    </div>
                  </li>
                </ol>
              </div>
              <br />
              <div>
                <ol>
                  <li>
                    <Table
                      columns={columns2}
                      dataSource={Data2}
                      bordered
                      size="small"
                      scroll={{ x: 1300 }}
                      pagination={false}
                    />
                    <p>
                      ※1　延べ利用子ども数は、1人の子どもが月4日利用した場合は4名と計算すること。
                    </p>
                    <p>
                      ※2　休日延べ利用子ども数には、休日等に当該休日保育対象施設を利用する、休日保育対象施設以外の特定教育・保育施設又は特
                      　　定地域型保育事業を利用する子どもを含むこと。
                    </p>
                    <p>
                      ※3　複数の施設により実施する場合は、実施する各施設の休日延べ利用子ども数の見込み数を徴収して認定を行うこと。
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};
export default FormTap2;

function setData(arg0: (prevData: any) => any) {
  throw new Error("Function not implemented.");
}
// Path: src/app/ui/accounting/acc_5/acc5_listbtn2/formacc5_listtap2-2.tsx
