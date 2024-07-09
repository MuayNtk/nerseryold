import React from "react";
import { Space, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

interface DataTypes {
  key: React.Key;
  schoolName: string;
  schoolNumber: number;
  additionRate: number;
  basicBase: number;
  improvementBase: number;
  averageAge: number;
  careerPath: string;
  A: number;
  B: number;
  fourYearsAbove: number;
  threeYear: number;
  oneAndTwoYear: number;
  infant: number;
  relevant: boolean;
  relevantNumber: number;
  supervisor: boolean;
  educationSupport: boolean;
  officeWorker: boolean;
  nutritionAdmin: string;
  nursingDirector: string;
}

const data: DataTypes[] = [
  {
    key: "1",
    schoolName: "school1",
    schoolNumber: 1,
    additionRate: 10,
    basicBase: 10,
    improvementBase: 10,
    averageAge: 10,
    careerPath: "career1",
    A: 10,
    B: 10,
    fourYearsAbove: 10,
    threeYear: 10,
    oneAndTwoYear: 10,
    infant: 10,
    relevant: true,
    relevantNumber: 10,
    supervisor: true,
    educationSupport: true,
    officeWorker: true,
    nutritionAdmin: "nutrition1",
    nursingDirector: "nursing1",
  },
];

const CommissionFeesForm: React.FC = () => {
  return (
    <>
      <div>
        <Table dataSource={data}>
          <ColumnGroup title="※入力してください">
            <Column
              title="園番号"
              dataIndex="schoolNumber"
              key="schoolNumber"
            />
            <Column title="施設名" dataIndex="schoolName" key="schoolName" />
          </ColumnGroup>
          <ColumnGroup title="処遇改善等加算Ⅰ（％）">
            <Column
              title="加算率（%）"
              dataIndex="additionRate"
              key="additionRate"
            />
            <Column title="基礎分" dataIndex="basicRate" key="basicRate" />
            <Column
              title="賃金改善要件分"
              dataIndex="improvementBase"
              key="improvementBase"
            />
            <Column
              title="平均経験年数"
              dataIndex="averageAge"
              key="averageAge"
            />
            <Column
              title="キャリアパス"
              dataIndex="careerPath"
              key="careerPath"
            />
          </ColumnGroup>
          <ColumnGroup title="処遇改善等加算Ⅱ">
            <Column title="A" dataIndex="A" key="A" />
            <Column title="B" dataIndex="B" key="B" />
          </ColumnGroup>
          <ColumnGroup title="処遇改善等加算Ⅲ">
            <Column
              title="4歳以上"
              dataIndex="fourYearsAbove"
              key="fourYearsAbove"
            />
            <Column title="3歳" dataIndex="threeYear" key="threeYear" />
            <Column
              title="1歳・2歳"
              dataIndex="oneAndTwoYear"
              key="oneAndTwoYear"
            />
            <Column title="乳児" dataIndex="infant" key="infant" />
          </ColumnGroup>
        </Table>
      </div>
      <br />
      <br />
      <div>
        <Table dataSource={data}>
          <ColumnGroup title="その他加算">
            <Column title="３歳" dataIndex="threeYear" key="threeYear" />
            <ColumnGroup title="チーム保育">
              <Column title="該当有無" dataIndex="relevant" key="relevant" />
              <Column
                title="加配人数"
                dataIndex="relevantNumber"
                key="relevantNumber"
              />
            </ColumnGroup>
            <Column title="主任専任" dataIndex="supervisor" key="supervisor" />
            <Column
              title="療育支援"
              dataIndex="educationSupport"
              key="educationSupport"
            />
            <Column
              title="事務職員"
              dataIndex="officeWorker"
              key="officeWorker"
            />
            <Column
              title="栄養管理"
              dataIndex="nutritionAdmin"
              key="nutritionAdmin"
            />
            <Column
              title="施設長"
              dataIndex="nursingDirector"
              key="nursingDirector"
            />
          </ColumnGroup>
        </Table>
        <br />
        <p style={{ fontSize: "13px", color: "red", float: "right" }}>
          ※↑処遇Ⅰの「平均経験年数」が１２年以上であること
        </p>
      </div>
    </>
  );
};

export default CommissionFeesForm;
