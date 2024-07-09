"use client";

import React, { useState } from "react";
import type { DatePickerProps, MenuProps } from "antd";
import {
  Button,
  Form,
  Input,
  Space,
  Dropdown,
  Tag,
  Card,
  InputNumber,
  Typography,
} from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
type LayoutType = Parameters<typeof Form>[0]["layout"];
const { Title, Text } = Typography;

const Form3_3: React.FC = () => {
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
      <Card title="令和５年度賃金改善計画書（処遇改善等加算Ⅰ）">
        <Form {...formItemLayout}>
          <Form.Item label="園番号">
            <Input value="566" style={{ maxWidth: "50%" }} />
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
              value="社会福祉法人つばさ福祉会　理事長　渡部　圭子"
              style={{ maxWidth: "50%" }}
            />
          </Form.Item>
          <Form.Item label="担当者職名">
            <Input
              value="いちざきみんなの家　園長　石井　誠"
              style={{ maxWidth: "50%" }}
            />
          </Form.Item>
          <Form.Item label="電話番号">
            <Input value="092-406-8215" style={{ maxWidth: "50%" }} />
          </Form.Item>
        </Form>
        <Text type="secondary">
          下記の内容について、すべての職員に対し周知をした上で、提出していることを証明いたします。
        </Text>
      </Card>

      <Card title="（１）賃金改善について">
        <Form {...formItemLayout}>
          <Form.Item label="加算見込額（※）（千円未満の端数は切り捨て）">
            <InputNumber controls={false} prefix="なし" /> <br />
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              style={{ marginTop: 10 }}
            />
          </Form.Item>
          <Form.Item label="賃金改善期間">
            <Input
              value="令和５年４月　～　令和６年３月"
              disabled
              style={{ maxWidth: "50%" }}
            />
          </Form.Item>
        </Form>
        <Text type="secondary">
          ※
          施設・事業所間で加算額の一部の配分を調整する場合の「加算見込額」については、調整による加算額の増減を反映した（（３）①の額を減じ、（３）②の額を加えた後の）金額を記入すること。
        </Text>
        <br />
      </Card>

      <Card title="（２）賃金改善等見込総額">
        <Form {...formItemLayout}>
          <Form.Item label="①賃金改善等見込総額（②＋⑨）（千円未満の端数は切り捨て）">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="②賃金改善見込総額（③－④－⑤－⑥）">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="③支払賃金">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="④③のうち、加算前年度の加算残額に係る支払賃金">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="⑤③のうち、加算Ⅱの新規事由による賃金改善額">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="⑥起点賃金水準（⑦＋⑧）※">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="⑦加算前年度の賃金水準（当該年度に係る加算残額を含む）">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="⑧加算当年度の公定価格における人件費の改定分">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="⑨事業主負担増加見込総額">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
        </Form>
        <Text type="secondary">
          ※ 令和４年度の加算Ⅲ等による賃金改善額を除く。
        </Text>
      </Card>

      <Card title="（３）他施設・事業所への配分等について">
        <Form {...formItemLayout}>
          <Form.Item label="①拠出見込額">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="②受入見込額">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
        </Form>
        <Text type="secondary">
        ※　別紙様式９別添２の「同一事業者内における拠出見込額・受入見込額一覧表」を添付すること。
        </Text>
      </Card>

      <Card title="※確認欄（千円未満の端数は切り捨て）">
        <Text style={{ fontSize: "1.2em" }}>
        ※確認欄（以下のＢ及びＣの額がＡの額以上であること）
        </Text>
        <br />
        <Form {...formItemLayout} style={{ margin: "10px 0 0 0" }}>
          <Form.Item label="A 加算見込額【（１）①】">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              disabled
            />
          </Form.Item>
          <Form.Item label="B 賃金改善等見込総額【（２）①】">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              disabled
            />
          </Form.Item>
          <Form.Item label="C 加算Ⅲによる賃金改善額の総額【別紙様式９別添１の「加算Ⅲによる賃金改善額」と「賃金改善に伴い増加する法定福利費等の事業主負担分」の総額欄の合計】">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              disabled
            />
          </Form.Item>
        </Form>
        
      </Card>
    </>
  );
};

export default Form3_3;
