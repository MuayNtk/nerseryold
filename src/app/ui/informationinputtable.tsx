import React from "react";
import { Descriptions, InputNumber, Select, Space, Table } from "antd";
import InformationInputTable2 from "./informationinputtable2";

const items = [
  {
    key: "1",
    label: " ",
    children: "分園の有無（選択してください）",
  },
  {
    key: "2",
    label: "選択",
    children: (
      <Select value="なし" onChange={(value) => {}}>
        <Select.Option value="あり">あり</Select.Option>
      </Select>
    ),
  },
  {
    key: "2",
    label: "本園",
    children: (
      <Space>
        <span>本園分を記入</span>
      </Space>
    ),
    span: 20,
  },
];

const dataSource2 = [
  { key: "1", label: "分園", input: "入力不要" },
  { key: "2", label: "", input: 0 },
  { key: "3", label: "", input: 0 },
  { key: "4", label: "", input: 0 },
  { key: "5", label: "", input: 0 },
  { key: "6", label: "", input: 0 },
];

const columns2 = [
  {
    title: "分園",
    dataIndex: "label",
    key: "label",
    width: "40%",
    render: (_text: string, record: any) =>
      record.input === "入力不要" ? (
        <span>{record.input}</span>
      ) : (
        <InputNumber
          min={0}
          defaultValue={0}
          style={{ width: "80px" }}
          onChange={(value) => console.log(value)}
        />
      ),
  },
];

const InformationInputTable: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 6, marginRight: "20px" }}>
        <Descriptions layout="vertical" bordered>
          {items.map(
            (item: {
              key: string;
              label:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
              span?: number;
              children:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
            }) => (
              <Descriptions.Item
                key={item.key}
                label={item.label}
                span={item.span}
              >
                {item.children}
              </Descriptions.Item>
            )
          )}
        </Descriptions>
        <InformationInputTable2 />
      </div>
      <div style={{ flex: 1 }}>
        <Table
          dataSource={dataSource2}
          columns={columns2}
          pagination={false}
          showHeader={true}
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default InformationInputTable;
