"use client";

import React, { ReactNode, useState } from "react";
import { Divider, Radio, Table, Input, Typography } from "antd";
import type { TableColumnsType } from "antd";
import CustomTextArea from "../customtextarea";
import UserSelector from "../userselector";
import { SubmitCancelButtons } from "../sub-canbtn";

interface DataType {
  key: React.Key;
  choices: string| ReactNode;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "従事する業務",
    dataIndex: "choices",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "従事回数の目安",
    dataIndex: "number",
    render: (text: string, record: DataType) => (
      <div>
        <label>回数：</label>
        <Input
          type="number"
          value={text}
          placeholder="回数を入力してください"
          onChange={(e) => {
            // Handle the input change here and update the data accordingly
          }}
        />
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    choices: "園外活動における見守り等",
  },
  {
    key: "2",
    choices: "保育施設、遊ぶ場所、遊具等の消毒又は清掃",
  },
  {
    key: "3",
    choices: "給食の配膳又は片付け",
  },
  {
    key: "4",
    choices: "寝具の用意又は片付け",
  },
  {
    key: "5",
    choices: "外国人の児童の保護者等との意思疎通に係る通訳又は翻訳",
  },
  {
    key: "6",
    choices: (
      <>
        その他、保育士の負担軽減に資する業務
        <CustomTextArea
          rows={3}
          placeholder="ここに内容を記入してください"
          maxLength={250}
        />
      </>
    ),
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.key === "Disabled User", // Use record.key for the correct comparison
    name: record.key.toString(),
  }),
};
const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  record: DataType
) => {
  // Handle input changes here
  console.log(`Input value for ${record.key}: ${e.target.value}`);
};

const handleCancel = () => {
  // Handle cancel button click
  console.log("Cancel button clicked");
};

const handleSubmit = () => {
  // Handle submit button click
  console.log("Submit button clicked");
};

const { Text } = Typography;

const FormTap3: React.FC = () => {
  const [selectionType, setSelectionType] = useState<"checkbox">("checkbox");

  return (
    <div>
      <p style={{ fontSize: "16px", fontWeight: "bold" }}>
        様式第４号　別添４－２:
        実施報告書①（補助対象職員の勤務内容等確認予定表）
      </p>
      <br />
      <div>
        <UserSelector />
      </div>
      <br />
      <div>
        <label style={{ display: "block", marginBottom: "8px" }}>氏名：</label>
        <Input style={{ maxWidth: "400px" }} placeholder="氏名" />
      </div>

      <Divider />

      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">チエックしてください</Radio>
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <div>
        <Text type="warning">
          （注）１　その他、保育士の負担軽減に資する業務を選んだ場合，（　　　　　　　　）内に従事する業務を記載すること
        </Text>
      </div>

      <br />
      <SubmitCancelButtons onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default FormTap3;
