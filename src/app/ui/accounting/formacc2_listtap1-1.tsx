"use client";

import React, { useState } from "react";
import {
  DatePicker,
  Form,
  Input,
  Select,
  Divider,
  Row,
  Col,
  Alert,
} from "antd";
import { SubmitCancelButtons } from "../sub-canbtn";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    date: "${label} is not a valid date!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

// const { Title } = Typography;
const text1 = `福岡市保育体制強化事業補助金の交付要件である「本市の市税を滞納していないこと」の確認に当たり、税務担当課に「保育体制強化事業補助金交付申請書」が開示され、市税等の課税状況及び納付状況についての照会がなされることに同意します。`;
const text2 = `福岡市保育体制強化事業補助金の交付要件である「福岡市暴力団排除条例（平成22年福岡市条例第30号）第２条第２号に規定する暴力団員、法人でその役員のうちに同号に該当する者のあるもの又は同条例第６条に規定する暴力団若しくは暴力団員と密接な関係を有する者でないこと」の確認に当たり、福岡県警察に照会がなされることに同意します。`;

const onFinish = (values: any) => {
  console.log(values);
};

interface DataType {
  key: React.Key;
  name: string;
  low: string;
  much: string;
}

const FormTap1: React.FC = () => {
  return (
    <div style={{ alignItems: "left" }}>
      <Form onFinish={onFinish} validateMessages={validateMessages}>
        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
          [様式第４号] 福岡市保育体制強化事業補助金実績報告書
        </p>
        <br />
        <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
          <Form.Item
            label="日付"
            name="DatePicker"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="園番号"
            name="Input"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="あて先"
            name="TextArea"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="法人名"
            name="Input"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="法人所在地"
            name="Input"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="代表者
            職・氏名"
            name="Input"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="保育施設名"
            name="Select"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select />
          </Form.Item>
        </Form>

        <Divider orientation="left"></Divider>

        <Alert
          message="↓
日付・文書番号は交付決定通知書のものです。（自動入力）"
        />
        <br />
        <Form>
          <Form.Item label="" style={{ marginBottom: 0 }}>
            <Row gutter={6} align="middle">
              <Col flex="auto">
                <Form.Item name="Date" rules={[{ required: true }]}>
                  <Input
                    placeholder="年２０２４月１０日１"
                    size="small"
                    style={{ width: "20%", marginRight: "4px" }}
                  />
                  <p style={{ display: "inline" }}>付、運支第</p>
                  <Input
                    placeholder="３０号"
                    size="small"
                    style={{ width: "20%", marginLeft: "4px" }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <p>
          により福岡市保育体制強化事業補助金の交付を受けた事業の実績について、下記のとおり報告いたします。
        </p>

        <div>
          <span style={{ margin: "2px", padding: "36px" }}>
            {text1}
            <br />
            <span style={{ margin: "2px", padding: "36px" }}>{text2}</span>
          </span>
        </div>
        <br />
        <br />

        <div
          style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
        >
          <p>記</p>
        </div>
        <br />

        <Alert
          message="１交付申請額＆２交付決定額
→交付決定通知書の補助内示額

２補助金の既交付額
→振込済額（１２月以降に申請いただいた園は０円）
        "
        />

        <br />
        <br />

        <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
          <Form.Item
            label="１　交付申請額"
            name="InputNumber"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input suffix="円" />
          </Form.Item>
        </Form>

        <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
          <Form.Item
            label="２　補助金の交付決定額と精算額"
            name="InputNumber"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input suffix="円" />
          </Form.Item>
        </Form>

        <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
          <Form.Item
            label="補助金の交付決定額"
            name="InputNumber"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input suffix="円" />
          </Form.Item>
        </Form>

        <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
          <Form.Item
            label="補助金の既交付額"
            name="InputNumber"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input suffix="円" />
          </Form.Item>
        </Form>

        <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
          <Form.Item
            label="実績に基づく補助金の額"
            name="InputNumber"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input suffix="円" />
            <p>（上限：月額145,000円）</p>
          </Form.Item>
        </Form>

        <br />
        <p>　※　別添４－１、４－２、４－３、４－４を添付すること。</p>
      </Form>
      <br />
      <SubmitCancelButtons onSubmit={() => {}} onCancel={() => {}} />
    </div>
  );
};
export default FormTap1;
