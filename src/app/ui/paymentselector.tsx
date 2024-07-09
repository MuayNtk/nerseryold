"use client";

import React from "react";
import { Select } from "antd";

const PaymentSelector: React.FC = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <label style={{ marginRight: "8px" }}>保育施設名:</label>
      <Select
        showSearch
        style={{ width: 400 }}
        placeholder="補助金を選択してください"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
          {
            value: "概算払",
            label: "概算払",
          },
          {
            value: "精算払",
            label: "精算払",
          },
        ]}
      />
    </div>
  );
};

export default PaymentSelector;
