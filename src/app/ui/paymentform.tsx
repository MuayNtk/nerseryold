import React, { useState } from "react";
import { Input, Checkbox, Table } from "antd";
import { ValueType } from "rc-input/lib/interface";
import { CheckboxValueType } from "antd/es/checkbox/Group";

interface FormData {
  bankName: string;
  bank: string;
  branch: CheckboxValueType[];
  accountType: string;
  type: CheckboxValueType[];
  accountNumber: string;
  accountHolder: string;
}
const PaymentForm: React.FC = () => {
  const handleInputChange = (
    key: keyof FormData,
    value: any,
    subKey?: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: Array.isArray(prevData[key])
        ? value
        : subKey
        ? { ...(prevData[key] as Record<string, any>), [subKey]: value }
        : value.target.value,
    }));
  };

  const [formData, setFormData] = useState<FormData>({
    bankName: "",
    bank: "",
    branch: [],
    accountType: "",
    type: [],
    accountNumber: "",
    accountHolder: "",
  });

  const columns = [
    {
      title: "金融機関名",
      dataIndex: "bankName",
      key: "bankName",
      render: (text: ValueType) => (
        <Input
          value={text}
          onChange={(e) => handleInputChange("bankName", e.target.value)}
        />
      ),
    },
    {
      title: "銀行",
      dataIndex: "bank",
      key: "bank",
      render: (text: ValueType) => (
        <Input
          value={text}
          onChange={(e) => handleInputChange("bank", e.target.value)}
        />
      ),
    },
    {
      title: "本店・支店",
      dataIndex: "branch",
      key: "branch",
      render: (text: CheckboxValueType[] | undefined) => (
        <Checkbox.Group
          options={["本店", "支店"]}
          value={text}
          onChange={(checkedValues) =>
            handleInputChange("branch", checkedValues)
          }
        />
      ),
    },
    {
      title: "預金種別",
      dataIndex: "accountType",
      key: "accountType",
      render: (text: ValueType) => (
        <Input
          value={text}
          onChange={(e) => handleInputChange("accountType", e.target.value)}
        />
      ),
    },
    {
      title: "普通・当座",
      dataIndex: "type",
      key: "type",
      render: (text: CheckboxValueType[] | undefined) => (
        <Checkbox.Group
          options={["普通", "当座"]}
          value={text}
          onChange={(checkedValues) => handleInputChange("type", checkedValues)}
        />
      ),
    },
    {
      title: "口座番号",
      dataIndex: "accountNumber",
      key: "accountNumber",
      render: (text: ValueType) => (
        <Input
          value={text}
          onChange={(e) => handleInputChange("accountNumber", e.target.value)}
        />
      ),
    },
    {
      title: "口座名義（カナ）",
      dataIndex: "accountHolder",
      key: "accountHolder",
      render: (text: ValueType) => (
        <Input
          value={text}
          onChange={(e) => handleInputChange("accountHolder", e.target.value)}
        />
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={[formData]} pagination={false} />
    </div>
  );
};

export default PaymentForm;
