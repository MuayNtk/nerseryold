"use client";

import React, { useState } from "react";
import { Table, InputNumber } from "antd";
import Column, { ColumnProps } from "antd/es/table/Column";

const IncomeTable: React.FC = () => {
  const [data, setData] = useState([
    { 区分: "収入の部", 金額: "" },
    { 区分: "福岡市補助金収入", 金額: 0 },
    { 区分: "自己資金", 金額: 0 },
    { 区分: "計", 金額: 0 },
    { 区分: "支出の部", 金額: "" },
    { 区分: "人件費等", 金額: 0 },
    { 区分: "計", 金額: 0 },
  ]);

  const handleInputChange = (value: number, index: number) => {
    const newData = [...data];
    newData[index].金額 = value;

    // Update the 計 row dynamically
    const incomeTotal =
      calculateTotal("福岡市補助金収入") + calculateTotal("自己資金");
    newData[3].金額 = incomeTotal;
    newData[6].金額 = calculateTotal("人件費等") + incomeTotal;

    setData(newData);
  };

  const calculateTotal = (type: string) => {
    return data
      .filter((item) => item.区分 === type && typeof item.金額 === "number")
      .reduce((acc, item) => acc + (item.金額 as number), 0);
  };

  interface DataItem {
    区分: string;
    金額: number | string;
  }

  const columns: Array<ColumnProps<DataItem>> = [
    {
      title: "区分",
      dataIndex: "区分",
      key: "区分",
      width: "25%",
    },
    {
      title: "金額",
      dataIndex: "金額",
      key: "金額",
      width: "50%",
      render: (text: string, record: DataItem, index: number) => {
        if (index === 0 || index === 3 || index === 4 || index === 6) {
          return <span>{text}</span>;
        } else {
          return (
            <InputNumber
              suffix="円"
              min={0}
              style={{ width: "100%" }}
              onChange={(value) => handleInputChange(value as number, index)}
            />
          );
        }
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      pagination={false}
      size="middle"
    />
  );
};

export default IncomeTable;
