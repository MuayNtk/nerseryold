"use client";

import React from "react";
import { Table, Popover, Input } from "antd";
import type { TableProps } from "antd/lib/table";
import { ColumnType } from "antd/lib/table/interface";
import UserSelector from "../userselector";
import MonthSelector from "../monthselector";
import CustomTextArea from "../customtextarea";
import { SubmitCancelButtons } from "../sub-canbtn";

interface DataType {
  key: string;
  name: string;
  money: number;
  month: number;
  text: string;
}

const content = (
  <div>
    <p>
      ※対象者が6人以上の場合はこの用紙に行を付け足してください。（行の追加が難しい場合は運営支援課までご連絡ください）
    </p>
  </div>
);

const columns: TableProps<DataType>["columns"] = [
  {
    title: "月",
    dataIndex: "month",
    align: "center",
    render: (text, record) => (
      <MonthSelector selectedMonth={record.month as number} />
    ),
  },
  {
    title: (
      <Popover content={content} title="Title">
        氏名
      </Popover>
    ),
    dataIndex: "name",
    align: "center",
    render: (text, record) => (
      <>
        <CustomTextArea
          rows={7}
          placeholder="対象者が6人以上まで"
          maxLength={20}
        />
      </>
    ),
  },
  {
    title: "人件費等",
    className: "column-money",
    dataIndex: "money",
    align: "center",
    render: (text, record) => (
      <Input type="text" value={record.money} suffix="円" />
    ),
  },
  {
    title: "人件費等合計（A）",
    className: "column-money",
    dataIndex: "money",
    align: "center",
    footer: (columnData: DataType[]) => {
      const total = columnData.reduce((sum, record) => sum + record.money, 0);
      return <div>{total}円</div>;
    },
  } as ColumnType<DataType>,
  {
    title: "補助上限額（B）",
    className: "column-money",
    dataIndex: "money",
    align: "center",
    footer: (columnData: DataType[]) => {
      const total = columnData.reduce((sum, record) => sum + record.money, 0);
      return <div>{total}円</div>;
    },
  } as ColumnType<DataType>,
  {
    title: "補助金額「A」と「B」の少ない額",
    className: "column-money",
    dataIndex: "money",
    align: "center",
    footer: (columnData: DataType[]) => {
      const total = columnData.reduce((sum, record) => sum + record.money, 0);
      return <div>{total}円</div>;
    },
  } as ColumnType<DataType>,
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    month: 0,
    money: 145000,
    text: "",
  },
  {
    key: "2",
    name: "Jim Green",
    month: 0,
    money: 145000,
    text: "",
  },
  {
    key: "3",
    name: "Joe Black",
    month: 0,
    money: 145000,
    text: "",
  },
];

const FormTap2: React.FC = () => (
  <div>
    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
      様式第４号　別添４－１
    </p>
    <br />
    <UserSelector />
    <br />
    <Table
      columns={columns}
      dataSource={data}
      bordered
      title={() => "補助金内訳"}
      footer={() => "計"}
    />

    <SubmitCancelButtons onSubmit={() => {}} onCancel={() => {}} />
  </div>
);

export default FormTap2;
