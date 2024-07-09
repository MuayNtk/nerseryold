"use client";

import React, { ReactNode, useState } from "react";
import type { MenuProps, TableColumnsType } from "antd";
import {
  Button,
  Form,
  Input,
  Space,
  Dropdown,
  Table,
  Card,
  InputNumber,
  Typography,
  Checkbox,
} from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { DownOutlined } from "@ant-design/icons";
type LayoutType = Parameters<typeof Form>[0]["layout"];
const { Title, Text } = Typography;

interface columnHeaderData {
  key: React.Key | string;
  order: number | string;
  fullName: string;
  occupation: ReactNode;
  startDate: ReactNode;
  totalYear: ReactNode;
  total: ReactNode;
  remark: string;
  newStaff: boolean;
}

const improveWageChoice: MenuProps["items"] = [
  {
    key: 1,
    label: "適",
  },
  {
    key: 2,
    label: "否",
  },
];

const careerPathReqChoice: MenuProps["items"] = [
  {
    key: 1,
    label: "適",
  },
  {
    key: 2,
    label: "否",
  },
  {
    key: 3,
    label: "処遇Ⅱ",
  },
];

const era: MenuProps["items"] = [
  {
    key: "1",
    label: "令和",
  },
  {
    key: "2",
    label: "平成",
  },
  {
    key: "3",
    label: "昭和",
  },
];

const occupationList: MenuProps["items"] = [
  {
    key: 1,
    label: "施設長",
  },
  {
    key: 2,
    label: "副園長",
  },
  {
    key: 3,
    label: "教頭",
  },
  {
    key: 4,
    label: "主幹教諭",
  },
  {
    key: 5,
    label: "主任保育士",
  },
  {
    key: 6,
    label: "教諭",
  },
  {
    key: 7,
    label: "保育士",
  },
  {
    key: 8,
    label: "看護師",
  },
  {
    key: 9,
    label: "准看護師",
  },
  {
    key: 10,
    label: "調理士",
  },
  {
    key: 11,
    label: "調理士（栄養士）",
  },
  {
    key: 12,
    label: "栄養士",
  },
  {
    key: 13,
    label: "事務員",
  },
  {
    key: 14,
    label: "用務員",
  },
  {
    key: 15,
    label: "パート保育士",
  },
  {
    key: 16,
    label: "パート調理士",
  },
  {
    key: 17,
    label: "その他",
  },
];

const menuProps = {
  improveWageChoice,
  careerPathReqChoice,
  era,
  occupationList,
};

const columnData: columnHeaderData[] = [
  {
    key: "1",
    order: "1",
    fullName: "石井誠",
    occupation: (
      <Dropdown menu={{ items: occupationList }}>
        <Space>
          職種
          <DownOutlined />
        </Space>
      </Dropdown>
    ),
    startDate: (
      <Space style={{ width: "400px" }}>
        <Input
          addonBefore={
            <Dropdown menu={{ items: era }}>
              <Space>
                昭和
                <DownOutlined />
              </Space>
            </Dropdown>
          }
          defaultValue={4}
          addonAfter="年"
        />
        <Input defaultValue={2} addonAfter="月" />
        <Input defaultValue={1} addonAfter="日" />
      </Space>
    ),
    totalYear: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={4} addonAfter="年" />
        <Input defaultValue={1} addonAfter="月" />
      </Space>
    ),
    total: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={9} addonAfter="年" />
        <Input defaultValue={10} addonAfter="月" />
      </Space>
    ),
    remark: "",
    newStaff: true,
  },
  {
    key: "2",
    order: "2",
    fullName: "熊田里佳",
    occupation: (
      <Dropdown menu={{ items: occupationList }}>
        <Space>
          職種
          <DownOutlined />
        </Space>
      </Dropdown>
    ),
    startDate: (
      <Space style={{ width: "400px" }}>
        <Input
          addonBefore={
            <Dropdown menu={{ items: era }}>
              <Space>
                昭和
                <DownOutlined />
              </Space>
            </Dropdown>
          }
          defaultValue={4}
          addonAfter="年"
        />
        <Input defaultValue={2} addonAfter="月" />
        <Input defaultValue={1} addonAfter="日" />
      </Space>
    ),
    totalYear: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={14} addonAfter="年" />
        <Input defaultValue={10} addonAfter="月" />
      </Space>
    ),
    total: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={4} addonAfter="年" />
        <Input defaultValue={1} addonAfter="月" />
      </Space>
    ),
    remark: "",
    newStaff: true,
  },
  {
    key: "3",
    order: "3",
    fullName: "永田みさ",
    occupation: (
      <Dropdown menu={{ items: occupationList }}>
        <Space>
          職種
          <DownOutlined />
        </Space>
      </Dropdown>
    ),
    startDate: (
      <Space style={{ width: "400px" }}>
        <Input
          addonBefore={
            <Dropdown menu={{ items: era }}>
              <Space>
                昭和
                <DownOutlined />
              </Space>
            </Dropdown>
          }
          defaultValue={4}
          addonAfter="年"
        />
        <Input defaultValue={2} addonAfter="月" />
        <Input defaultValue={1} addonAfter="日" />
      </Space>
    ),
    totalYear: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={3} addonAfter="年" />
        <Input defaultValue={10} addonAfter="月" />
      </Space>
    ),
    total: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={4} addonAfter="年" />
        <Input defaultValue={1} addonAfter="月" />
      </Space>
    ),
    remark: "旧姓:藤井",
    newStaff: true,
  },
  {
    key: "4",
    order: "4",
    fullName: "齋藤麻代",
    occupation: (
      <Dropdown menu={{ items: occupationList }}>
        <Space>
          職種
          <DownOutlined />
        </Space>
      </Dropdown>
    ),
    startDate: (
      <Space style={{ width: "400px" }}>
        <Input
          addonBefore={
            <Dropdown menu={{ items: era }}>
              <Space>
                昭和
                <DownOutlined />
              </Space>
            </Dropdown>
          }
          defaultValue={4}
          addonAfter="年"
        />
        <Input defaultValue={2} addonAfter="月" />
        <Input defaultValue={1} addonAfter="日" />
      </Space>
    ),
    totalYear: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={6} addonAfter="年" />
        <Input defaultValue={10} addonAfter="月" />
      </Space>
    ),
    total: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={4} addonAfter="年" />
        <Input defaultValue={1} addonAfter="月" />
      </Space>
    ),
    remark: "旧姓:藤井",
    newStaff: true,
  },
  {
    key: "5",
    order: "5",
    fullName: "山下真央",
    occupation: (
      <Dropdown menu={{ items: occupationList }}>
        <Space>
          職種
          <DownOutlined />
        </Space>
      </Dropdown>
    ),
    startDate: (
      <Space style={{ width: "400px" }}>
        <Input
          addonBefore={
            <Dropdown menu={{ items: era }}>
              <Space>
                昭和
                <DownOutlined />
              </Space>
            </Dropdown>
          }
          defaultValue={4}
          addonAfter="年"
        />
        <Input defaultValue={2} addonAfter="月" />
        <Input defaultValue={1} addonAfter="日" />
      </Space>
    ),
    totalYear: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={4} addonAfter="年" />
        <Input defaultValue={1} addonAfter="月" />
      </Space>
    ),
    total: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={4} addonAfter="年" />
        <Input defaultValue={1} addonAfter="月" />
      </Space>
    ),
    remark: "",
    newStaff: true,
  },
];

for (let i = 6; i <= 110; i++) {
  columnData.push({
    key: `${i}`,
    order: `${i}`,
    fullName: "",
    occupation: (
      <Dropdown menu={{ items: occupationList }}>
        <Space>
          職種
          <DownOutlined />
        </Space>
      </Dropdown>
    ),
    startDate: (
      <Space style={{ width: "400px" }}>
        <Input
          addonBefore={
            <Dropdown menu={{ items: era }}>
              <Space>
                昭和
                <DownOutlined />
              </Space>
            </Dropdown>
          }
          defaultValue={4}
          addonAfter="年"
        />
        <Input defaultValue={2} addonAfter="月" />
        <Input defaultValue={1} addonAfter="日" />
      </Space>
    ),
    totalYear: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={4} addonAfter="年" />
        <Input defaultValue={1} addonAfter="月" />
      </Space>
    ),
    total: (
      <Space style={{ width: "350px" }}>
        <Input defaultValue={4} addonAfter="年" />
        <Input defaultValue={1} addonAfter="月" />
      </Space>
    ),
    remark: "",
    newStaff: true,
  });
}
const columnsTitle: TableColumnsType<columnHeaderData> = [
  {
    title: "番号",
    width: "2%",
    dataIndex: "order",
    render: (order) => (
      <>
        <Text>{order}</Text>
      </>
    ),
  },
  {
    title: "氏名",
    width: "5%",
    align: "center",
    dataIndex: "fullName",
    render: (fullName) => <Text>{fullName}</Text>,
  },
  {
    title: "職種",
    width: "4%",
    dataIndex: "occupation",
    render: (occupation) => <>{occupation}</>,
  },
  {
    title: "ア 現に勤務する施設・事業所の勤務開始年月日",
    width: "12%",
    dataIndex: "startDate",
    render: (startDate) => <>{startDate}</>,
  },
  {
    title: "イ その他の施設・事業所の通算勤続年数",
    width: "10%",
    dataIndex: "totalYear",
    render: (totalYear) => <>{totalYear}</>,
  },
  {
    title: "ウ 合計（ア＋イ）",
    width: "10%",
    dataIndex: "total",
    render: (total) => <>{total}</>,
  },
  {
    title: "備考",
    width: "8%",
    dataIndex: "remark",
    render: (remark) => (
      <>
        <Text>{remark}</Text>
      </>
    ),
  },
  {
    title: "新規採用職員等",
    width: "5%",
    dataIndex: "newStaff",
    render: (newStaff) => (
      <>
        <Checkbox defaultChecked={newStaff} />
      </>
    ),
  },
];

const Form3_4_1: React.FC = () => {
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 6 },
          wrapperCol: { span: 14, flex: 1 },
          labelWrap: true,
        }
      : null;

  return (
    <>
      {/* <Title level={5} >令和５年度賃金改善計画書（処遇改善等加算Ⅰ）</Title> */}
      <Card title="令和５年度処遇改善等加算Ⅰに係る加算率認定申請書">
        <Form {...formItemLayout}>
          <Form.Item label="園番号">
            <Input value="566" style={{ maxWidth: "50%" }} />
          </Form.Item>
          <Form.Item label="作成日">
            <Space>
              <InputNumber prefix="令和" addonAfter="年" value={5} />
              <InputNumber addonAfter="月" value={8} />
              <InputNumber addonAfter="日" value={28} />
            </Space>
          </Form.Item>
          <Form.Item label="市町村名">
            <Input value="福岡市" disabled style={{ maxWidth: "50%" }} />
          </Form.Item>
          <Form.Item label="施設・事業所名">
            <Input value="いちざきみんなの家" style={{ maxWidth: "50%" }} />
          </Form.Item>
          <Form.Item label="施設・事業所類型">
            <Input value="保育所" style={{ maxWidth: "50%" }} />
          </Form.Item>
          <Form.Item label="法人名・代表者職名">
            <Input
              value="社会福祉法人つばさ福祉会　理事長　渡部圭子"
              style={{ maxWidth: "50%" }}
            />
          </Form.Item>
          <Form.Item label="担当者職名">
            <Input
              value="いちざきみんなの家　園長　石井誠"
              style={{ maxWidth: "50%" }}
            />
          </Form.Item>
          <Form.Item label="電話番号">
            <Input value="092-406-8215" style={{ maxWidth: "50%" }} />
          </Form.Item>
        </Form>
      </Card>

      <Card title="【処遇改善等加算の適用総括表】">
        <Form {...formItemLayout}>
          <Form.Item label="①　【基礎分算定資料】のＣの年数から 適用される基礎分の値">
            <InputNumber addonAfter="%" />
          </Form.Item>
          <Form.Item label="②　賃金改善要件分の値 (③が「否」の場合は、キャリアパス要件分の値を減じること。)">
            <Space>
              <Dropdown menu={{ items: improveWageChoice }}>
                <Button>
                  <Space>
                    ...
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
              <InputNumber addonAfter="%" />
            </Space>
          </Form.Item>
          <Form.Item label="③　キャリア パス要件">
            <Dropdown menu={{ items: careerPathReqChoice }}>
              <Button>
                <Space>
                  ...
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Form.Item>
          <Form.Item label="施設・事業所に適用される 加算率（①＋②）">
            <InputNumber addonAfter="%" />
          </Form.Item>
        </Form>
      </Card>

      <Card title="■【該当する場合のみ】他施設・他事業所から、新規事由に係る加算見込額の一部を受け入れる場合">
        <Form {...formItemLayout}>
          <Form.Item label="都道府県名">
            <Input />
          </Form.Item>
          <Form.Item label="市町村名">
            <Input />
          </Form.Item>
          <Form.Item label="施設・事業所名">
            <Input />
          </Form.Item>
        </Form>
        <Text type="secondary">
          ※複数の施設・事業所から受け入れる場合は、「施設・事業所名」に「●●保育園ほか●ヶ所」と記入してください。
        </Text>{" "}
        <br />
        <Text type="secondary">
          ※令和５年度新設園から受け入れる場合は、新規事由に該当します。
        </Text>
      </Card>

      <Card title="【基礎分算定資料】">
        <Form>
          <Space>
            <Form.Item label="利用定員">
              <Input addonAfter="名" />
            </Form.Item>
            <Form.Item label="地域区分">
              <Input addonAfter="地域" defaultValue={"10/100"} />
            </Form.Item>
            <Form.Item>
              <Space>
                <Input
                  addonBefore={
                    <Dropdown menu={{ items: era }}>
                      <Space>
                        昭和
                        <DownOutlined />
                      </Space>
                    </Dropdown>
                  }
                  defaultValue={4}
                  addonAfter="年"
                />
                <Input defaultValue={2} addonAfter="月" />
                <Input defaultValue={1} addonAfter="日" />
              </Space>
            </Form.Item>
          </Space>
        </Form>
        <Table
          dataSource={columnData}
          columns={columnsTitle}
          bordered
          pagination={false}
          scroll={{ x: "calc(1500px + 50%)", y: 480 }}
          title={() => "処遇改善等加算（基礎分）算定対象職員の一覧"}
          summary={() => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={2} align="center">
                  合　　計
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3}>Ａ 5 人</Table.Summary.Cell>
                <Table.Summary.Cell index={4}></Table.Summary.Cell>
                <Table.Summary.Cell index={5}></Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <Space>
                    Ｂ
                    <InputNumber disabled addonAfter="年" />
                    <InputNumber disabled addonAfter="月" />
                  </Space>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={7} colSpan={8}></Table.Summary.Cell>
              </Table.Summary.Row>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={3} align="center">
                  職員１人当り 平均勤続年数
                </Table.Summary.Cell>

                <Table.Summary.Cell index={4} colSpan={5} align="center">
                  　（算式）　Ｂ÷Ａ＝Ｃ 　　　　（6か月以上の端数は切り上げ）
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>C</Table.Summary.Cell>
                <Table.Summary.Cell index={7} colSpan={8}>
                  <InputNumber />
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <Text type="secondary">
          注）１　職員１人当たり平均勤続年数のＣ欄の算定に当たっては、６か月以上の端数は１年とし、６か月未満の端数は切り捨てるものとすること。
        </Text>{" "}
        <br />
        <Text type="secondary">
          　　２　個々の職員の勤続年数の算定に当たっては、各年度４月１日現在により算定すること。
        </Text>
        <br />
        <Text type="secondary">
          　　３　１日６時間未満又は月20日未満勤務の職員は含めないものとする。
        </Text>
        <br />
        <Text type="secondary">
          　　４　「新規採用職員等」の欄は、令和３年度認定申請書と比較して、変更（新規採用、勤務年数の変更など）が生じている職員について、
          チェック（「レ」）すること。
        </Text>
        <br />
      </Card>
    </>
  );
};

export default Form3_4_1;
