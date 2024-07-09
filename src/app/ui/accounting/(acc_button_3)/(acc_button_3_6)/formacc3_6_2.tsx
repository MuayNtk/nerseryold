import {
  Card,
  Form,
  Input,
  Table,
  Dropdown,
  Space,
  InputNumber,
  Typography,
  Button,
} from "antd";
import type { TableColumnsType, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { ReactNode, useState } from "react";

const { Text, Title } = Typography;

type LayoutType = Parameters<typeof Form>[0]["layout"];

const branchCheck: MenuProps["items"] = [
  {
    key: 1,
    label: "あり",
  },
  {
    key: 2,
    label: "なし",
  },
];
interface basicHeaderData {
  key: React.Key | string;
  detail: string;
  choice: string | ReactNode;
  mainGarden: string | ReactNode;
  branchGarden: string | ReactNode;
}

interface contestantHeaderData {
  key: React.Key;
  detail: string;
  choice: string | ReactNode;
  detail2: string | ReactNode;
  personAmount: string | ReactNode;
  choice2: string | ReactNode;
  detail3: string | ReactNode;
  personAmount2: string | ReactNode;
}

const contestData: contestantHeaderData[] = [
  {
    key: "1",
    detail: "ａ	年齢別配置基準による職員数",
    choice: "",
    detail2: "",
    personAmount: <InputNumber defaultValue={13.0} />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber defaultValue={0} />,
  },
  {
    key: "2",
    detail: "　　4歳以上児",
    choice: "",
    detail2: <InputNumber />,
    personAmount: <InputNumber />,
    choice2: "",
    detail3: <InputNumber />,
    personAmount2: <InputNumber />,
  },
  {
    key: "3",
    detail: "　　3歳児",
    choice: "",
    detail2: <InputNumber />,
    personAmount: <InputNumber />,
    choice2: "",
    detail3: <InputNumber />,
    personAmount2: <InputNumber />,
  },
  {
    key: "4",
    detail: "　　　　3歳児配置改善加算",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail2: <InputNumber />,
    personAmount: <InputNumber />,
    choice2: (
      <>
        <Text>本園と合算</Text>
      </>
    ),
    detail3: "",
    personAmount2: "",
  },
  {
    key: "5",
    detail: "　　１，２歳児",
    choice: "",
    detail2: <InputNumber />,
    personAmount: <InputNumber />,
    choice2: "",
    detail3: <InputNumber />,
    personAmount2: <InputNumber />,
  },
  {
    key: "6",
    detail: "　　０歳児",
    choice: "",
    detail2: <InputNumber />,
    personAmount: <InputNumber />,
    choice2: "",
    detail3: <InputNumber />,
    personAmount2: <InputNumber />,
  },
  {
    key: "7",
    detail: "　　小計（小数点第一位四捨五入）",
    choice: "",
    detail2: "",
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "8",
    detail: "ｂ	保育標準時間認定の児童",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail2: "",
    personAmount: <InputNumber />,
    choice2: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "9",
    detail: "ｃ	主任保育士専任加算	",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail2: "",
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "10",
    detail: "ｄ	事務職員雇上加算	",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail2: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "11",
    detail: "ｅ	休日保育加算	",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail2: "",
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "12",
    detail: "ｆ	チーム保育推進加算	",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail2: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "13",
    detail: "g	栄養管理加算（配置）	",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail2: "",
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "16",
    detail: "h	チーム保育推進加算",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail2: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "17",
    detail: "i	栄養管理加算（A：配置の場合のみ）",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail2: "",
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "18",
    detail: "j	分園の場合",
    choice: "-",
    detail2: "-",
    personAmount: <InputNumber />,
    choice2: "",
    detail3: <InputNumber defaultValue={-1.3} />,
    personAmount2: <InputNumber />,
  },
  {
    key: "19",
    detail: "k	施設長を配置していない場合",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    detail2: "",
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: "",
  },
  {
    key: "14",
    detail: "利用定員数に基づく職員数	",
    choice: "",
    detail2: "",
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "15",
    detail: "合計	",
    choice: "",
    detail2: "",
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
  {
    key: "20",
    detail: "加算Ⅲ算定対象人数（1人未満端数　四捨五入）",
    choice: "",
    detail2: "",
    personAmount: <InputNumber />,
    choice2: "",
    detail3: "",
    personAmount2: <InputNumber />,
  },
];

const contestTitle: TableColumnsType<contestantHeaderData> = [
  {
    title: "",
    dataIndex: "detail",
    render: (detail) => <>{detail}</>,
  },
  {
    title: "本園分",
    children: [
      {
        title: "選択項目",
        dataIndex: "choice",
        render: (choice) => <>{choice}</>,
      },
      {
        title: "",
        dataIndex: "detail2",
        render: (detail2) => <>{detail2}</>,
      },
      {
        title: "職員数（自動計算）",
        dataIndex: "personAmount",
        render: (personAmount) => <>{personAmount}</>,
      },
    ],
  },
  {
    title: "分園分",
    children: [
      {
        title: "選択項目",
        dataIndex: "choice2",
        render: (choice2) => <>{choice2}</>,
      },
      {
        title: "",
        dataIndex: "detail3",
        render: (detail3) => <>{detail3}</>,
      },
      {
        title: "職員数（自動計算）",
        dataIndex: "personAmount2",
        render: (personAmount2) => <>{personAmount2}</>,
      },
    ],
  },
];

const basicData: basicHeaderData[] = [
  {
    key: "1",
    detail: "分園の有無",
    choice: (
      <>
        <Dropdown menu={{ items: branchCheck }}>
          <Space>
            <Button>
              あり
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </>
    ),
    mainGarden: "本園分を",
    branchGarden: "分園分を記入",
  },
  {
    key: "2",
    detail: "利用定員数",
    choice: "",
    mainGarden: <InputNumber defaultValue={90} />,
    branchGarden: <InputNumber />,
  },
  {
    key: "3",
    detail: "年齢別児童数（年齢別児童数計算表で算定した人数）",
    choice: "",
    mainGarden: <InputNumber defaultValue={92} />,
    branchGarden: <InputNumber defaultValue={0} />,
  },
  {
    key: "4",
    detail: "　　４歳児以上児",
    choice: "",
    mainGarden: <InputNumber defaultValue={33} />,
    branchGarden: <InputNumber />,
  },
  {
    key: "5",
    detail: "　　３歳児",
    choice: "",
    mainGarden: <InputNumber defaultValue={19} />,
    branchGarden: <InputNumber />,
  },
  {
    key: "6",
    detail: "　　１，２歳児",
    choice: "",
    mainGarden: <InputNumber defaultValue={33} />,
    branchGarden: <InputNumber />,
  },
  {
    key: "7",
    detail: "　　０歳児",
    choice: "",
    mainGarden: <InputNumber defaultValue={7} />,
    branchGarden: <InputNumber />,
  },
];

const basicTitle: TableColumnsType<basicHeaderData> = [
  {
    title: "",
    dataIndex: "detail",
    render: (detail) => <>{detail}</>,
  },
  {
    title: "選択項目",
    dataIndex: "choice",
    render: (choice) => <>{choice}</>,
  },
  {
    title: "入力項目",
    dataIndex: "mainGarden",
    render: (mainGarden) => <>{mainGarden}</>,
  },
  {
    title: "入力項目",
    dataIndex: "branchGarden",
    render: (branchGarden) => <>{branchGarden}</>,
  },
];

const Formacc3_6_2: React.FC = () => {
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
      <Form style={{ display: "block" }}>
        <Form.Item
          label="園番号"
          style={{ width: 200, marginLeft: "auto", marginRight: "0" }}
        >
          <Input value={566} />
        </Form.Item>
        <Form.Item>
          <Title level={5}>
            処遇改善等加算Ⅲ　加算Ⅲ算定対象人数計算表（保育所）
          </Title>
        </Form.Item>
        <Form.Item
          label="施設・事業所名"
          style={{ width: 400, marginLeft: "auto", marginRight: "40%" }}
        >
          <Input value={"いちざきみんなの家	"} />
        </Form.Item>
      </Form>

      <Card title="0．基礎情報">
        <Table
          dataSource={basicData}
          columns={basicTitle}
          style={{ width: "50%" }}
          bordered
          pagination={false}
        ></Table>
        <Text type="secondary">
          「年齢別児童数計算表」により計算した児童数を入力すること。<br />
          月初日の利用児童数ではありませんので、ご注意ください。
        </Text>
      </Card>
      <Card title="１．加算対象人数の基礎となる職員数（人）">
        <Table
          dataSource={contestData}
          columns={contestTitle}
          bordered
          pagination={false}
          summary={() => (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell index={1} colSpan={3}>
                  職員数（1人未満端数　四捨五入）
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <InputNumber />
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3} colSpan={2}></Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <InputNumber />
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        ></Table>
      </Card>
      <Card title="（参考）加算見込額（円）">
        <Form {...formItemLayout}>
          <Form.Item label=" 11,000  円 × 加算Ⅲ算定対象人数">
            <InputNumber addonAfter="円" />
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Formacc3_6_2;
