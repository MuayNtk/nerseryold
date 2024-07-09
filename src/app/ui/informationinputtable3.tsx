import React from "react";
import { Table, Select } from "antd";

const dataSource = [
  { key: "a", label: "年齢別配置基準による職員数" },
  { key: "a1", label: "4歳以上児" },
  { key: "a2", label: "3歳児" },
  { key: "a3", label: "3歳児配置改善加算" },
  { key: "a4", label: "１、２歳児" },
  { key: "a5", label: "０歳児" },
  { key: "aTotal", label: "小計（小数点第一位四捨五入）" },
  { key: "b", label: "保育標準時間認定の児童" },
  { key: "c", label: "主任保育士専任加算" },
  { key: "d", label: "事務職員雇上加算" },
  { key: "e", label: "休日保育加算" },
  { key: "f", label: "チーム保育推進加算" },
  { key: "g", label: "栄養管理加算（配置）" },
  { key: "total", label: "利用定員数に基づく職員数" },
  { key: "sum", label: "合計" },
  { key: "rounded", label: "職員数（1人未満端数　四捨五入）" },
];

const columns = [
  {
    title: " ",
    dataIndex: "label",
    key: "label",
    width: "30%",
    render: (text: any, record: { label: any }) => record.label,
  },
  {
    title: "本園分",
    children: [
      {
        title: "選択項目",
        dataIndex: "本園分",
        key: "本園分",
        render: (text: any, record: any) =>
          record.key !== "a5" &&
          record.key !== "a4" &&
          record.key !== "aTotal" &&
          record.key !== "total" &&
          record.key !== "sum" &&
          record.key !== "rounded" ? (
            <Select
              defaultValue="なし"
              onChange={(value) => {
                // Handle the change
              }}
            >
              <Select.Option value="あり">あり</Select.Option>
            </Select>
          ) : null,
      },
      {
        title: " ",
        dataIndex: "本園分",
        key: " ",
        render: () => "   ",
      },
      {
        title: "職員数（自動計算）",
        dataIndex: "本園分",
        key: " ",
        render: () => "",
      },
    ],
  },
  {
    title: "選択不要",
    children: [
      {
        title: "選択項目",
        dataIndex: "選択不要",
        key: "選択不要",
        render: (text: any, record: any) =>
          record.key !== "a5" &&
          record.key !== "a4" &&
          record.key !== "aTotal" &&
          record.key !== "total" &&
          record.key !== "sum" &&
          record.key !== "rounded" ? (
            <Select
              defaultValue="なし"
              onChange={(value) => {
                return value;
              }}
            >
              <Select.Option value="あり">あり</Select.Option>
            </Select>
          ) : null,
      },
      {
        title: " ",
        dataIndex: "選択不要",
        key: " ",
        render: () => "   ",
      },
      {
        title: "職員数（自動計算）",
        dataIndex: "選択不要",
        key: " ",
        render: () => "",
      },
    ],
  },
];

const InformationInputTable3: React.FC = () => {
  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};

export default InformationInputTable3;
