"use client";

import React, { useState } from "react";
import { Table, InputNumber, Space, Divider } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  laborCost: number;
  totalLaborCostA: number;
  subsidyLimitB: number;
  subsidyAmount: number;
}

type DataTypeKey = keyof DataType;

const CostCalculatorTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>([
    {
      key: "1",
      name: "User 1",
      laborCost: 0,
      totalLaborCostA: 0,
      subsidyLimitB: 0,
      subsidyAmount: 0,
    },
    {
      key: "2",
      name: "User 2",
      laborCost: 0,
      totalLaborCostA: 0,
      subsidyLimitB: 0,
      subsidyAmount: 0,
    },
    // ... Add more rows as needed
  ]);

  const columns = [
    {
      title: "氏名",
      dataIndex: "name" as DataTypeKey,
      key: "name",
    },
    {
      title: "人件費",
      dataIndex: "laborCost" as DataTypeKey,
      key: "laborCost",
      render: (text: any, record: DataType, index: number) => (
        <InputNumber
          suffix="円"
          min={0}
          style={{ width: "100%" }}
          onChange={(value) => handleInputChange(value as number, index, "laborCost")}
        />
      ),
    },
    {
      title: "人件費合計（A）",
      dataIndex: "totalLaborCostA" as DataTypeKey,
      key: "totalLaborCostA",
    },
    {
      title: "補助上限額（B）",
      dataIndex: "subsidyLimitB" as DataTypeKey,
      key: "subsidyLimitB",
    },
    {
      title: "補助金額（A）と（B）の少ない額",
      dataIndex: "subsidyAmount" as DataTypeKey,
      key: "subsidyAmount",
    },
  ];

  const handleInputChange = (
    value: number,
    index: number,
    type: DataTypeKey
  ) => {
    const newData = [...data];
    //newData[index][type] = value;
    newData[index].totalLaborCostA = calculateTotalLaborCostA(newData[index]);
    newData[index].subsidyAmount = calculateSubsidyAmount(newData[index]);
    setData(newData);
  };

  const calculateTotalLaborCostA = (item: DataType) => {
    return item.laborCost;
  };

  const calculateSubsidyAmount = (item: DataType) => {
    return Math.min(item.totalLaborCostA, item.subsidyLimitB);
  };

  return (
    <>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
        />
        <Divider />
      </div>
    </>
  );
};

export default CostCalculatorTable;
