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
      act: "好き嫌いをしないで残さず食べる",
    },
    {
      key: "3",
      act: "箸を使いこなす",
    },
    {
      key: "4",
      act: "食事のマナーが守れる（挨拶・姿勢・後始末）",
    },
    {
      key: "5",
      act: "食物の名前や献立に興味を持ち、栄養につい て知ろうとする",
    },
  ];
  const questionData2: QuestionDataType[] = [
    {
      key: "1",
      act: "入る時、入っている時合図をする",
    },
    {
      key: "2",
      act: "排泄後の手洗いをきちんとする",
    },
    {
      key: "3",
      act: "便所のはきものを正しく揃える",
    },
  ];
  const questionData3: QuestionDataType[] = [
    {
      key: "1",
      act: "午睡や休息の意味がわかり進んでする",
    },
    {
      key: "2",
      act: "眠れなくても、静かに横になり休息する",
    },
    {
      key: "3",
      act: "午睡の準備や後片付けを進んでする",
    },
  ];
  const questionData4: QuestionDataType[] = [
    {
      key: "1",
      act: "衣服の着脱が上手に出来きちんと整える",
    },
    {
      key: "2",
      act: "前あきのファスナー・カギホックのかけはず しをする",
    },
    {
      key: "3",
      act: "気温・体温に合わせて調節する",
    },
  ];
  const questionData5: QuestionDataType[] = [
    {
      key: "1",
      act: "手を洗うことの意味を知って洗う",
    },
    {
      key: "2",
      act: "食後の歯みがき、うがいが習慣づいてくる",
    },
    {
      key: "3",
      act: "清深にする意味がわかる",
    },
    {
      key: "4",
      act: "朋や爪等の汚れに気づき、自分から知らせたり清潔にしようとする",
    },
    {
      key: "5",
      act: "自分や友だちの身体の異常について知らせる",
    },
    {
      key: "6",
      act: "身体の各部の役割などに関心を持つ",
    },
    {
      key: "7",
      act: "危険なことがわかり 約束を守って安全な行動をする",
    },
    {
      key: "8",
      act: "水遊びの危険を知り正しくプールに入る",
    },
    {
      key: "9",
      act: "正しい運動遊具の遊び方を知り、守って遊ぶ",
    },
    {
      key: "10",
      act: "信号が解り交通ルールについて知り守る",
    },
    {
      key: "11",
      act: "避難訓練の意味が解り指示に従って確実に行動する",
    },
  ];
  const questionData6: QuestionDataType[] = [
    {
      key: "1",
      act: "将楽に合わせてリズミカルに体操する",
    },
    {
      key: "2",
      act: "いろいろな運動遊具を工夫して使い、 遊びを発展させることができる",
    },
    {
      key: "3",
      act: "跳び箱を馬跳びで、とび越えることができる",
    },
    {
      key: "4",
      act: "鉄棒で逆上がりができる",
    },
    {
      key: "5",
      act: "投げられたボールを受け止めることができる",
    },
    {
      key: "6",
      act: "ボール (中) を連続してつくことができる(1 0 回以上)",
    },
    {
      key: "7",
      act: "縄跳びができる",
    },
    {
      key: "8",
      act: "補助されて泳ぐことができる",
    },
    {
      key: "9",
      act: "指先の微細運動が楽しめる （蝶結び・あやとり・指編み・折り紙等）",
    },
  ];
  const questionData7: QuestionDataType[] = [
    {
      key: "1",
      act: "自信を持ち意欲的に行動する",
    },
    {
      key: "2",
      act: "人に迷惑をかけないように、善悪を判断して行動する",
    },
    {
      key: "3",
      act: "簡単なレールを作り出し友だちと一緒に遊びを発展させる",
    },
    {
      key: "4",
      act: "自分の意見を主張するが、相手の意見も受け入れる",
    },
    {
      key: "5",
      act: "目標に向かって友だちと協力してやり遂げる",
    },
    {
      key: "6",
      act: "お年寄りや身近な人の働きと自分とのつながりを知り感謝の気持ちをもつ",
    },
  ];
  const questionData8: QuestionDataType[] = [
    {
      key: "1",
      act: "動植物の飼育栽培の方法がわかり、すすんでその世話をする",
    },
    {
      key: "2",
      act: "自然の事象に親しみ関心を持ち、それらを利用して遊ぶ",
    },
    {
      key: "3",
      act: "四季の区別ができ、その特徴がわかる",
    },
    {
      key: "4",
      act: "区量、図形を理解し、遊びや生活の中で使う",
    },
    {
      key: "5",
      act: "生活や遊びの中で時間的な大まかなくぎりのあることがわかる (昨日、今日、明日等)",
    },
    {
      key: "6",
      act: "家庭、保育所、地域の行事に喜んで参加する",
    },
  ];
  const questionData9: QuestionDataType[] = [
    {
      key: "1",
      act: "共同の物を大切にしてゆずり合う",
    },
    {
      key: "2",
      act: "自分のしたいと思うこと、して欲しいことをはっきり言う",
    },
    {
      key: "3",
      act: "友だちを気づつったり、いたわったりすることができる",
    },
    {
      key: "4",
      act: "保育士等のすることや興味をもったことを積極的に手伝う",
    },
    {
      key: "5",
      act: "年下の子どもに親しみを持ったりお年寄りや身近な人々の話を開いたり話し掛けたりする",
    },
    {
      key: "6",
      act: "他人に迷或をかけたら謝る",
    },
  ];
  const questionData10: QuestionDataType[] = [
    {
      key: "1",
      act: "経験したこと、想像したことをいろいろな素材や用具を工夫して描いたり作ったりする",
    },
    {
      key: "2",
      act: "友だちとイメージを共有し合いながらつくることを楽しむ",
    },
    {
      key: "3",
      act: "曲の感じをつかんでうたったり、いろいろなうたを楽しむ",
    },
    {
      key: "4",
      act: "友だちのうたや合奏を静かに聴いて楽しむ",
    },
    {
      key: "5",
      act: "曲の強弱・速さ・感じなかどをつかんで打楽器やメロディ楽器を使って合奏する",
    },
    {
      key: "6",
      act: "音楽を聴きその曲想に合わせて歩いたりスキップしたりリズミカルな動きを作ったりする",
    },
  ];

  const columns: TableColumnsType<ExpandedDataType> = [
    { title: "主な活動", dataIndex: "act", key: "act", width: 600 },
    {
      title: "入所",
      dataIndex: "operation1",
      key: "operation1",
      width: 200,

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
      width: 200,
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
      width: 200,

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
      <br /><br />
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
