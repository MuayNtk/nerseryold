"use client";

import React, { ReactNode, useState } from "react";
import { Table, Checkbox, InputNumber, Input } from "antd";
import { ColumnType } from "antd/es/table";
const { TextArea } = Input;

interface SurveyItem {
  key: string;
  task: ReactNode;
  frequency: number;
  choices?: ReactNode;
  checked?: boolean;
}

const SurveyForm: React.FC = () => {
  const [data, setData] = useState<SurveyItem[]>([
    { key: "1", task: "園外活動における見守り等", frequency: 0 },
    {
      key: "2",
      task: "保育施設，遊ぶ場所，遊具等の消毒又は清掃",
      frequency: 0,
    },
    { key: "3", task: "給食の配膳又は片付け", frequency: 0 },
    { key: "4", task: "寝具の用意又は片付け", frequency: 0 },
    {
      key: "5",
      task: "外国人の児童の保護者等との意思疎通に係る通訳又は翻訳",
      frequency: 0,
    },
    {
      key: "6",
      task: "その他，保育士の負担軽減に資する業務（休憩・事務時間の確保等）",
      frequency: 0,
      choices: (
        <>
          <div>
            <p>
              その他，保育士の負担軽減に資する業務（休憩・事務時間の確保等）
            </p>
          </div>
          <TextArea
            rows={2}
            placeholder="ここに内容を記入してください"
            maxLength={300}
            style={{ marginBottom: "10px" }}
          />
        </>
      ),
    },
  ]);

  const handleCheckboxChange = (key: string) => {
    const newData = data.map((item) =>
      item.key === key ? { ...item, checked: !item.checked } : item
    );
    setData(newData);
  };

  const handleFrequencyChange = (key: string, value: number) => {
    const newData = data.map((item) =>
      item.key === key ? { ...item, frequency: value } : item
    );
    setData(newData);
  };

  const columns: ColumnType<SurveyItem>[] = [
    {
      title: "該当",
      dataIndex: "checked",
      key: "checked",
      render: (_text: any, record: { key: string }) => (
        <Checkbox onChange={() => handleCheckboxChange(record.key)} />
      ),
    },
    {
      title: "従事する業務",
      dataIndex: "task",
      key: "task",
      render: (_text: any, record: SurveyItem): React.ReactNode => {
        if (record.key === "6") {
          return <>{record.choices}</>;
        } else {
          return <span>{record.task}</span>;
        }
      },
    },
    {
      title: "従事回数の目安",
      dataIndex: "frequency",
      key: "frequency",
      render: (_text: any, record: { frequency: any; key: string }) => (
        <>
          <InputNumber
            min={1}
            max={5}
            value={record.frequency}
            onChange={(value) => handleFrequencyChange(record.key, value)}
          />
        </>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} pagination={false} />;
};

export default SurveyForm;
