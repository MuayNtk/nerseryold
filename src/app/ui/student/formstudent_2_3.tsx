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
      act: "よくかんで食べる",
    },
    {
      key: "2",
      act: "嫌いなものでも、少しずつ食べようとする",
    },
    {
      key: "3",
      act: "こぼすこともあるが、一人で食べる",
    },
    {
      key: "4",
      act: "こぼしたら自分で始末しようとする",
    },
    {
      key: "5",
      act: "箸を正しく持って食べようとする",
    },
    {
      key: "6",
      act: "食前・食後の挨拶をする",
    },
    {
      key: "7",
      act: "自分の食器を片づける",
    },
    {
      key: "8",
      act: "食後のうがいをする",
    },
  ];
  const questionData2: QuestionDataType[] = [
    {
      key: "1",
      act: "「オシッコ」を知らせひとりで排泄する",
    },
    {
      key: "2",
      act: "全部脱がないで排泄する",
    },
    {
      key: "3",
      act: "排泄のあと始末をしようとする（ペーパーの正しい使い方がわかる）",
    },
    {
      key: "4",
      act: "排泄の後、手を洗う",
    },
    {
      key: "5",
      act: "促されて、便所のはきものにはきかえる",
    },
  ];
  const questionData3: QuestionDataType[] = [
    {
      key: "1",
      act: "ひとりで寝ようとする",
    },
    {
      key: "2",
      act: "一定時間眠る",
    },
    {
      key: "3",
      act: "機嫌よく目覚める",
    },
    {
      key: "4",
      act: "眠る前、目覚めた時にあいさつなどをする",
    },
  ];
  const questionData4: QuestionDataType[] = [
    {
      key: "1",
      act: "完全でないが、一人で衣服の着脱をする",
    },
    {
      key: "2",
      act: "完全でないが、一人で前ボタンのはめはずしをする",
    },
    {
      key: "3",
      act: "パンツ・ズボンが一人ではける",
    },
    {
      key: "4",
      act: "一人でソックスをはく",
    },
    {
      key: "5",
      act: "一人で、きちんと靴をはく",
    },
    {
      key: "6",
      act: "手伝ってもらって脱いだ衣服の始末をする",
    },
  ];
  const questionData5: QuestionDataType[] = [
    {
      key: "1",
      act: "顔や手足が汚れたら洗ったり拭いたりする",
    },
    {
      key: "2",
      act: "促されて、うがいや歯磨きをする",
    },
    {
      key: "3",
      act: "衣服が汚れていることに気づき、着替えようとする",
    },
    {
      key: "4",
      act: "鼻のかみ方を知る",
    },
    {
      key: "5",
      act: "時には身体の異常を自分から保育者に訴える",
    },
    {
      key: "6",
      act: "不潔なものを口に入れない",
    },
    {
      key: "7",
      act: "危ない場所がわかり近寄らないようになる",
    },
    {
      key: "8",
      act: "怖がらずに、避難訓練に参加する",
    },
    {
      key: "9",
      act: "立ったあと机の下に椅子を入れる",
    },
  ];
  const questionData6: QuestionDataType[] = [
    {
      key: "1",
      act: "両足でピョンピョンとぶ",
    },
    {
      key: "2",
      act: "鉄棒にぶら下がり身体を揺らす",
    },
    {
      key: "3",
      act: "ストップの合図で止まる",
    },
    {
      key: "4",
      act: "前の人について歩くことができる",
    },
    {
      key: "5",
      act: "平均台の上を一人で横歩きができる",
    },
    {
      key: "1",
      act: "マットで横転ができる",
    },
    {
      key: "2",
      act: "５０㎝位の高さからとびおりる",
    },
    {
      key: "3",
      act: "ボールをけることができる",
    },
    {
      key: "4",
      act: "ボールを片手で投げる",
    },
    {
      key: "5",
      act: "ボールを受けとめられる",
    },
    {
      key: "6",
      act: "片足で２～３秒立つことができる",
    },
    {
      key: "7",
      act: "三輪車にのってこげる",
    },
  ];
  const questionData7: QuestionDataType[] = [
    {
      key: "1",
      act: "簡単なきまりがわかる",
    },
    {
      key: "2",
      act: "保育士等の援助によって、自分の物の置き場所 がわかる",
    },
    {
      key: "3",
      act: "保育士等の仲立ちによって。共同の遊具などを 使って遊ぶ",
    },
    {
      key: "4",
      act: "保育士等と一緒に簡単なごっこ遊びをする",
    },
    {
      key: "5",
      act: "まねをして遊具を片付けたり、掃除をしたり する",
    },
    {
      key: "6",
      act: "仲良しの友だちと遊ぶ",
    },
  ];
  const questionData8: QuestionDataType[] = [
    {
      key: "1",
      act: "どろんこ遊びを喜ぶ",
    },
    {
      key: "2",
      act: "草花や小動物に関心を持つ",
    },
    {
      key: "3",
      act: "ハサミやのりが使える",
    },
    {
      key: "4",
      act: "色や形のちがいがわかる",
    },
    {
      key: "5",
      act: "物の大小、多い少ないがわかる",
    },
    {
      key: "6",
      act: "色の名前がわかる（３色位）",
    },
    {
      key: "7",
      act: "行事が少しずつわかり参加することを喜ぶ",
    },
  ];
  const questionData9: QuestionDataType[] = [
    {
      key: "1",
      act: "自分で思ったことを言葉で言う",
    },
    {
      key: "2",
      act: "身の回りの簡単な事象を言葉でいう",
    },
    {
      key: "3",
      act: "自分の名前がきちんと言える",
    },
    {
      key: "4",
      act: "保育士等や友だちの名前を言う",
    },
    {
      key: "5",
      act: "絵本や紙芝居を楽しんでみたり、聞いたりし、 繰り返しのある言葉の模倣を楽しむ",
    },
  ];
  const questionData10: QuestionDataType[] = [
    {
      key: "1",
      act: "粘土、砂、水、積木などで好きなものを作っ て遊ぶ",
    },
    {
      key: "2",
      act: "描いたり作ったりした物に名前をつけたり話ができる",
    },
    {
      key: "3",
      act: "閉じた丸がかける",
    },
    {
      key: "4",
      act: "いろいろな色をつかって描く",
    },
    {
      key: "5",
      act: "粘土や紙をちぎる、丸める、伸ばすなどして 物の変化を楽しむ",
    },
    {
      key: "6",
      act: "歌にあわせて手遊びしたり、リズムに合わせ て身体を動かしたりする",
    },
    {
      key: "7",
      act: "簡単な歌をうたったり、拍子打ちをする",
    },
    {
      key: "8",
      act: "動物や乗物などの動きを真似る",
    },
  ];

  const columns: TableColumnsType<ExpandedDataType> = [
    { title: "主な活動", dataIndex: "act", key: "act",width: '50%'  },
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
