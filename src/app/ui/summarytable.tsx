import React from "react";
import { Divider, Table, DatePicker, Input } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
  key: React.Key;
  choice: string;
  addition: string;
  application: string;
  applicationDate: string;
  attachment: string;
  afterChange: string;
  changeDate: string;
  changeReason: string;
}

const additionData = [
  "３歳児配置改善加算",
  "休日保育加算",
  "夜間保育加算",
  "減価償却費加算",
  "賃借料加算",
  "チーム保育推進加算",
  "副食費徴収免除加算",
  "分園有の場合",
  "施設長を配置していない場合",
  "土曜日に閉所する場合",
  "主任保育士専任加算",
  "療育支援加算",
  "事務職員雇上費加算",
  "栄養管理加算",
  "高齢者等活躍促進加算（３月加算）",
  "施設機能強化推進費加算（３月加算）",
  "第三者評価受審加算（３月加算）",
  "冷暖房費加算",
  "小学校接続加算（３月加算）",
];

const onChange = (date: any, dateString: string) => {
  console.log(date, dateString);
};

const columns: TableColumnsType<DataType> = [
  {
    title: " ",
    dataIndex: "choice",
    render: (_, record, index) => index + 1,
    width: 60,
    align: "center",
  },
  {
    title: "加算（調整）項目",
    dataIndex: "addition",
    width: 260,
    render: (_, record, index) => additionData[index],
  },
  {
    title: "申請の有無",
    dataIndex: "application",
    width: 100,
  },
  {
    title: "適用年月（3月加算は適用年度）",
    dataIndex: "applicationDate",
    width: 100,
  },
  {
    title: "添付書類（※は、下記【注意事項】参照）",
    dataIndex: "attachment",
    width: 250,
  },
  {
    title: "変更後",
    dataIndex: "afterChange",
    width: 70,
  },
  {
    title: "変更年月",
    dataIndex: "changeDate",
    width: 60,
  },
  {
    title: "変更理由",
    dataIndex: "changeReason",
    width: 150,
    render: (_, record, index) => <Input />,
  },
];

const data: DataType[] = [
  {
    key: "1",
    choice: "1",
    addition: "2",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "2",
    choice: "2",
    addition: "3",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "3",
    choice: "3",
    addition: "4",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "4",
    choice: "4",
    addition: "5",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "5",
    choice: "5",
    addition: "6",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "6",
    choice: "6",
    addition: "7",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "7",
    choice: "7",
    addition: "8",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "8",
    choice: "8",
    addition: "9",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "9",
    choice: "9",
    addition: "10",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "10",
    choice: "10",
    addition: "11",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "11",
    choice: "11",
    addition: "12",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "12",
    choice: "12",
    addition: "13",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "13",
    choice: "13",
    addition: "14",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "15",
    choice: "15",
    addition: "16",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "15",
    choice: "15",
    addition: "16",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "16",
    choice: "16",
    addition: "17",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "17",
    choice: "17",
    addition: "18",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "18",
    choice: "18",
    addition: "19",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
  {
    key: "19",
    choice: "19",
    addition: "20",
    application: "",
    applicationDate: "",
    attachment: "",
    afterChange: "",
    changeDate: "",
    changeReason: "",
  },
];

const SummaryTable: React.FC = () => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        style={{ width: "100%" }}
        pagination={false}
      />
    </>
  );
};

export default SummaryTable;
