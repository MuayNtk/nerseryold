import React from "react";
import { Divider, Table, Input } from "antd";
import type { TableColumnsType } from "antd";
import UserSelector from "../userselector";
import { SubmitCancelButtons } from "../sub-canbtn";
import TextArea from "antd/es/input/TextArea";

interface DataType {
  key: React.Key;
  name: string;
  hobbie: string;
  date: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "参加者氏名",
    dataIndex: "name",
    render: (text, record) => (
      <Input
        value={record.name}
        onChange={(e) => handleInputChange(e, record, "name")}
      />
    ),
  },
  {
    title: "職種",
    dataIndex: "hobbie",
    render: (text, record) => (
      <Input
        value={record.hobbie}
        onChange={(e) => handleInputChange(e, record, "hobbie")}
      />
    ),
  },
  {
    title: "研修実施日",
    dataIndex: "date",
    render: (text, record) => (
      <Input
        value={record.date}
        onChange={(e) => handleInputChange(e, record, "date")}
      />
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "",
    hobbie: "",
    date: "",
  },
  {
    key: "2",
    name: "",
    hobbie: "",
    date: "",
  },
  {
    key: "3",
    name: "",
    hobbie: "",
    date: "",
  },
];

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  record: DataType,
  field: keyof DataType
) => {
  // Handle input changes here
  console.log(
    `Input value for ${field} in row ${record.key}: ${e.target.value}`
  );
};

export const FormTap5: React.FC = () => (
  <>
    <p>様式第４号　別添４－３</p>
    <Divider>研修実施報告書</Divider>
    <div>
      <UserSelector />
    </div>
    <br />

    <div>
      <p>施設長名</p>
      <Input style={{ width: "400px" }} />
    </div>
    <br />
    <div>
      <p>下記のとおり，交通安全に関する研修を実施したので，報告します。</p>
    </div>
    <br />
    <p>１　参加者及び実施日</p>
    <br />

    <Table
      columns={columns}
      dataSource={data}
      size="middle"
      pagination={false} // You may want to add pagination based on your use case
    />
    <br />

    <div>
      <p>２　研修概要:</p>
      <TextArea rows={4} style={{ width: "500px" }} />
    </div>
    <Divider />
    <div>
      <SubmitCancelButtons
        onSubmit={() => console.log("Submit")}
        onCancel={() => console.log("Cancel")}
      />
    </div>
  </>
);

export default FormTap5;
