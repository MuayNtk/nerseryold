import React, { ReactNode } from "react";
import {
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Table,
  TableProps,
} from "antd";
import { Dayjs } from "dayjs";
import TextArea from "antd/es/input/TextArea";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

interface DataType {
  key: string;
  name: string;
  age: string;
  employmentPeriod: string;
  yearWorkTime: string;
  businessContent: string;
  classification: string;
  remarks: string;
}

const DualInputCell = ({ text }: { text: string }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Input style={{ marginRight: "5px" }} value={text} />
      <span style={{ margin: "0 5px" }}>~</span>
      <Input style={{ marginLeft: "5px" }} value={text} />
    </div>
  );
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "氏名",
    dataIndex: "name",
    key: "氏名",
    render: (text) => <Input value={text} style={{ width: "120px" }} />,
  },
  {
    title: "年齢",
    dataIndex: "age",
    key: "年齢",
    render: (text) => (
      <Input suffix="歳" value={text} style={{ width: "70px" }} />
    ),
  },
  {
    title: "雇用契約期間",
    dataIndex: "employmentPeriod",
    key: "雇用契約期間",
    render: (text) => <DualInputCell text={text} />,
  },
  {
    title: "年間雇用時間(予定)数 ※ 1",
    dataIndex: "yearWorkTime",
    key: "年間雇用時間(予定)数 ※ 1",
    render: (text, record) => (
      <Input suffix="時間" value={text} style={{ width: "100px" }} />
    ),
  },
  {
    title: "事業内容",
    dataIndex: "businessContent",
    key: "事業内容",
    render: (text) => <Input value={text} style={{ width: "160px" }} />,
  },
  {
    title: "区分 ※ 2",
    dataIndex: "classification",
    key: "区分",
    render: (text) => <Input value={text} style={{ width: "160px" }} />,
  },
  {
    title: "備考",
    dataIndex: "remarks",
    key: "備考",
    render: (text) => <Input value={text} style={{ width: "160px" }} />,
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "博多　太郎",
    age: "32",
    employmentPeriod: " ",
    yearWorkTime: "400",
    businessContent: "給食の配膳の補助",
    classification: "A",
    remarks: "身障手帳3級",
  },
  {
    key: "2",
    name: "天神　次郎",
    age: "42",
    employmentPeriod: " ",
    yearWorkTime: "40",
    businessContent: "給食の配膳の補助",
    classification: "B",
    remarks: "身障手帳3級",
  },
  {
    key: "3",
    name: "天神　次郎",
    age: "32",
    employmentPeriod: " ",
    yearWorkTime: "40",
    businessContent: "児童の話相手等",
    classification: "C",
    remarks: "身障手帳3級",
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

const FormTap10: React.FC = () => {
  const calculateTotalYearWorkTime = () => {
    let total = 0;
    data.forEach((item) => {
      total += parseInt(item.yearWorkTime);
    });
    return total;
  };

  // Footer for the table
  const tableFooter = () => {
    return (
      <tr>
        <td colSpan={3}>計　</td>
        <td>{calculateTotalYearWorkTime()}</td>
        <td>　時間</td>
        <td colSpan={3}></td>
      </tr>
    );
  };

  function handleDateChange(date: Dayjs | null, dateString: string): void {
    console.log(date);
  }

  return (
    <div>
      <Row justify="start">
        <Col xs={24} sm={24} md={20} lg={18} xl={22}>
          <Form.Item style={{ gap: "10px" }}>
            <ol>
              <li
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                <p>個票 10</p>
              </li>
              <br />
              <li style={{ fontSize: "15px" }}>
                15　高齢者等活躍促進加算（３月加算）
              </li>
              <li
                style={{
                  marginBottom: "10px",
                }}
              >
                <Divider
                  orientation="left"
                  style={{
                    fontSize: "17px",
                    marginTop: "10px",
                  }}
                >
                  事業の実施状況
                </Divider>
              </li>
              <li style={{ marginTop: "10px" }}>
                <p>　施設長要件 該当する □ に ✔ 印をすること</p>
              </li>
              <li style={{ fontSize: "12px" }}>
                <p>　※ いずれかの事業を実施すること</p>
                <p>　※ 選択した事業に該当する児童数を記入すること</p>
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

              <p style={{ fontSize: "17px", marginTop: "40px", width: "100%" }}>
                加算対象職員が、補助金・助成金（「保育体制強化事業補助金（保育支援員の補助金）」や「特定就職困難者雇用開発助成金」など）の交付対象となっているか。
              </p>
              <div>
                <Checkbox />
                <li
                  style={{
                    display: "inline-block",
                    marginBottom: "10px",
                    marginRight: "10px",
                    marginTop: "15px",
                  }}
                >
                  　1 ）交付対象となっている（予定含む。）
                </li>
                <li style={{ marginLeft: "40px" }}>
                  ⇒　加算対象となりません。
                </li>
              </div>
              <Divider />
              <div>
                <Checkbox />
                <li
                  style={{
                    display: "inline-block",
                    marginBottom: "10px",
                    marginRight: "10px",
                    marginTop: "15px",
                  }}
                >
                  　2 ）交付対象でない（予定含む。）
                </li>
                <li style={{ marginLeft: "40px" }}>⇒　加算対象となります。</li>
              </div>
              <Divider />
              <p style={{ fontSize: "12px" }}>
                ※　さぽ～と保育（福岡市特別支援保育事業）に係る支援区分１～支援区分４の決定を受けた児童を指します。
              </p>
              <Divider
                orientation="left"
                style={{ fontSize: "17px", marginTop: "40px" }}
              >
                【高齢者等活躍促進加算職員】
              </Divider>
              <div style={{ overflowX: "auto" }}>
                <Table
                  columns={columns}
                  dataSource={data}
                  bordered
                  style={{ minWidth: "100%" }}
                  footer={tableFooter}
                  pagination={false}
                />
              </div>
              <div>
                <p
                  style={{
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  業務内容 ※ 3　
                </p>
                <TextArea
                  rows={3}
                  style={{ width: "600px", display: "inline-block" }}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <li>
                  ※1　申請時は毎年度４月から 11 月までの実績及び 12
                  月から３月までの雇用計画を、報告時には毎年度４月から３月までの実績を記入すること。
                </li>
                <li>
                  ※2　身体障がい者、知的障がい者、精神障がい者、母子家庭の母、父子家庭の父、寡婦の別を記入すること。
                  （なお、身体障がい者、知的障がい者、精神障がい者の場合は障がいの程度を備考欄に記入のこと。）
                </li>
                <li>※3　業務内容については、詳細に記入すること。</li>
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
export default FormTap10;
