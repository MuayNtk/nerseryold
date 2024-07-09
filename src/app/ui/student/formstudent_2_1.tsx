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
  Col,
  Row,
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
  month: string;
}
interface QuestionDataType {
  key: string;
  act: string;
  month: string;
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
      label: "／",
    },
    {
      key: "2",
      label: "○",
    },
  ];

  const tabMenu: MenuProps["items"] = [
    { label: "first tab", key: "t1" },
    { label: "second tab", key: "t2" },
    { label: "third tab", key: "t3" },
    { label: "fourth tab", key: "t4" },
    { label: "fifth tab", key: "t5" },
    { label: "sixth tab", key: "t6" },
  ];

  const menuProps = {
    items,
    month,
  };

  const questionData: QuestionDataType[] = [
    {
      key: "1",
      act: "つぶしがゆなどドロドロしたものを食べる（離乳の開始期）",
      month: "5",
    },
    {
      key: "2",
      act: "パンがゆ、野菜、白身魚の裏ごしを食べる",
      month: "6-7",
    },
    {
      key: "3",
      act: "軟飯や野菜の細かく切ったものを食べる",
      month: "9-11",
    },
    {
      key: "4",
      act: "幼児食の細かく切ったものを食べる",
      month: "12-15",
    },
    {
      key: "5",
      act: "自分で食べようとしたり、飲もうとして手を伸ばす",
      month: "7",
    },
    {
      key: "6",
      act: "ささえるとコップで飲める",
      month: "10",
    },
    {
      key: "7",
      act: "こぼすが、コップやスプーンをもって食べようとする",
      month: "12",
    },
    {
      key: "8",
      act: "こぼすがコップやスプーンをもって食べる",
      month: "13-15",
    },
    {
      key: "9",
      act: "促されると挨拶の動作ができる",
      month: "12-15",
    },
    {
      key: "10",
      act: "促されると食後、自分で口のまわりを拭こうとする",
      month: "13-15",
    },
  ];

  const questionData2: QuestionDataType[] = [
    {
      key: "1",
      act: "おむつがぬれたら泣き、取り替えてもらうと泣きやむ",
      month: "4-6",
    },
    {
      key: "1",
      act: "おむつをぬらすこともあるが、支えられて便器に腰かけると排便、排尿する",
      month: "11",
    },
    {
      key: "1",
      act: "「シーは？」の促しに意思表示ができる",
      month: "13-15",
    },
  ];
  const questionData3: QuestionDataType[] = [
    {
      key: "1",
      act: "機嫌よく眠る",
      month: "6-10",
    },
    {
      key: "1",
      act: "機嫌よく目覚める",
      month: "10",
    },
    {
      key: "1",
      act: "午前・午後の２回睡になる",
      month: "10",
    },
    {
      key: "1",
      act: "１回睡になり、時間も一定してくる",
      month: "12-15",
    },
    {
      key: "1",
      act: "手足を動かし、着脱の誘いかけに応じる",
      month: "11-15",
    },
  ];

  const questionData4: QuestionDataType[] = [
    {
      key: "1",
      act: "寝ていて自由に首の向きをかえる",
      month: "2",
    },
    {
      key: "1",
      act: "首がすわる",
      month: "3",
    },
    {
      key: "1",
      act: "腹ばいにすると両手をつっぱる",
      month: "5",
    },
    {
      key: "1",
      act: "寝返りをする",
      month: "6",
    },
    {
      key: "1",
      act: "膝の上でピョンピョンはねる",
      month: "7",
    },
    {
      key: "1",
      act: "一人ですわる",
      month: "7-8",
    },
    {
      key: "1",
      act: "這う",
      month: "7-10",
    },
    {
      key: "1",
      act: "自分でつかまり立ちをする",
      month: "9",
    },
    {
      key: "1",
      act: "掴まらないで床からの立ち上がりができる",
      month: "11",
    },
    {
      key: "1",
      act: "一人で２，３歩あるく（初歩）",
      month: "12-15",
    },
    {
      key: "1",
      act: "腕でバランスを取ってヨチヨチ歩きができる",
      month: "13-15",
    },
  ];

  const questionData5: QuestionDataType[] = [
    {
      key: "1",
      act: "動くものをじっとみつめる",
      month: "2",
    },
    {
      key: "1",
      act: "音のする方をみる",
      month: "3",
    },
    {
      key: "1",
      act: "手に触れたものを、握る",
      month: "2-3",
    },
    {
      key: "1",
      act: "手に触れたものを、口に運ぶ",
      month: "3-4",
    },
    {
      key: "1",
      act: "物を振ったり、打ちつけたりして遊ぶ",
      month: "4-5",
    },
  ];

  const questionData6: QuestionDataType[] = [
    {
      key: "1",
      act: "玩具を一方の手から、他方に持ちかえる",
      month: "6",
    },
    {
      key: "1",
      act: "容器のふたを開けたり閉めたりする",
      month: "8",
    },
    {
      key: "1",
      act: "積み木を積もうとする",
      month: "9",
    },
    {
      key: "1",
      act: "両手に持ったものを打ち合わせて遊ぶ",
      month: "9-10",
    },
    {
      key: "1",
      act: "干しぶどうくらいの大きさの物をつまむ",
      month: "9-10",
    },
    {
      key: "1",
      act: "ラッパを吹いたり音の出るものを楽しむ",
      month: "9-10",
    },
    {
      key: "1",
      act: "音楽を聞いて、手足、首などを動かす",
      month: "10",
    },
    {
      key: "1",
      act: "物を容器に入れたり落としたりして遊ぶ",
      month: "10-11",
    },
    {
      key: "1",
      act: "紙やぶりを喜ぶ",
      month: "11-15",
    },
    {
      key: "1",
      act: "砂遊びに興味を持つ",
      month: "11-15",
    },
    {
      key: "1",
      act: "水遊びを喜ぶ",
      month: "11-15",
    },
    {
      key: "1",
      act: "斜め直線状のなぐりがきをする",
      month: "12-15",
    },
    {
      key: "1",
      act: "低い台や階段等を登って遊ぶ",
      month: "12-15",
    },
    {
      key: "1",
      act: "箱車やダンボール等を押したり引っぱったしてあそぶ",
      month: "13-15",
    },
    {
      key: "1",
      act: "ボールを転がしたり、追って遊ぶ",
      month: "13-15",
    },
  ];
  const questionData7: QuestionDataType[] = [
    {
      key: "1",
      act: "笑ったり、話しかけたりすると笑いかえす",
      month: "3-4",
    },
    {
      key: "1",
      act: "喜び、怒り、恐れなどの情緒が現れてくる",
      month: "5",
    },
    {
      key: "1",
      act: "母親と他人の区別ができる",
      month: "5",
    },
    {
      key: "1",
      act: "いない、いないバアーを喜ぶ",
      month: "7",
    },
    {
      key: "1",
      act: "持っているものを取られると不快を示す",
      month: "8",
    },
    {
      key: "1",
      act: "身近な人から話しかけてもらうことを喜ぶ",
      month: "11",
    },
    {
      key: "1",
      act: "友だちと一緒にいることを好む",
      month: "12",
    },
    {
      key: "1",
      act: "人まねが盛んになる",
      month: "10",
    },
    {
      key: "1",
      act: "ほめられると同じ動作を繰り返す",
      month: "12",
    },
  ];
  const questionData8: QuestionDataType[] = [
    {
      key: "1",
      act: "話しかけると話をするように、声を出して応じる",
      month: "3",
    },
    {
      key: "1",
      act: "人に向かって声を出す",
      month: "6-7",
    },
    {
      key: "1",
      act: "いろいろな発音をする（マ、バ、パ）",
      month: "6-8",
    },
    {
      key: "1",
      act: "いろいろな発音をする（タ、ダ、ナ）",
      month: "8-10",
    },
    {
      key: "1",
      act: "同じ音をリズミカルに反復する（マママ、ダダダ）",
      month: "8-9",
    },
    {
      key: "1",
      act: "ほめられたり叱られたりする言葉がわかる",
      month: "7-9",
    },
    {
      key: "1",
      act: "片言を言う（マンマ、ブーブーなど）",
      month: "10",
    },
    {
      key: "1",
      act: "自分の要求するもの欲しいものを、指さして要求する",
      month: "10",
    },
    {
      key: "1",
      act: "具体物の指さしができる",
      month: "15",
    },
  ];

  const columns: TableColumnsType<ExpandedDataType> = [
    { title: "主な活動", dataIndex: "act", key: "act", width: '50%' },
    { title: "標準月令", dataIndex: "month", key: "month", width: '25%'},
    {
      title: "形成月令",
      dataIndex: "operation",
      width: '25%',
      key: "operation",
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
            { value: '2', label: '○' },
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
        睡眠・着脱
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
        運動
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
        感覚機能
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
        感覚機能・探索操作
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
        言葉
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
          <br />
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
      <Form style={{ margin: "10px 0" }}>
        <Form.Item label="年度当初時所見" style={{ maxWidth: 500 }}>
          <TextArea rows={6} />
        </Form.Item>
        <Form.Item label="新規・継続" style={{ margin: "10px 0" }}>
          <DatePicker onChange={onChange} placeholder="" />
        </Form.Item>
        <Form.Item label="総合所見" style={{ margin: "10px 0" }}>
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
