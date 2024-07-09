"use client";

import React from "react";
import { useState } from "react";
import { Form, Input, Checkbox, Divider } from "antd";
import type { FormItemProps } from "antd";
import { Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { SubmitCancelButtons } from "../sub-canbtn";

const { Text } = Typography;

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)].join(".") : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const options = [
  { label: "時間外勤務の縮減", value: "choice1" },
  { label: "休暇取得の促進", value: "choice2" },
  { label: "業務の軽減", value: "choice3" },
  {
    label: (
      <span>
        その他 具体的内容: <Input style={{ width: "500px" }} />
      </span>
    ),
    value: "choice4",
  },
];

const FormTap4: React.FC = () => {
  const [selectionType, setSelectionType] = useState<"checkbox">("checkbox");
  const onFinish = (value: object) => {
    console.log(value);
  };

  return (
    <>
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <MyFormItemGroup prefix={["user"]}>
          <MyFormItemGroup prefix={["name"]}>
            <MyFormItem name="inputBox1" label="１　職員の雇用管理について">
              <TextArea rows={4} style={{ width: "500px" }} />
            </MyFormItem>
            <MyFormItem name="inputBox2" label="２　勤務環境改善を行う項目">
              <Text italic>
                （１）保育士の勤務環境改善を行う項目にチェックをしてください（複数選択可）
                ※その他の場合、具体的な内容を記載して下さい。
              </Text>
              <br />
              <Checkbox.Group options={options} style={{ display: "block" }} />
            </MyFormItem>
            <MyFormItem
              name="inputBox3"
              label="(２）保育士の勤務改善を行う項目の具体的な改善内容及び方法について以下の欄に記載してください。"
            >
              <p>改善前:</p>
              <TextArea rows={4} style={{ width: "500px" }} />
            </MyFormItem>
            <br />
            <p>改善後:</p>
            <TextArea rows={4} style={{ width: "500px" }} />
          </MyFormItemGroup>
        </MyFormItemGroup>
      </Form>
      <Divider />
      <SubmitCancelButtons onSubmit={() => {}} onCancel={() => {}} />
    </>
  );
};

export default FormTap4;
