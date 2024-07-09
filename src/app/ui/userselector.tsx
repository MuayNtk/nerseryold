"use client";

import React from "react";
import { Select } from "antd";

interface UserSelectorProps {
  label?: string;
  width?: number;
}

const UserSelector: React.FC<UserSelectorProps> = ({ label, width }) => {
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
      <label style={{ marginRight: "8px" }}>{label || "施設名: "}</label>
      <Select
        style={{ width: width }}
        showSearch
        placeholder="施設名を選択してください"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
          {
            value: "いちざきみんなの家",
            label: "いちざきみんなの家",
          },
          {
            value: "上田みんなの家",
            label: "上田みんなの家",
          },
          {
            value: "鈴木みんなの家",
            label: "鈴木みんなの家",
          },
        ]}
      />
    </div>
  );
};

export default UserSelector;
