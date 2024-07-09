import React, { useState } from "react";
import { Divider, Table, Select, Input } from "antd";
import type { TableColumnsType } from "antd";
import CorporateSelector from "../corporateselector";
import { SubmitCancelButtons } from "../sub-canbtn";

const { Option } = Select;

interface DataType {
  key: React.Key;
  jobTitle: string;
  name: string;
  nameKana: string;
  japaneseYear: string;
  year: number;
  month: number;
  day: number;
  gender: string;
}

const FormTap6: React.FC = () => {
  // Initialize state for data
  const [data, setData] = useState<DataType[]>(getInitialData());

  // Function to get initial data
  function getInitialData(): DataType[] {
    const initialData: DataType[] = [];
    for (let i = 0; i < 50; i++) {
      initialData.push({
        key: i,
        jobTitle: "",
        name: "",
        nameKana: "",
        gender: "",
        japaneseYear: "",
        year: 0,
        month: 0,
        day: 0,
      });
    }
    return initialData;
  }

  // Handle input changes
  const handleJobTitleChange = (value: string, key: React.Key) => {
    updateData("jobTitle", value, key);
  };

  const handleNameChange = (value: string, key: React.Key) => {
    updateData("name", value, key);
  };

  const handleNameKanaChange = (value: string, key: React.Key) => {
    updateData("nameKana", value, key);
  };

  const handleGenderChange = (value: string, key: React.Key) => {
    updateData("gender", value, key);
  };

  const handleYearChange = (value: string | number, key: React.Key) => {
    updateData("year", value, key); // Update 'year' field
  };

  const handleMonthChange = (value: string | number, key: React.Key) => {
    updateData("month", value, key); // Update 'month' field
  };

  const handleDayChange = (value: string | number, key: React.Key) => {
    updateData("day", value, key); // Update 'day' field
  };

  // Function to update data
  const updateData = (
    field: keyof DataType,
    value: string | number,
    key: React.Key
  ) => {
    setData((prevData) => {
      const newData: DataType[] = prevData.map((item) =>
        item.key === key ? { ...item, [field]: value } : item
      );
      console.log(`${field} changed to ${value} for record with key ${key}`);
      return newData;
    });
  };

  // Define table columns
  const columns: TableColumnsType<DataType> = [
    {
      title: "役職名",
      dataIndex: "jobTitle",
      key: "jobTitle",
      width: 100,
      fixed: "left",
      align: "center",
      render: (jobTitle: string, record: DataType) => (
        <Input
          style={{ width: "100%" }}
          value={jobTitle}
          onChange={(e) => handleJobTitleChange(e.target.value, record.key)}
          placeholder="役職名"
        />
      ),
    },
    {
      title: "氏名",
      dataIndex: "name",
      key: "name",
      width: 100,
      render: (name: string, record: DataType) => (
        <Input
          style={{ width: "100%" }}
          value={name}
          onChange={(e) => handleNameChange(e.target.value, record.key)}
          placeholder="氏名"
        />
      ),
    },
    {
      title: "フリガナ",
      dataIndex: "nameKana",
      key: "nameKana",
      width: 100,
      render: (nameKana: string, record: DataType) => (
        <Input
          style={{ width: "100%" }}
          value={nameKana}
          onChange={(e) => handleNameKanaChange(e.target.value, record.key)}
          placeholder="フリガナ"
        />
      ),
    },
    {
      title: "性別",
      dataIndex: "gender",
      key: "gender",
      width: 80,
      fixed: "right",
      align: "center",
      render: (gender: string, record: DataType) => (
        <Select
          style={{ width: 60 }}
          defaultValue={gender}
          onChange={(value) => handleGenderChange(value, record.key)}
          placeholder="性別"
        >
          <Option value="女">女</Option>
          <Option value="男">男</Option>
        </Select>
      ),
    },
    {
      title: "生年月日",
      dataIndex: "birthday",
      key: "birthday",
      width: 160,
      align: "center",
      render: (_: any, record: DataType) => (
        <Input.Group compact>
          <Select
            style={{ width: "30%" }}
            value={
              record.japaneseYear !== undefined
                ? record.japaneseYear
                : undefined
            }
            onChange={(value) => handleYearChange(value, record.key)}
          >
            <Option value="大正">大正</Option>
            <Option value="昭和">昭和</Option>
            <Option value="平成">平成</Option>
            <Option value="令和">令和</Option>
          </Select>

          <Input
            style={{ width: "25%" }}
            type="number"
            value={record.year}
            onChange={(e) => handleYearChange(e.target.value, record.key)}
            placeholder="年"
          />
          <Input
            style={{ width: "21%" }}
            type="number"
            value={record.month}
            onChange={(e) => handleMonthChange(e.target.value, record.key)}
            placeholder="月"
          />
          <Input
            style={{ width: "21%" }}
            type="number"
            value={record.day}
            onChange={(e) => handleDayChange(e.target.value, record.key)}
            placeholder="日"
          />
        </Input.Group>
      ),
    },
  ];

  return (
    <>
      <Divider>役員名簿</Divider>

      <div>
        <p>様式第４号 別添４－４</p>
        <br />
      </div>

      <CorporateSelector />

      <Table columns={columns} dataSource={data} bordered size="middle" />

      <br />
      <div>
        <p>※役員全員を記載してください。</p>
        <br />
        <p>
          ※この役員名簿により収集した個人情報については、この補助金からの暴力団排除のため福岡県警察への照会確認に使用します。
        </p>
      </div>
      <SubmitCancelButtons onSubmit={() => {}} onCancel={() => {}} />
    </>
  );
};

export default FormTap6;
