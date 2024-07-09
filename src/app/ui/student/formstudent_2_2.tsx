"use client";

import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Dropdown,
  message,
  DatePicker,
  Space,
  Table,
  Tag,
  Select,
  Row,
  Col,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps, DatePickerProps, TableColumnsType } from "antd";
import FormEra from "../common/formera";

type LayoutType = Parameters<typeof Form>[0]["layout"];

interface DataType {
  key: string;
  act: string;
  month: string;
}
interface ExpandedDataType {
  key: React.Key;
  act: string;
}
interface QuestionDataType {
  key: string;
  act: string;
}

const FormStudent2: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? { wrapperCol: { span: 90, offset: 4 } }
      : null;

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Reiwa",
    },
    {
      key: "2",
      label: "Heisei",
    },
    {
      key: "3",
      label: "Showa",
    },
  ];
  const month: MenuProps["items"] = [
    {
      key: "1",
      label: "1",
    },
    {
      key: "2",
      label: "2",
    },
    {
      key: "3",
      label: "3",
    },
  ];

  const menuProps = {
    items,
    month,
  };

  const questionData: QuestionDataType[] = [
    {
      key: "1",
      act: "コップを一人で持って飲む",
    },
    {
      key: "2",
      act: "スプーンを使って一人で食べる",
    },
    {
      key: "3",
      act: "こぼしながらも、最後まで一人で食べる",
    },
    {
      key: "4",
      act: "好き嫌いがはっきりしているが、促されて食べる",
    },
    {
      key: "5",
      act: "菓子などの包み紙を取って食べられる ",
    },
    {
      key: "6",
      act: "自分の食物と他人の食物との区別がつく",
    },
    {
      key: "7",
      act: "食物の揃うのを待ち挨拶をして食べる",
    },
    {
      key: "8",
      act: "保育士等の援助により食前の手洗いをする",
    },
    {
      key: "9",
      act: "促されて食後自分で手や顔を拭く",
    },
    {
      key: "10",
      act: "食べ物の名前に興味を持つ",
    },
  ];

  const questionData2: QuestionDataType[] = [
    {
      key: "1",
      act: "もらしたことを知らせる",
    },
    {
      key: "2",
      act: "排泄を予め知らせる（１８ヶ月）",
    },
    {
      key: "3",
      act: "おむつがとれる（１９ヶ月）",
    },
    {
      key: "4",
      act: "便器（オマル）で排泄する",
    },
    {
      key: "5",
      act: "パンツをおろしてもらい、ひとりでする",
    },
    {
      key: "6",
      act: "排泄後、保育士等に知らせて拭いてもらう",
    },
  ];
  const questionData3: QuestionDataType[] = [
    {
      key: "1",
      act: "午睡の時間が一定してくる",
    },
    {
      key: "2",
      act: "保育士等がそばにいると安心して眠れる",
    },
    {
      key: "3",
      act: "機嫌よく目覚める",
    },
    {
      key: "4",
      act: "自分の布団がわかる",
    },
  ];

  const questionData4: QuestionDataType[] = [
    {
      key: "1",
      act: "一人で、パンツの上げ下げをする",
    },
    {
      key: "2",
      act: "手伝ってもらって衣服を脱いだり、パンツをはく",
    },
    {
      key: "3",
      act: "スナップを自分ではずす",
    },
    {
      key: "4",
      act: "嫌がらずに帽子をかぶる",
    },
    {
      key: "5",
      act: "一人で靴を脱ぐ（２歳６ヶ月）",
    },
    {
      key: "6",
      act: "一人で靴を履こうとする（２歳６ヶ月）",
    },
  ];

  const questionData5: QuestionDataType[] = [
    {
      key: "1",
      act: "促されて自分で手を洗ったり拭こうとする",
    },
    {
      key: "2",
      act: "顔、手足のきれい、汚いがわかり、洗ってもらうことを嫌がらない",
    },
    {
      key: "3",
      act: "鼻汁の出ていることを知らせ拭いてもらう",
    },
    {
      key: "4",
      act: "尋ねると、身体の異常を指さし等で知らせることができる",
    },
    {
      key: "5",
      act: "制止・禁止の言葉がわかる",
    },
    {
      key: "6",
      act: "物を持って、前を見て歩くことができる ",
    },
  ];

  const questionData6: QuestionDataType[] = [
    {
      key: "1",
      act: "その場で両足跳びができる",
    },
    {
      key: "2",
      act: "高い所(５０㎝）に昇ったり降りたりできる",
    },
    {
      key: "3",
      act: "手すりを持って階段の昇り降りができる",
    },
    {
      key: "4",
      act: "２０分くらい続けて歩ける。",
    },
    {
      key: "5",
      act: "補助されて平均台の上を横歩きできる",
    },
    {
      key: "6",
      act: "両手でボールを持って上手投げで投げられる",
    },
    {
      key: "7",
      act: "転がってくるボールを受け止められる",
    },
    {
      key: "8",
      act: "走ることができる",
    },
  ];
  const questionData7: QuestionDataType[] = [
    {
      key: "1",
      act: "保育士等に相手になってもらって、いろいろな物でつもり遊びをする",
    },
    {
      key: "2",
      act: "自分の物と、他人の物との区別をする",
    },
    {
      key: "3",
      act: "いつも一緒にいる子どもに会うと喜ぶ",
    },
    {
      key: "4",
      act: "保育士等に見守られながら、一人遊びをする",
    },
    {
      key: "5",
      act: "保育士等と一緒に片づけができる",
    },
  ];
  const questionData8: QuestionDataType[] = [
    {
      key: "1",
      act: "スコップやバケツなどの道具を使って、水 や砂などで遊ぼうとする。",
    },
    {
      key: "2",
      act: "草花や小動物、昆虫を見て興味を示す",
    },
    {
      key: "3",
      act: "日常用具に興味を持ち何でもさわってみる",
    },
    {
      key: "4",
      act: "積木等を積み上げて遊ぶ",
    },
    {
      key: "5",
      act: "散歩に行くことを喜ぶ",
    },
  ];
  const questionData9: QuestionDataType[] = [
    {
      key: "1",
      act: "片言を話す",
    },
    {
      key: "2",
      act: "保育士等の言葉が理解できる",
    },
    {
      key: "3",
      act: "名前を呼ばれたら、言葉で返事ができる",
    },
    {
      key: "4",
      act: "生活に必要な簡単な言葉が言える（おはよう・さようなら）",
    },
    {
      key: "5",
      act: "友だちや保育士等の名前が言える",
    },
    {
      key: "6",
      act: "身体の部位を指さして言える（目・口・耳・手・足・腹）",
    },
  ];
  const questionData10: QuestionDataType[] = [
    {
      key: "1",
      act: "リズムにのって、からだを動かす",
    },
    {
      key: "2",
      act: "簡単な歌の一部が歌える",
    },
    {
      key: "3",
      act: "簡単な楽器で遊ぶ",
    },
    {
      key: "4",
      act: "保育士等と一緒に模倣遊びをする",
    },
    {
      key: "5",
      act: "円錯のなぐりがきができる",
    },
    {
      key: "6",
      act: "紙をちぎったり、はがしたりする",
    },
    {
      key: "7",
      act: "粘土をちぎったり丸めたりする",
    },
    {
      key: "8",
      act: "積木や組木を組み立てたり、くずしたりする",
    },
  ];

  const columns: TableColumnsType<ExpandedDataType> = [
    { title: "主な活動", dataIndex: "act", key: "act",width: '50%' },
    {
      title: "入所",
      dataIndex: "operation1",
      width: '25%',
      key: "operation1",
      render: () => (
        // <Dropdown menu={{ items: month }}>
        //   <Button>
        //     <Space>
        //       月
        //       <DownOutlined />
        //     </Space>
        //   </Button>
        // </Dropdown>
        <Select defaultValue="3"
          options={[
          { value: '1', label: '／' },
          { value: '2', label: '△' },
          { value: '3', label: '○' },
          ]}
        />
      ),
    },
    {
      title: "10月",
      dataIndex: "operation2",
      key: "operation2",
      width: '25%',
      render: () => (
        // <Dropdown menu={{ items: month }}>
        //   <Button>
        //     <Space>
        //       月
        //       <DownOutlined />
        //     </Space>
        //   </Button>
        // </Dropdown>
        <Select defaultValue="2"
          options={[
          { value: '1', label: '／' },
          { value: '2', label: '△' },
          { value: '3', label: '○' },
          ]}
        />
      ),
    },
    {
      title: "2月",
      dataIndex: "operation3",
      key: "operation3",
      width: '25%',
      render: () => (
        // <Dropdown menu={{ items: month }}>
        //   <Button>
        //     <Space>
        //       月
        //       <DownOutlined />
        //     </Space>
        //   </Button>
        // </Dropdown>
        <Select defaultValue="1"
          options={[
          { value: '1', label: '／' },
          { value: '2', label: '△' },
          { value: '3', label: '○' },
          ]}
        />
      ),
    },
  ];

  const { TextArea } = Input;

  return (
    <>
      <Form
        {...formItemLayout}
        //   layout={formLayout}
        //   form={form}
        //   initialValues={{ layout: formLayout }}
        //   onValuesChange={onFormLayoutChange}
        style={{ maxWidth: 800 }}
      >
        <Form.Item label="施設長" name="layout">
          <b>渡部　圭子</b>
        </Form.Item>
        <Form.Item label="主任">
          <b>渡部　史朗</b>
        </Form.Item>
        <Form.Item label="担任">
          <b>中川　康嘉</b>
        </Form.Item>
        <Form.Item label="児童名">
          <b>長谷川</b>
        </Form.Item>

        <Form.Item label="生年月日">
          <Row >
            <FormEra/>
          </Row>
        </Form.Item>
        {/* <Form.Item label="Era">
          
        </Form.Item> */}
      </Form>

      {/* q1 */}
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
          display: "flex",
        }}
      >
        食事
      </Tag>
      <Form>
        <Table 
          columns={columns} 
          dataSource={questionData} 
          pagination={false}
          size="small" 
          style={{
            width: "100%", margin: 'auto'
          }}
          />
          
      </Form>
      {/* q2 */}
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
          display: "flex",
        }}
      >
        排泄
      </Tag>
      <Form>
        <Table
          columns={columns}
          dataSource={questionData2}
          pagination={false}
          size="small"
          style={{
            width: "100%", margin: 'auto'
          }}
        />
      </Form>
      {/* q3 */}
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
          display: "flex",
        }}
      >
        睡眠
      </Tag>
      <Form>
        <Table
          columns={columns}
          dataSource={questionData3}
          pagination={false}
          size="small"
          style={{
            width: "100%", margin: 'auto'
          }}
        />
      </Form>
      {/* q4 */}

      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
          display: "flex",
        }}
      >
        着脱
      </Tag>
      <Form>
        <Table
          columns={columns}
          dataSource={questionData4}
          pagination={false}
          size="small"
          style={{
            width: "100%", margin: 'auto'
          }}
        />
      </Form>
      {/* q5 */}
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
          display: "flex",
        }}
      >
        清潔・安全
      </Tag>
      <Form>
        <Table
          columns={columns}
          dataSource={questionData5}
          pagination={false}
          size="small"
          style={{
            width: "100%", margin: 'auto'
          }}
        />
      </Form>
      {/* q6 */}
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
          display: "flex",
        }}
      >
        運動
      </Tag>
      <Form>
        <Table
          columns={columns}
          dataSource={questionData6}
          pagination={false}
          size="small"
          style={{
            width: "100%", margin: 'auto'
          }}
        />
      </Form>
      {/* q7 */}
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
          display: "flex",
        }}
      >
        人間関係
      </Tag>
      <Form>
        <Table
          columns={columns}
          dataSource={questionData7}
          pagination={false}
          size="small"
          style={{
            width: "100%", margin: 'auto'
          }}
        />
      </Form>

      {/* q8 */}
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
          display: "flex",
        }}
      >
        環境
      </Tag>
      <Form>
        <Table
          columns={columns}
          dataSource={questionData8}
          pagination={false}
          size="small"
          style={{
            width: "100%", margin: 'auto'
          }}
        />
      </Form>
      {/* q9 */}
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
          display: "flex",
        }}
      >
        言葉
      </Tag>
      <Form>
        <Table
          columns={columns}
          dataSource={questionData9}
          pagination={false}
          size="small"
          style={{
            width: "100%", margin: 'auto'
          }}
        />
      </Form>
      {/* q10 */}
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
          display: "flex",
        }}
      >
        表現
      </Tag>
      <Form>
        <Table
          columns={columns}
          dataSource={questionData10}
          pagination={false}
          size="small"
          style={{
            width: "100%", margin: 'auto'
          }}
        />
      </Form>

      {/* first textarea */}
      <Tag
        color="blue"
        style={{
          fontSize: "14px",
          border: "1px ",
          padding: "6px",
          width: "100%",
          margin: "auto",
        }}
      >
        発達経過記録 ・ 特記事項
      </Tag>
      <Form style={{ maxWidth: 1000 }}>
        <Form.Item label="年度当初時所見">
          <TextArea rows={6} />
        </Form.Item>
        <Form.Item label="新規・継続">
          <DatePicker onChange={onChange} placeholder="" />
        </Form.Item>
        <Form.Item label="総合所見">
          <TextArea rows={6} />
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormStudent2;
