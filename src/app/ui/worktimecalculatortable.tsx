"use client";

import React, { useState } from "react";
import { Table, InputNumber, Space, Divider } from "antd";

interface DataType {
  key: React.Key;
  time: string;
  income: number;
  totalIncome: number;
  expense: number;
  totalExpense: number;
  totalKey: number;
  type: number;
}

const WorkTimeCalculatorTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>([
    {
      key: "1",
      time: "8 am - 9 am",
      income: 0,
      totalIncome: 0,
      expense: 0,
      totalExpense: 0,
      totalKey: 0,
      type: 0,
    },
    {
      key: "2",
      time: "9 am - 10 am",
      income: 0,
      totalIncome: 0,
      expense: 0,
      totalExpense: 0,
      totalKey: 0,
      type: 0,
    },
  ]);

  const columns = [
    {
      title: "時間",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "収入",
      dataIndex: "income",
      key: "income",
    },
    {
      title: "合　　計",
      dataIndex: "totalIncome",
      key: "totalIncome",
    },
    {
      title: "支出",
      dataIndex: "expense",
      key: "expense",
    },
    {
      title: "合　　計",
      dataIndex: "totalExpense",
      key: "totalExpense",
    },
  ];

  // Add all possible keys here
  // type DataTypeKeys = keyof DataType;
  type DataTypeKeys = keyof DataType | `total${Capitalize<keyof DataType>}`;
  const handleInputChange = (
    value: number,
    index: number,
    type: DataTypeKeys
  ) => {
    const newData: DataType[] = [...data];

    const totalKey = `total${
      type.charAt(0).toUpperCase() + type.slice(1)
    }` as const;

    newData[index]["type"] = value as never;
    newData[index]["totalKey"] = calculateTotal(type, newData);

    setData(newData);
  };

  const calculateTotal = (type: DataTypeKeys, newData: DataType[]) => {
    return newData.reduce(
      (acc, item) => acc + Number(item[type as keyof DataType]),
      0
    );
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>合　　計</Table.Summary.Cell>
            <Table.Summary.Cell colSpan={2} index={1}>
              <InputNumber
                style={{ width: "100%" }}
                readOnly
                value={calculateTotal("income", data)}
              />
            </Table.Summary.Cell>
            <Table.Summary.Cell colSpan={2} index={3}>
              <InputNumber
                style={{ width: "100%" }}
                readOnly
                value={calculateTotal("expense", data)}
              />
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />
      <Divider />
    </div>
  );
};

export default WorkTimeCalculatorTable;
