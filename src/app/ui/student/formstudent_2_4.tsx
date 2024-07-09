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
      act: "集中して楽しく食事をする",
    },
    {
      key: "2",
      act: "嫌いなものでも少しは食べられる",
    },
    {
      key: "3",
      act: "箸を使って食べる",
    },
    {
      key: "4",
      act: "完全ではないがこぼしたら自分で始末する",
    },
    {
      key: "5",
      act: "食事の後始末ができる",
    },
  ];
  const questionData2: QuestionDataType[] = [
    {
      key: "1",
      act: "自分で行きたいときに行く",
    },
    {
      key: "2",
      act: "汚さないで排泄する",
    },
    {
      key: "3",
      act: "排泄後、紙で拭く",
    },
    {
      key: "4",
      act: "排泄後、水を流す",
    },
    {
      key: "5",
      act: "便所のはきものを揃えて脱ぐ",
    },
    {
      key: "6",
      act: "排泄後の手洗いをきちんとする",
    },
    {
      key: "7",
      act: "便所に入る時ノックをする",
    },
  ];
  const questionData3: QuestionDataType[] = [
    {
      key: "1",
      act: "言葉かけにより午睡をする",
    },
    {
      key: "2",
      act: "機嫌よく起きる",
    },
    {
      key: "3",
      act: "午睡の準備や後片付けを手伝おうとする",
    },
  ];
  const questionData4: QuestionDataType[] = [
    {
      key: "1",
      act: "衣服の前後、裏表を知って一人で着脱する",
    },
    {
      key: "2",
      act: "一人で前ボタンのはめ外しがきちんとできる",
    },
    {
      key: "3",
      act: "脱いだ衣服をきちんと後始末する",
    },
    {
      key: "4",
      act: "靴の左右が大体わかる",
    },
    {
      key: "5",
      act: "促されて衣服の調節をしようとする",
    },
  ];
  const questionData5: QuestionDataType[] = [
    {
      key: "1",
      act: "食前、排泄後、遊びの後の手洗いをきちんと する",
    },
    {
      key: "2",
      act: "洗った後は必ず拭く",
    },
    {
      key: "3",
      act: "鼻汁をかむのが上手になり、そのつど行う",
    },
    {
      key: "4",
      act: "衣服が汚れたら自分で着替えようとする",
    },
    {
      key: "5",
      act: "うがいや歯磨きを一人でしようとする",
    },
    {
      key: "6",
      act: "時には身体の異常を自分から保育士等に訴える",
    },
    {
      key: "7",
      act: "危ない場所に近づいたり危険な遊びをするこ とが少なくなる",
    },
    {
      key: "8",
      act: "物の危なくない使い方ができる",
    },
    {
      key: "9",
      act: "注意された場所に近づかない",
    },
    {
      key: "10",
      act: "避難訓練など保育士等の指示に従って行動する",
    },
    {
      key: "11",
      act: "交通のきまりを知る",
    },
  ];
  const questionData6: QuestionDataType[] = [
    {
      key: "1",
      act: "合図にあわせて走る、止まるが確実になる",
    },
    {
      key: "2",
      act: "音楽に合わせて簡単な体操をする",
    },
    {
      key: "3",
      act: "平均台を一人で前歩きができる",
    },
    {
      key: "4",
      act: "連続して片足とびができる",
    },
    {
      key: "5",
      act: "補助されてスキップをする",
    },
    {
      key: "6",
      act: "補助されて前転をする",
    },
    {
      key: "7",
      act: "了棒で足抜きまわりができる",
    },
    {
      key: "8",
      act: "長縄の波を眺び越えることができる",
    },
    {
      key: "9",
      act: "ボールを的に向かって投げる",
    },
    {
      key: "10",
      act: "水面上に顔が出る深さを叶うことができる(プール)",
    },
    {
      key: "11",
      act: "絵本を 1 ページずつめくれる",
    },
  ];
  const questionData7: QuestionDataType[] = [
    {
      key: "1",
      act: "自分の持ち物や身のまわりの始末をひとりでける",
    },
    {
      key: "2",
      act: "簡単なさまりや順番、交代がわかる",
    },
    {
      key: "3",
      act: "友だちといろいろなごっこ遊びをする",
    },
    {
      key: "4",
      act: "手伝いをすることを喜ぶ",
    },
    {
      key: "5",
      act: "年上の友だちに遊んでもらったり、まねて遊んだりする",
    },
    {
      key: "6",
      act: "地域の人と触れ合うことを喜ぶ",
    },
  ];
  const questionData8: QuestionDataType[] = [
    {
      key: "1",
      act: "身近な動植物等を、見たり、触れたり、試したりする",
    },
    {
      key: "2",
      act: "天気の変化に気づく",
    },
    {
      key: "3",
      act: "物の大小、多少の比較をする",
    },
    {
      key: "4",
      act: "身のまわりの物の色の名称がわかる (5一7)",
    },
    {
      key: "5",
      act: "使ったおもちゃなどを元の場所に片付ける",
    },
    {
      key: "6",
      act: "身近な用具や器具に関心を持つ",
    },
  ];
  const questionData9: QuestionDataType[] = [
    {
      key: "1",
      act: "自分で思ったことや感じたことを言葉にする",
    },
    {
      key: "2",
      act: "保育士等にして欲しいこと困ったことを訴えたり「なぜ」「どうして」などの質問をする",
    },
    {
      key: "3",
      act: "脆拶や返事をしたり、生活や遊びに必要な言茶を使う",
    },
    {
      key: "4",
      act: "興味をもった言葉を、面白がって開いたり言ったりする",
    },
  ];
  const questionData10: QuestionDataType[] = [
    {
      key: "1",
      act: "絵本や童話などの簡単な内容がわかり、イメージをもって楽しんで開く",
    },
    {
      key: "2",
      act: "構成素材 (粘土、砂等) で自由に思ったものを作ったり、 こわしたり、 試したりする",
    },
    {
      key: "3",
      act: "絵の具やパス、クレヨンを使って好きなように描く",
    },
    {
      key: "4",
      act: "形の組み合わせや色の選択が豊かになる",
    },
    {
      key: "5",
      act: "みんなといっしょに楽しく歌う",
    },
    {
      key: "6",
      act: "簡単なリズム合奏をする",
    },
    {
      key: "7",
      act: "身近な物や動物等の動きをまねて身体で表す",
    },
  ];

  const columns: TableColumnsType<ExpandedDataType> = [
    { title: "主な活動", dataIndex: "act", key: "act",width: '50%' },
    {
      title: "入所",
      dataIndex: "operation1",
      key: "operation1",
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
        <Select defaultValue="1"
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
          <Row>
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
