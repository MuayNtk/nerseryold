import React from "react";
import { Table, InputNumber } from "antd";

const InformationInputTable2: React.FC = () => {
  const dataSource1 = [
    { key: "1", label: "利用定員数", input: 0 },
    { key: "2", label: "年齢別児童数", input: 0 },
    { key: "3", label: "４歳児以上児", input: 0 },
    { key: "4", label: "３歳児", input: 0 },
    { key: "5", label: "１、２歳児", input: 0 },
    { key: "6", label: "０歳児", input: 0 },
  ];

  const columns1 = [
    {
      title: " ",
      dataIndex: "label",
      key: "label",
      width: "100%",
    },
    {
      title: " ",
      dataIndex: "input",
      key: "input",
      width: "100%",
      render: (_text: string, record: any) => (
        <InputNumber
          min={0}
          defaultValue={0}
          style={{ width: "80px" }}
          onChange={(value) => console.log(value)}
        />
      ),
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Table
        dataSource={dataSource1}
        columns={columns1}
        pagination={false}
        showHeader={false}
      />
    </div>
  );
};

export default InformationInputTable2;
