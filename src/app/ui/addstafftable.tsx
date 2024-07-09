import React, { useState } from "react";
import { Table, Select, Input } from "antd";
import type { TableColumnsType } from "antd";
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

const AddStaffTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>(getInitialData());

  function getInitialData(): DataType[] {
    const initialData: DataType[] = [];
    for (let i = 0; i < 30; i++) {
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
    const yearValue = parseInt(value.toString(), 10);
    if (yearValue >= 1) {
      updateData("year", value, key);
    }
  };

  const handleMonthChange = (value: string | number, key: React.Key) => {
    // Validate that the value is between 1 and 12
    const monthValue = parseInt(value.toString(), 10);
    if (monthValue >= 1 && monthValue <= 12) {
      updateData("month", monthValue, key);
    }
  };

  const handleDayChange = (value: string | number, key: React.Key) => {
    // Validate that the value is between 1 and 31
    const dayValue = parseInt(value.toString(), 10);
    if (dayValue >= 1 && dayValue <= 31) {
      updateData("day", dayValue, key);
    }
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

  const columns: TableColumnsType<DataType> = [
    {
      title: "役職名",
      dataIndex: "jobTitle",
      key: "jobTitle",
      width: 120,
      fixed: "left",
      align: "center",
      render: (jobTitle: string, record: DataType) => (
        <>
          <Input
            style={{ width: "80%" }}
            value={jobTitle}
            onChange={(e) => handleJobTitleChange(e.target.value, record.key)}
            placeholder="役職名"
          />
        </>
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
          value={gender}
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
            value={record.japaneseYear}
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
      <Table columns={columns} dataSource={data} bordered size="middle" />
    </>
  );
};

export default AddStaffTable;
