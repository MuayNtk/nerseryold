"use client";

import React from "react";
import { Button, Space } from "antd";

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => (
  <Button type="primary" onClick={onClick}>
    Submit
  </Button>
);

interface CancelButtonProps {
  onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => (
  <Button type="default" onClick={onClick}>
    Cancel
  </Button>
);

const SubmitCancelButtons: React.FC<{
  onSubmit: () => void;
  onCancel: () => void;
}> = ({ onSubmit, onCancel }) => (
  <Space size={8} style={{ float: "right", gap: "24px" }}>
    <SubmitButton onClick={onSubmit} />
    <CancelButton onClick={onCancel} />
  </Space>
);

export { SubmitButton, CancelButton, SubmitCancelButtons };
