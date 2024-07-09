"use client";

import React, { ReactNode, useState } from "react";
import type { DatePickerProps, MenuProps, TableColumnsType } from "antd";
import {
  Button,
  Form,
  Input,
  Space,
  Dropdown,
  Tag,
  Card,
  Table,
  InputNumber,
  Typography,
  Checkbox,
} from "antd";

import { DownOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";

const { Text, Title } = Typography;

interface formHeaderType {
  key: React.Key;
  label: string;
  detail: string;
}

interface wageImproveType {
  key: React.Key;
  order: string;
  staffName: string;
  treatment1: ReactNode;
  treatment2: ReactNode;
  treatment3: ReactNode;
  occupation: ReactNode;
  jobType: ReactNode;
  experience: ReactNode;
  fullTime: string;
  partTime: string;
  corpOfficeCheck: string;
  salary1: string;
  salary2: string;
  salary2extra: string;
  salary3: string;
  subTotal4: string;
  revisionRate5: string;
  estimateAmount5: string;
  actualCost6: string;
  addAmount7: string;
  total8: string;
  salary9: string;
  salary10: string;
  salary10extra: string;
  salary11: string;
  subtotal12: string;
  bonus13: string;
  bonus14: string;
  bonus15: string;
  bonusAmount: string;
  remark: string;
}

type LayoutType = Parameters<typeof Form>[0]["layout"];

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Reiwa",
  },
  {
    key: "2",
    label: "Heisei",
  },
  {
    key: "3",
    label: "Showa",
  },
];

const occupationList: MenuProps["items"] = [
  {
    key: 1,
    label: "施設長",
  },
  {
    key: 2,
    label: "副園長",
  },
  {
    key: 3,
    label: "教頭",
  },
  {
    key: 4,
    label: "主幹教諭",
  },
  {
    key: 5,
    label: "主任保育士",
  },
  {
    key: 6,
    label: "教諭",
  },
  {
    key: 7,
    label: "保育士",
  },
  {
    key: 8,
    label: "看護師",
  },
  {
    key: 9,
    label: "准看護師",
  },
  {
    key: 10,
    label: "調理士",
  },
  {
    key: 11,
    label: "調理士（栄養士）",
  },
  {
    key: 12,
    label: "栄養士",
  },
  {
    key: 13,
    label: "事務員",
  },
  {
    key: 14,
    label: "用務員",
  },
  {
    key: 15,
    label: "パート保育士",
  },
  {
    key: 16,
    label: "パート調理士",
  },
  {
    key: 17,
    label: "その他",
  },
];

const jobType: MenuProps["items"] = [
  {
    key: 1,
    label: "常勤",
  },
  {
    key: 2,
    label: "非常勤",
  },
];

const wageImproveData: wageImproveType[] = [];
for (let i = 1; i < 101; i++) {
  wageImproveData.push({
    key: `${i}`,
    order: `${i}`,
    staffName: "string",
    treatment1: <Checkbox />,
    treatment2: <Checkbox />,
    treatment3: <Checkbox />,
    occupation: (
      <Dropdown menu={{ items: occupationList }}>
        <Space>
          <Button>
            職種
            <DownOutlined />
          </Button>
        </Space>
      </Dropdown>
    ),
    jobType: (
      <Dropdown menu={{ items: jobType }}>
        <Space>
          <Button>
            常勤
            <DownOutlined />
          </Button>
        </Space>
      </Dropdown>
    ),
    experience: <InputNumber defaultValue={0}></InputNumber>,
    fullTime: "string",
    partTime: "string",
    corpOfficeCheck: "string",
    salary1: "string",
    salary2: "string",
    salary2extra: "string",
    salary3: "string",
    subTotal4: "string",
    revisionRate5: "string",
    estimateAmount5: "string",
    actualCost6: "string",
    addAmount7: "string",
    total8: "string",
    salary9: "string",
    salary10: "string",
    salary10extra: "string",
    salary11: "string",
    subtotal12: "string",
    bonus13: "string",
    bonus14: "string",
    bonus15: "string",
    bonusAmount: "string",
    remark: "string",
  });
}

const wageImproveHeader: TableColumnsType<wageImproveType> = [
  {
    key: "1",
    title: "No.",
    dataIndex: "order",
    render: (order: string) => <span>{order}</span>,
  },
  {
    key: "2",
    title: "職員名",
    dataIndex: "staffName",
    render: (staffName: string) => <span>{staffName}</span>,
  },
  {
    key: "32",
    title: "改善実施有無",
    children: [
      {
        key: "3",
        title: "処遇Ⅰ（賃金改善要件分）",
        dataIndex: "treatment1",
        render: (treatment1: React.ReactNode) => <span>{treatment1}</span>,
      },
      {
        key: "4",
        title: "処遇Ⅱ",
        dataIndex: "treatment2",
        render: (treatment2: React.ReactNode) => <span>{treatment2}</span>,
      },
      {
        key: "5",
        title: "処遇Ⅲ",
        dataIndex: "treatment3",
        render: (treatment3: React.ReactNode) => <span>{treatment3}</span>,
      },
    ],
  },
  {
    key: "6",
    title: "職種",
    dataIndex: "occupation",
    render: (occupation: React.ReactNode) => <span>{occupation}</span>,
  },
  {
    key: "7",
    title: "常勤 非常勤※2",
    dataIndex: "jobType",
    render: (jobType: React.ReactNode) => <span>{jobType}</span>,
  },
  {
    key: "8",
    title: "経験年数※1",
    dataIndex: "experience",
    render: (experience: React.ReactNode) => <span>{experience}</span>,
  },

  {
    key: "33",
    title: "常勤換算値※3",
    children: [
      {
        key: "9",
        title: "常勤",
        dataIndex: "fullTime",
        render: (fullTime: string) => <span>{fullTime}</span>,
      },
      {
        key: "10",
        title: "非常勤",
        dataIndex: "partTime",
        render: (partTime: string) => <Text>{partTime}</Text>,
      },
    ],
  },
  {
    key: "11",
    title: "法人役員との兼務",
    dataIndex: "corpOfficeCheck",
    render: (corpOfficeCheck: string) => <span>{corpOfficeCheck}</span>,
  },
  {
    key: "34",
    title: "起点賃金水準",
    children: [
      {
        key: "35",
        title: "基準年度における賃金水準を適用した場合の賃金※4",
        children: [
          {
            key: "12",
            title: "基本給①",
            dataIndex: "salary1",
            render: (salary1: string) => <span>{salary1}</span>,
          },
          {
            key: "13",
            title: "各種手当②",
            dataIndex: "salary2",
            render: (salary2: string) => <span>{salary2}</span>,
          },
          {
            key: "14",
            title: "②のうち 役職手当等（処遇Ⅱ）",
            dataIndex: "salary2extra",
            render: (salary2extra: React.ReactNode) => (
              <span>{salary2extra}</span>
            ),
          },
          {
            key: "15",
            title: "賞与（一時金）③",
            dataIndex: "salary3",
            render: (salary3: React.ReactNode) => <span>{salary3}</span>,
          },
          {
            key: "16",
            title: "小計 ④（①＋②＋③）",
            dataIndex: "subTotal4",
            render: (subTotal4: React.ReactNode) => <span>{subTotal4}</span>,
          },
        ],
      },
      {
        key: "36",
        title: "人件費の改定状況部分※5",
        children: [
          {
            key: "17",
            title: "改定率（％）⑤",
            dataIndex: "revisionRate5",
            render: (revisionRate5: React.ReactNode) => (
              <Text>{revisionRate5}</Text>
            ),
          },
          {
            key: "18",
            title: "目安額 （④-②）× ⑤",
            dataIndex: "estimateAmount5",
            render: (estimateAmount5: React.ReactNode) => (
              <span>{estimateAmount5}</span>
            ),
          },
          {
            key: "19",
            title: "実費額 ⑥",
            dataIndex: "actualCost6",
            render: (actualCost6: React.ReactNode) => (
              <span>{actualCost6}</span>
            ),
          },
        ],
      },
      {
        key: "20",
        title: "令和４年度の加算Ⅲ等による賃金改善額※6 ⑦",
        dataIndex: "addAmount7",
        render: (addAmount7: string) => <span>{addAmount7}</span>,
      },
      {
        key: "21",
        title: "計 ⑧（④＋⑥-⑦）",
        dataIndex: "total8",
        render: (total8: string) => <span>{total8}</span>,
      },
    ],
  },
  {
    key: "37",
    title: "加算当年度内の賃金改善実施期間における支払賃金※6",
    children: [
      {
        key: "22",
        title: "基本給 ⑨",
        dataIndex: "salary9",
        render: (salary9: string) => <span>{salary9}</span>,
      },
      {
        key: "23",
        title: "各種手当 ⑩",
        dataIndex: "salary10",
        render: (salary10: string) => <span>{salary10}</span>,
      },
      {
        key: "24",
        title: "⑩のうち 役職手当等（処遇Ⅱ）",
        dataIndex: "salary10extra",
        render: (salary10extra: string) => <span>{salary10extra}</span>,
      },
      {
        key: "25",
        title: "賞与 （一時金） ⑪",
        dataIndex: "salary11",
        render: (salary11: React.ReactNode) => <span>{salary11}</span>,
      },
      {
        key: "26",
        title: "計 ⑫ （⑨＋⑩+⑪）",
        dataIndex: "subtotal12",
        render: (subtotal12: React.ReactNode) => <span>{subtotal12}</span>,
      },
    ],
  },

  {
    key: "27",
    title: "⑫のうち 加算前年度の加算残額に係る支払賃金※6 ⑬",
    dataIndex: "bonus13",
    render: (bonus13: React.ReactNode) => <span>{bonus13}</span>,
  },
  {
    key: "28",
    title: "⑫のうち 加算Ⅱの新規事由による賃金改善額※7 ⑭",
    dataIndex: "bonus14",
    render: (bonus14: React.ReactNode) => <span>{bonus14}</span>,
  },
  {
    key: "29",
    title: "⑫のうち 加算Ⅲによる賃金改善額※8 ⑮",
    dataIndex: "bonus15",
    render: (bonus15: React.ReactNode) => <span>{bonus15}</span>,
  },
  {
    key: "30",
    title: "賃金改善 見込額 ⑯ （⑫-⑬-⑭-⑮-⑧）",
    dataIndex: "bonusAmount",
    render: (bonusAmount: React.ReactNode) => <span>{bonusAmount}</span>,
  },
  {
    key: "31",
    title: "備考",
    dataIndex: "remark",
    render: (remark: React.ReactNode) => <span>{remark}</span>,
  },
];

const menuProps = {
  items,
  occupationList,
};

const switchChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const formHeaderData: formHeaderType[] = [
  {
    key: "1",
    label: "①処遇Ⅰの基準年度",
    detail: "令和４年度",
  },
  {
    key: "2",
    label: "②園番号",
    detail: "566",
  },
  {
    key: "3",
    label: "③施設名",
    detail: "いちざきみんなの家",
  },
];

const formHeader: TableColumnsType<formHeaderType> = [
  {
    key: "1",
    dataIndex: "label",
    width: 200,
    render: (label) => <>{label}</>,
  },
  {
    key: "1",
    dataIndex: "detail",
    width: 400,
    render: (detail) => <>{detail}</>,
  },
];

const Form3_1: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState("常勤");
  const [fullTimeJob, setFullTimeJob] = useState(false);
  const selectedJobType: MenuProps["onClick"] = ({ key }) => {
    // message.info(`Click on item ${key} and label`);
    if (key === "1") {
      console.log(key);
      setSelectedJob("常勤");
      setFullTimeJob(false);
      // message.info(selectedJob);
    } else if (key === "2") {
      console.log(key);
      setSelectedJob("非常勤");
      setFullTimeJob(true);
    }
  };
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14, flex: 1 },
          labelWrap: true,
        }
      : null;

  const [size, setSize] = useState<SizeType>("large"); // default is 'middle'
  const styles = {
    border: "1px solid #dddddd",
    width: "80%",
    margin: "0 auto",
  };
  const td = {
    border: "1px solid #dddddd",
    height: "50px",
  };

  const { TextArea } = Input;

  return (
    <>
      <Form
        {...formItemLayout}
        style={{ maxWidth: 600 }}
        labelWrap
        wrapperCol={{ flex: 1 }}
        
      >
        <Form.Item>
          <Table
            dataSource={formHeaderData}
            columns={formHeader}
            bordered
            pagination={false}
            showHeader={false}
          />
        </Form.Item>
      </Form>
      <br />
      <Card title="令和５年度 賃金改善明細（職員別表）">
        <Table
          dataSource={wageImproveData}
          columns={wageImproveHeader}
          bordered
          pagination={false}
          style={{ marginBottom: 10 }}
          scroll={{ x: "calc(3500px + 50%)", y: 480 }}
          summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={11}>
                  小計
                </Table.Summary.Cell>
                <Table.Summary.Cell index={11}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={12}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={13}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={14}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={15}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={16}></Table.Summary.Cell>
                <Table.Summary.Cell index={17}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={18}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={19}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={20}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={21}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={22}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={23}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={24}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={25}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={26}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={27}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={28}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={29}>
                  <InputNumber />
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        ></Table>
        <Title level={5}>【記入における留意事項】</Title> <br />
        <Text type="secondary">
          施設・事業所に現に勤務している職員全員（職種を問わず、非常勤を含む。）を記載すること。
        </Text>
        <br />
        <Text type="secondary">
          備考欄には、年度途中の採用や退職がある場合にはその旨、また、賃金改善額が他の職員と比較して高額（低額、賃金改善を実施しない場合も含む）である場合についてはその理由を記載すること。
        </Text>
        <br />
        <Text type="secondary">
          ※1
          経験年数については、「施設型給付費等に係る処遇改善等加算Ⅰ及び処遇改善等加算Ⅱについて」（令和２年７月30日　府子本第761号、２文科初第643号、子発0730第２号
          以下「処遇改善等加算通知」という）第４の１によるものとする。
        </Text>
        <br />
        <Text type="secondary">
          ※2
          「常勤」とは、原則として施設で定めた勤務時間（所定労働時間）の全てを勤務する者、又は１日６時間以上かつ20日以上勤務している者をいい、「非常勤」とは常勤以外の者をいう。
        </Text>
        <br />
        <Text type="secondary">
          ※3
          常勤換算値について、常勤の者については1.0とし、非常勤の者については下記の算式によって得た値とする。算式　常勤以外の職員の１か月の勤務時間数の合計÷各施設・事業所の就業規則等で定めた常勤職員の１か月の勤務時間数＝常勤換算値
        </Text>
        <br />
        <Text type="secondary">
          ※4
          法定福利費等の事業主負担額を除く。基準年度については、処遇改善等加算通知第４の２(1)キ又は(2)オによるものとする。
        </Text>
        <br />
        <Text type="secondary">
          ※5
          人件費の改定状況部分については、施設の職員構成等を踏まえ、施設の判断で適切に配分を行った額を記入すること。法定福利費等の事業主負担額を除く。
        </Text>
        <br />
        <Text type="secondary">※6 法定福利費等の事業主負担額を除く。</Text>
        <br />
        <Text type="secondary">
          ※7
          別紙様式７別添１（４）又は（５）における「処遇改善等加算Ⅱによる賃金改善額」の「うち基準翌年度から加算当年度における賃金改善分」を対象職員ごとに算出して記入すること。法定福利費等の事業主負担額を除く。
        </Text>
        <br />
        <Text type="secondary">
          ※8
          別紙様式９別添１における「加算Ⅲによる賃金改善見込額」を対象職員ごとに記入すること。法定福利費等の事業主負担額を除く。
        </Text>
        <br />
      </Card>

      <br />

      <br />

      <br />

      <div className="flex justify-end">
        <Button type="primary" size={size}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Form3_1;
