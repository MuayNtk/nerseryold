"use client";

import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

interface CustomTextAreaProps {
  rows?: number;
  placeholder?: string;
  maxLength?: number;
  width?: string;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  rows = 4,
  placeholder,
  maxLength,
  width,
}) => (
  <>
    <TextArea
      rows={rows}
      placeholder={placeholder}
      maxLength={maxLength}
      style={{ width }}
    />
    <br />
    <br />
  </>
);

export default CustomTextArea;
