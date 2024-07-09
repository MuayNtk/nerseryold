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
      act: "好き嫌いをしないで何でも食べる",
    },
    {
      key: "3",
      act: "正しい姿勢で食べる",
    },
    {
      key: "4",
      act: "こぼしたら自分で始末する",
    },
    {
      key: "5",
      act: "食後の休息がとれるようになる",
    },
  ];
  const questionData2: QuestionDataType[] = [
    {
      key: "1",
      act: "自分で行きたいときに行く",
    },
    {
      key: "2",
      act: "排港後の手洗いをきちんとする",
    },
    {
      key: "3",
      act: "便所のはきものを正しく揃える",
    },
    {
      key: "4",
      act: "便器を汚さないで使う",
    },
    {
      key: "5",
      act: "便所に入る時ノックをする",
    },
  ];
  const questionData3: QuestionDataType[] = [
    {
      key: "1",
      act: "静かに午睡をする",
    },
    {
      key: "2",
      act: "早く目覚めたり、眠れなかったときは静かに横になって休息する",
    },
    {
      key: "3",
      act: "午睡の準備や後片付けの手伝いをする",
    },
  ];
  const questionData4: QuestionDataType[] = [
    {
      key: "1",
      act: "衣服の着脱を順庁よく行う",
    },
    {
      key: "2",
      act: "帽子の前後を知ってかぶる",
    },
    {
      key: "3",
      act: "穂の左右をまちがわずにはく",
    },
    {
      key: "4",
      act: "脱いだ衣服はていねいにたたみ、片付ける",
    },
    {
      key: "5",
      act: "乱れた衣服を直そうとする",
    },
    {
      key: "6",
      act: "衣服の調節をしようとする",
    },
  ];
  const questionData5: QuestionDataType[] = [
    {
      key: "1",
      act: "手の裏表や指の間を注意して洗い、きれいに拭く",
    },
    {
      key: "2",
      act: "汚れた衣服を進んで着准える",
    },
    {
      key: "3",
      act: "うがいの意味を知り、進んでうがいをする",
    },
    {
      key: "4",
      act: "歯の大切さを知り、歯磨きを丁寧にする",
    },
    {
      key: "5",
      act: "鼻水が出たら自分でかむ",
    },
    {
      key: "6",
      act: "自分から身体の異常を訴える",
    },
    {
      key: "7",
      act: "危険な物や場所がわかり、遊具・用具などを気をつけて使う",
    },
    {
      key: "8",
      act: "水遊びの危険を知り指示に従って遊ぶ",
    },
    {
      key: "9",
      act: "交通ルールを守る",
    },
    {
      key: "10",
      act: "避難訓練では指示に従って機敏に行動する",
    },
  ];
  const questionData6: QuestionDataType[] = [
    {
      key: "1",
      act: "障害物を避けて走る",
    },
    {
      key: "2",
      act: "平均台の上で方向転換ができる",
    },
    {
      key: "3",
      act: "リズムに合わせて、スキップやギャロップができる",
    },
    {
      key: "4",
      act: "前転だ正しくできる",
    },
    {
      key: "5",
      act: "前まわりをする(鉄棒)",
    },
    {
      key: "6",
      act: "尻上がりで足をかけ後まわりをする(鉄棒)",
    },
    {
      key: "7",
      act: "走って眺び箱にのぼり手をひろげて両足を揃えておりる",
    },
    {
      key: "8",
      act: "縄跳びを使って両足眺びをする",
    },
    {
      key: "9",
      act: "ケンパーができる",
    },
    {
      key: "10",
      act: "ボールをついて取ることができる",
    },
    {
      key: "11",
      act: "水を怖がらずに顔をつけることができる(プール)",
    },
    {
      key: "12",
      act: "固結びができる",
    },
  ];
  const questionData7: QuestionDataType[] = [
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
  const questionData8: QuestionDataType[] = [
    {
      key: "1",
      act: "動征物を飼育観祭することを喜び、その成長に関心を持つ",
    },
    {
      key: "2",
      act: "身近にある用具や器具等を正しく使う(のり・ハサミ・セロテープ・楽器)",
    },
    {
      key: "3",
      act: "季節の移り変わりに気づく",
    },
    {
      key: "4",
      act: "鏡の使い方がわかる (清潔、身だしなみ)",
    },
    {
      key: "5",
      act: "前後、左右、上下、遠近等位置関係がわかる",
    },
    {
      key: "6",
      act: "生活時間に関心を持ち、守ろうとする",
    },
    {
      key: "7",
      act: "5 までの対応ができる",
    },
  ];
  const questionData9: QuestionDataType[] = [
    {
      key: "1",
      act: "簡単な伝言、質問、応答をする",
    },
    {
      key: "2",
      act: "区だちとの会話を楽しむ",
    },
    {
      key: "3",
      act: "合図や指示の言葉がわかり 指示通りの行動をする",
    },
    {
      key: "4",
      act: "絵本や童話などを読み聞かせてもらい、その内容がわかりイメージを広げて楽しな",
    },
    {
      key: "4",
      act: "さまざまな経験の中で、生活に必要な標識や記号に関心を持つ",
    },
  ];
  const questionData10: QuestionDataType[] = [
    {
      key: "1",
      act: "見たり聞いたり想像したことを喜んで描く",
    },
    {
      key: "2",
      act: "自分のイメージや目的にあった材料を選び、いろいろ工夫する",
    },
    {
      key: "3",
      act: "いろいろな素材や、用具を使って作ったもので遊ぶ",
    },
    {
      key: "4",
      act: "自然な声でうたう",
    },
    {
      key: "5",
      act: "合奏することを楽しむ",
    },
    {
      key: "6",
      act: "曲に合わせて自由に身体表現をする",
    },
    {
      key: "7",
      act: "レコードや友だちの演奏を静かに聴く",
    },
  ];

  const columns: TableColumnsType<ExpandedDataType> = [
    { title: "主な活動", dataIndex: "act", key: "act",  width: '25%', },
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
        <Table columns={columns} dataSource={questionData} pagination={false}
            size="small"
            style={{
              width: "100%", margin: 'auto'
            }} />
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
