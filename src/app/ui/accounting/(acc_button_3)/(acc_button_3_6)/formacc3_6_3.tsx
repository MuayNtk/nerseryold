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

const criterionCheck: MenuProps["items"] = [
  {
    key: 1,
    label: "該当",
  },
  {
    key: 2,
    label: "非該当",
  },
];

const month: MenuProps["items"] = [
  {
    key: 1,
    label: "令和５年４月",
  },
  {
    key: 2,
    label: "令和５年５月",
  },
  {
    key: 3,
    label: "令和５年６月",
  },
  {
    key: 4,
    label: "令和５年７月",
  },
  {
    key: 5,
    label: "令和５年８月",
  },
  {
    key: 6,
    label: "令和５年９月",
  },
  {
    key: 7,
    label: "令和５年１０月",
  },
  {
    key: 8,
    label: "令和５年１１月",
  },
  {
    key: 9,
    label: "令和５年１２月",
  },
  {
    key: 10,
    label: "令和６年１月",
  },
  {
    key: 11,
    label: "令和６年２月",
  },
  {
    key: 12,
    label: "令和６年３月",
  },
];

const Formacc3_6_3: React.FC = () => {
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
      </Form>
      <Card title="令和５年度 加算算定対象人数等認定申請書（処遇改善等加算Ⅱ）">
        <Title level={5}>福岡市長　殿</Title> <br />
        <Form {...formItemLayout}>
          <Form.Item label="作成日">
            <Space>
              <InputNumber addonBefore="令和" value="5" addonAfter="年" />
              <InputNumber addonAfter="月" />
              <InputNumber addonAfter="日" />
            </Space>
          </Form.Item>
          <Form.Item label="市町村名">
            <Input value="福岡市" />
          </Form.Item>
          <Form.Item label="施設・事業所名">
            <Input value="いちざきみんなの家" />
          </Form.Item>
          <Form.Item label="施設・事業所類型">
            <Input value="保育所" />
          </Form.Item>
          <Form.Item label="法人名・代表者職名">
            <Input value="社会福祉法人つばさ福祉会　理事長　渡部圭子" />
          </Form.Item>
          <Form.Item label="担当者職名">
            <Input value="いちざきみんなの家　園長　石井誠" />
          </Form.Item>
          <Form.Item label="電話番号">
            <Input value="092-406-8215" />
          </Form.Item>
        </Form>
      </Card>
      <Card title="加算の要件について">
        <Card title="次の内容について、当てはまる項目に○をつけること。">
          <Form>
            <Form.Item label="処遇改善等加算Ⅲによる賃金改善に係る計画の具体的内容を職員に周知している">
              <Dropdown menu={{ items: criterionCheck }}>
                <Button>
                  <Space>
                    該当 <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Form.Item>
          </Form>
        </Card>
      </Card>

      <Card title="加算額の算定に用いる職員数について">
        <Form {...formItemLayout}>
          <Form.Item label="①利用定員">
            <Input addonAfter="人" />
          </Form.Item>
          <Form.Item label="②年齢別　児童数">
            <Form.Item label="４歳以上児" labelCol={{ span: 4 }}>
              <Input defaultValue={33} addonAfter="人" />
            </Form.Item>
            <Form.Item label="３歳児" labelCol={{ span: 4 }}>
              <Input defaultValue={19} addonAfter="人" />
            </Form.Item>
            <Form.Item label="１，２歳児" labelCol={{ span: 4 }}>
              <Input defaultValue={33} addonAfter="人" />
            </Form.Item>
            <Form.Item label="０歳児" labelCol={{ span: 4 }}>
              <Input defaultValue={7} addonAfter="人" />
            </Form.Item>
          </Form.Item>
          <Form.Item label="③各種加算の適用状況 保育所" labelCol={{ span: 3 }}>
            <Form.Item label="３歳児配置改善加算" labelCol={{ span: 8 }}>
              <Input defaultValue={"該当"} style={{ width: "20%" }} />
            </Form.Item>
            <Form.Item
              label="保育標準時間認定の子どもの有無"
              labelCol={{ span: 8 }}
            >
              <Input defaultValue={"該当"} style={{ width: "20%" }} />
            </Form.Item>
            <Form.Item label="主任保育士専任加算" labelCol={{ span: 8 }}>
              <Input defaultValue={"該当"} style={{ width: "20%" }} />
            </Form.Item>
            <Form.Item label="療育支援加算（Ａ・Ｂ）" labelCol={{ span: 8 }}>
              <Input defaultValue={"該当"} style={{ width: "20%" }} />
            </Form.Item>
            <Form.Item label="事務職員雇上費加算" labelCol={{ span: 8 }}>
              <Input defaultValue={"該当"} style={{ width: "20%" }} />
            </Form.Item>
            <Form.Item label="休日保育加算" labelCol={{ span: 8 }}>
              <Input defaultValue={"非該当"} style={{ width: "20%" }} />
            </Form.Item>
            <Form.Item label="夜間保育加算" labelCol={{ span: 8 }}>
              <Input defaultValue={"非該当"} style={{ width: "20%" }} />
            </Form.Item>
            <Form.Item label="チーム保育推進加算" labelCol={{ span: 8 }}>
              <Input defaultValue={"非該当"} style={{ width: "20%" }} />
            </Form.Item>
            <Form.Item
              label="栄養管理加算（Ａ：配置の場合）"
              labelCol={{ span: 8 }}
            >
              <Input defaultValue={"非該当"} style={{ width: "20%" }} />
            </Form.Item>
            <Form.Item label="分園の場合の減算" labelCol={{ span: 8 }}>
              <Input defaultValue={"非該当"} style={{ width: "20%" }} />
            </Form.Item>
            <Form.Item
              label="施設長を配置していない場合の減算"
              labelCol={{ span: 8 }}
            >
              <Input defaultValue={"非該当"} style={{ width: "20%" }} />
            </Form.Item>
          </Form.Item>
          <Form.Item label="④加算対象人数の基礎となる職員数">
            <Input addonAfter="人" defaultValue={15} />
          </Form.Item>
        </Form>
        <Text type="secondary">
          ※　②について各月平均の年齢別児童数の算出方法を示した書類を添付すること。
        </Text>
        <br />
        <Text type="secondary">
          ※　④について算出方法を示した書類を添付すること。
        </Text>
      </Card>
    </>
  );
};

export default Formacc3_6_3;
