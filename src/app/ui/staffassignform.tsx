"use client";

import React, { useState } from "react";
import { Form, Input, DatePicker, InputNumber, Button, Space } from "antd";

const StaffAssignForm: React.FC = () => {
  const [names, setNames] = useState<string[]>([""]);

  const handleAddName = () => {
    setNames([...names, ""]);
  };

  const handleNameChange = (index: number, value: string) => {
    const updatedNames = [...names];
    updatedNames[index] = value;
    setNames(updatedNames);
  };

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="令和年度">
        <DatePicker
          picker="year"
          format="令和 YY 年"
          style={{ width: "70%" }}
          placeholder="選択してください"
        />
      </Form.Item>

      <Form.Item label="令和年月時点">
        <DatePicker
          format="令和 YY 年 MM 月"
          style={{ width: "70%" }}
          placeholder="選択してください"
        />
      </Form.Item>

      <Form.Item label="児童定員数">
        <InputNumber style={{ width: "70%" }} min={0} suffix="名" />
      </Form.Item>

      <Form.Item label="保育士">
        <Input style={{ width: "70%" }} suffix="名" />
      </Form.Item>

      <Form.Item label="氏名">
        <Input.Group compact>
          {names.map((name, index) => (
            <Input
              key={index}
              style={{ width: "70%", marginRight: "8px", marginTop: "8px" }}
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
            />
          ))}
        </Input.Group>
        <Button
          style={{ marginTop: "8px" }}
          type="dashed"
          onClick={handleAddName}
        >
          + Add Name
        </Button>
      </Form.Item>

      <Form.Item label="保育士数">
        <InputNumber style={{ width: "70%" }} min={0} suffix="名" />
      </Form.Item>
    </Form>
  );
};

export default StaffAssignForm;
