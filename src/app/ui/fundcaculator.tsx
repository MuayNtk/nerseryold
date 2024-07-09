import React, { useState } from "react";
import { Table, InputNumber } from "antd";

interface DataItem {
  key: string;
  項目: string;
  "4月": number;
  "5月": number;
  "6月": number;
  "7月": number;
  "8月": number;
  "9月": number;
  "10月": number;
  "11月": number;
  "12月": number;
  "1月": number;
  "2月": number;
  "3月": number;
  合計: number;
}

const FundCalculator = () => {
  const [data, setData] = useState<DataItem[]>([
    {
      key: "1",
      項目: "補助金",
      "4月": 0,
      "5月": 0,
      "6月": 0,
      "7月": 0,
      "8月": 0,
      "9月": 0,
      "10月": 0,
      "11月": 0,
      "12月": 1036800,
      "1月": 0,
      "2月": 0,
      "3月": 0,
      合計: 0,
    },
    {
      key: "2",
      項目: "自己資金",
      "4月": 0,
      "5月": 0,
      "6月": 0,
      "7月": 0,
      "8月": 0,
      "9月": 0,
      "10月": 0,
      "11月": 0,
      "12月": 0,
      "1月": 0,
      "2月": 0,
      "3月": 0,
      合計: 0,
    },
    {
      key: "3",
      項目: "収入計",
      "4月": 0,
      "5月": 0,
      "6月": 0,
      "7月": 0,
      "8月": 0,
      "9月": 0,
      "10月": 0,
      "11月": 0,
      "12月": 1036800,
      "1月": 0,
      "2月": 0,
      "3月": 0,
      合計: 0,
    },
    {
      key: "4",
      項目: "人件費等",
      "4月": 86400,
      "5月": 86400,
      "6月": 86400,
      "7月": 86400,
      "8月": 86400,
      "9月": 86400,
      "10月": 86400,
      "11月": 86400,
      "12月": 86400,
      "1月": 86400,
      "2月": 86400,
      "3月": 86400,
      合計: 0,
    },
    {
      key: "5",
      項目: "支出計",
      "4月": 86400,
      "5月": 86400,
      "6月": 86400,
      "7月": 86400,
      "8月": 86400,
      "9月": 86400,
      "10月": 86400,
      "11月": 86400,
      "12月": 86400,
      "1月": 86400,
      "2月": 86400,
      "3月": 86400,
      合計: 0,
    },
    {
      key: "6",
      項目: "差引収支",
      "4月": -86400,
      "5月": -86400,
      "6月": -86400,
      "7月": -86400,
      "8月": -86400,
      "9月": -86400,
      "10月": -86400,
      "11月": -86400,
      "12月": 950400,
      "1月": -86400,
      "2月": -86400,
      "3月": -86400,
      合計: 0,
    },
    {
      key: "7",
      項目: "累計",
      "4月": 0,
      "5月": 0,
      "6月": 0,
      "7月": 0,
      "8月": 0,
      "9月": 0,
      "10月": 0,
      "11月": 0,
      "12月": 0,
      "1月": 0,
      "2月": 0,
      "3月": 0,
      合計: 0,
    },
  ]);

  const handleInputChange = (key: string, month: string, value: number) => {
    const newData = data.map((item) =>
      item.key === key ? { ...item, [month]: value } : item
    );
    setData(newData);
  };

  const columns = [
    {
      title: "項目",
      dataIndex: "項目",
      key: "項目",
      width: 120,
      style: { fontWeight: "bold" },
    },
    {
      title: "月別",
      children: Array.from({ length: 12 }, (_, index) => ({
        title: `${((index + 3) % 12) + 1}月`,
        dataIndex: `${((index + 3) % 12) + 1}月`,
        key: `${((index + 3) % 12) + 1}月`,
        render: (text: any, record: { key: any }) => (
          <InputNumber
            value={text}
            onChange={(value) =>
              handleInputChange(
                record.key,
                `${((index + 4) % 12) + 1}月`,
                value
              )
            }
          />
        ),
        style: { background: "#f0f0f0", textAlign: "center", width: 80 },
      })),
    },
    {
      title: "合計",
      dataIndex: "合計",
      key: "合計",
      render: (_: any, record: DataItem) => {
        const total = Object.values(record)
          .slice(1, -1)
          .reduce((acc, value) => acc + (Number(value) || 0), 0);
        return <span>{total}</span>;
      },
      style: { fontWeight: "bold", textAlign: "center", width: 80 },
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      bordered
      scroll={{ x: "max-content" }}
    />
  );
};

export default FundCalculator;
