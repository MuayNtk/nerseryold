"use client";

import React from "react";
import { Select } from "antd";

const CorporateSelector: React.FC = () => {
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
    <div>
      <label style={{ marginRight: "8px" }}>法人名:</label>
      <Select
        showSearch
        style={{ width: 400 }}
        placeholder="法人名を選択してください"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
          {
            value: "社会福祉法人つばさ福祉会",
            label: "社会福祉法人つばさ福祉会",
          },
          {
            value: "B社会福祉法人つばさ福祉会",
            label: "B社会福祉法人つばさ福祉会",
          },
          {
            value: "C社会福祉法人つばさ福祉会",
            label: "C社会福祉法人つばさ福祉会",
          },
        ]}
      />
      <br />
      <br />
    </div>
  );
};

export default CorporateSelector;
