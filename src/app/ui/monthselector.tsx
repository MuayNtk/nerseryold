"use client";

import React from "react";
import { Select, Space } from "antd";
import type { SelectProps } from "antd";
import { ConfigProvider } from "antd";

const { Option } = Select;

const options: SelectProps["options"] = [];

for (let i = 1; i < 13; i++) {
  options.push({
    value: i.toString(),
    label: i.toString(),
  });
}

const handleChange = (value: string) => {
  console.log(`Selected: ${value}`);
};
interface MonthSelectorProps {
  selectedMonth: number;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({ selectedMonth }) => {
  return (
    <>
      <br />
      <br />
      <Space direction="vertical" style={{ width: "100%" }}>
        <Select defaultValue="1" onChange={handleChange} style={{ width: 100 }}>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Space>
    </>
  );
};

export default MonthSelector;
