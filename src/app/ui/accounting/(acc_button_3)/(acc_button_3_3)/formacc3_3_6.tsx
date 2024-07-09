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
      <Card title="令和５年度賃金改善計画書（処遇改善等加算Ⅱ）">
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
          <Form.Item label="基準年度">
            <Input value="令和４年度" style={{ maxWidth: "50%" }} />
          </Form.Item>
        </Form>
        <Text type="secondary">
          下記について、すべての職員に対し、周知をした上で、提出していることを証明いたします。
        </Text>
      </Card>

      <Card title="（１）賃金改善について">
        <Form {...formItemLayout}>
          <Form.Item label="①加算Ⅱ新規事由">
            <Input value="なし" disabled style={{ maxWidth: "50%" }} />
          </Form.Item>
          <Form.Item label="②加算見込額（千円未満の端数は切り捨て）（※）">
            <InputNumber prefix="人数Ａ" addonAfter="人" />
            <br />
            <InputNumber prefix="人数Ｂ" addonAfter="人" style={{marginTop: 10}} />
            <br />
            <InputNumber
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              addonAfter="円" style={{marginTop: 10}}
            />
          </Form.Item>
          <Form.Item label="③特定加算見込額（千円未満の端数は切り捨て）（※）">
            <InputNumber
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              addonAfter="円"
            />
          </Form.Item>
          <Form.Item label="④賃金改善実施期間">
            <Input value="令和５年４月　～　令和６年３月" disabled style={{ maxWidth: "50%" }} />
          </Form.Item>
        </Form>
        <Text type="secondary">
          ※施設・事業所間で加算額の一部の配分を調整する場合の「加算見込額」及び「特定加算見込額」については、調整による加算額の増減を反映した（加算見込額にあっては（３）①の額を減じ、（３）③の額を加えた後の、特定加算見込額にあっては（３）②の額を減じ、（３）④の額を加えた後の）金額を記入すること。
        </Text>
      </Card>

      <Card title="（２）賃金改善等見込総額">
        <Form {...formItemLayout}>
          <Form.Item label="①賃金改善等見込総額（②＋⑩）（千円未満の端数は切り捨て）">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="②賃金改善見込総額（③－④－⑤－⑨）">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="③支払賃金（基本給＋役職手当等※）">
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
          <Form.Item label="⑤起点賃金水準（⑥＋⑦－⑧）">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="⑥基準年度の賃金水準（当該年度に係る加算残額を含む。基本給＋役職手当等※）">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="⑦基準翌年度から加算当年度までの公定価格における人件費の改定分">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="⑧令和４年度の加算Ⅲ等による賃金改善">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="⑨基準年度に加算Ⅱの対象であり、かつ加算当年度に加算Ⅱの対象外となった職員に係る、基準年度における加算Ⅱに係る賃金改善額">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="⑩事業主負担増加見込総額">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
        </Form>
        <Text type="secondary">
          ※役職手当、職務手当など職位、職責又は職務内容等に応じて決まって毎月支払われる手当及び基本給に限る。
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
          <Form.Item label="②うち基準年度からの増減分">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="③受入見込額">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="④うち基準年度からの増減分">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
        </Form>
        <Text type="secondary">
          ※
          別紙様式５別添２の「同一事業者内における拠出見込額・受入見込額一覧表」を添付すること。
        </Text>
      </Card>

      <Card title="※確認欄（千円未満の端数は切り捨て）">
        <Text style={{ fontSize: "1.2em" }}>
          ＜加算Ⅱ新規事由がある場合＞（以下のＢの額がＡの額以上であること（※1））
        </Text>
        <br />
        <Form {...formItemLayout} style={{ margin: "10px 0 0 0" }}>
          <Form.Item label="A 特定加算見込額【（１）③】">
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
        </Form>
        <Text style={{ fontSize: "1.2em" }}>
          ＜加算Ⅱ新規事由がない場合＞（以下のＢの額がＡの額以上であること（※1）かつＤの額がＣの額以上であること（※2））
        </Text>
        <br />
        <Form {...formItemLayout} style={{ margin: "10px 0 0 0" }}>
          <Form.Item label="A 加算前年度の賃金水準（起点賃金水準）【（２）⑤－（３）②＋（３）④（※3）】">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="B 賃金見込総額【（２）③－（２）④】">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="C 加算見込額【（１）②】">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
          <Form.Item label="D 加算Ⅱに係る手当又は基本給の総額【別紙様式７別添１（４）③＋別紙様式７別添１（５）③】">
            <InputNumber
              addonAfter="円"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
            />
          </Form.Item>
        </Form>
        <Text type="secondary">
          ※1
          原則、賃金改善額（Ｂ）は、加算額（Ａ）以上であることが必要だが、法定福利費の事業主負担増加額が少ないことにより、Ａの額を下回ることは差し支えない。その場合、その差額については、別途、職員の処遇改善に充てること。
        </Text>
        <br />
        <Text type="secondary">
          ※2
          原則、賃金改善額（Ｄ）は、加算額（Ｃ）以上であることが必要だが、法定福利費の事業主負担増加額が少ないことにより、Ｃの額を下回ることは差し支えない。その場合、その差額については、別途、職員の処遇改善に充てること。
        </Text>
        <br />
        <Text type="secondary">
          ※3（３）②及び（３）④から法定福利費等の事業主負担分を除いたうえで算出すること。
        </Text>
      </Card>
    </>
  );
};

export default Form3_3;
