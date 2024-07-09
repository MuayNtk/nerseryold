import { useState } from "react";

import {
  Button,
  Card,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Space,
  Typography,
} from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;
const { TextArea } = Input;

const accecptMenu: MenuProps["items"] = [
  { key: 1, label: "該当" },
  { key: 2, label: "非該当" },
];

type LayoutType = Parameters<typeof Form>[0]["layout"];

const Form3_4_4: React.FC = () => {
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 6 },
          wrapperCol: { span: 16, flex: 1 },
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
      <Card title="令和５年度キャリアパス要件届出書">
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
        <Text>
          　　下記について、全ての職員に対し、周知をした上で、提出していることを証明いたします。
        </Text>
      </Card>
      <Card title="〇キャリアパスに関する要件について">
        <Text>次の内容について、「該当」「非該当」を選択すること。</Text>
        <Form {...formItemLayout}>
          <Form.Item label="① 次のａからｃまでの全ての要件を満たす。">
            <Dropdown menu={{ items: accecptMenu }} >
              <Space>
                <Button>
                  該当
                  <DownOutlined />
                </Button>
              </Space>
            </Dropdown>{" "}
            <br />
            <Text>
              　ａ　職員の職位、職責又は職務内容等に応じた勤務条件等の要件を定めている。
            </Text>{" "}
            <br />
            <Text>
              　ｂ　職位、職責又は職務内容等に応じた賃金体系を定めている。
            </Text>{" "}
            <br />
            <Text>
              　ｃ　ａ及びｂについて就業規則等の明確な根拠規定を書面で整備し、全ての職員に周知している。
            </Text>{" "}
            <br />
          </Form.Item>
          <Form.Item label="② 次のｄ及びｅの要件を満たす。">
            <Dropdown menu={{ items: accecptMenu }}>
              <Space>
                <Button>
                  該当
                  <DownOutlined />
                </Button>
              </Space>
            </Dropdown>{" "}
            <br />
            <Text>　d　職員との意見交換を踏まえた資質向上のための目標。</Text>
            <TextArea rows={3} /> <br />
            <Text>
              　e　ｄの実現のための具体的な取り組みの内容 <br />
              <Text>
                ア
                資質向上のための計画に沿って、研修機会の提供又は技術指導等を実施するとともに、職員の能力評価を行う。（資質向上のための計画を添付すること。）{" "}
                <br />
              </Text>{" "}
              <br />
              <Text>
                イ
                資格取得のための支援の実施　※当該支援の内容について下記に記載すること。{" "}
                <br />
                <TextArea />
              </Text>
            </Text>{" "}
            <br />
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Form3_4_4;
