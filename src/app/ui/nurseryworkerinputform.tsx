"use client";

import React, { useState } from "react";
import { Form, Input, InputNumber, Select, Button } from "antd";

const { Option } = Select;

const StaffAssignForm: React.FC = () => {
  const [names, setNames] = useState<string[]>([""]);
  const [occupations, setOccupations] = useState<string[]>([""]);

  const handleAddName = () => {
    setNames([...names, ""]);
    setOccupations([...occupations, ""]);
  };

  const handleNameChange = (index: number, value: string) => {
    const updatedNames = [...names];
    updatedNames[index] = value;
    setNames(updatedNames);
  };

  const handleOccupationChange = (index: number, value: string) => {
    const updatedOccupations = [...occupations];
    updatedOccupations[index] = value;
    setOccupations(updatedOccupations);
  };

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
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

      <Form.Item label="職種">
        <Input.Group compact>
          {occupations.map((occupation, index) => (
            <Select
              key={index}
              style={{ width: "70%", marginRight: "8px", marginTop: "8px" }}
              value={occupation}
              onChange={(value) => handleOccupationChange(index, value)}
            >
              <Option value="保育支援者">保育支援者</Option>
              <Option value="調理員">調理員</Option>
              <Option value="事務員">事務員</Option>
              <Option value="栄養士">栄養士</Option>
              <Option value="その他">その他</Option>
            </Select>
          ))}
        </Input.Group>
      </Form.Item>

      <Form.Item label="保育士以外の数">
        <InputNumber style={{ width: "70%" }} min={0} suffix="名" />
      </Form.Item>
    </Form>
  );
};

export default StaffAssignForm;
