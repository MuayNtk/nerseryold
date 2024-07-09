"use client";

import React from 'react';
import {
  SettingFilled,
  HomeOutlined,
} from '@ant-design/icons';
import t from "@/app/locales/jp/common.json";//import language
import { Breadcrumb, Layout, theme, Input, Select, Button, Table } from 'antd';
import SideLayout from './../../ui/sidelayout';
import NavBar from './../../ui/navbar';
import FootLayout from './../../ui/footlayout';

const { Column, ColumnGroup } = Table;
const { Content } = Layout;

const bcList = [
  {
    href: '',
    title: <HomeOutlined />,
  },
  {
    href: '',
    title: (
      <>
        <SettingFilled />
        <span>{t.menu.setting}</span>
      </>
    ),
  },
  {title: t.menu.organizer},
];

const boxStyle: React.CSSProperties = {
  width: '90%',
  margin: '10px auto',
  borderRadius: 6,
  border: '0px',
  backgroundColor:'#FFF',
};

interface DataType {
  key: React.Key;
  position: string;
  bothname: {
    furigana:string,
    fullname:string,
  };
  gender: string;
  era: string;
  year: string;
  month: string;
  day: string;
}

const blankData = {
  key: '',
  position: '',
  bothname: {
    furigana:"",
    fullname:"",
  },
  gender: '',
  era: '',
  year: '',
  month: '',
  day: '',
};

const data: DataType[] = [
  {
    key: '1',
    position: '理 事 長',
    bothname: {
      furigana:"ワタナベ　ケイコ",
      fullname:"渡部　圭子",
    },
    gender: '女',
    era: '昭和',
    year: '11',
    month: '2',
    day: '21',
  },
  {
    key: '2',
    position: '常務理事',
    bothname: {
      furigana:"ワタナベ　シロウ",
      fullname:"渡部　史朗",
    },
    gender: '男',
    era: '昭和',
    year: '43',
    month: '5',
    day: '22',
  },
  {
    key: '3',
    position: '理　　事',
    bothname: {
      furigana:"ナカガワ　ヤスヨシ",
      fullname:"中川　康嘉",
    },
    gender: '男',
    era: '昭和',
    year: '33',
    month: '10',
    day: '1',
  },
  blankData,
  blankData,
  blankData,
  blankData,
  blankData,
  blankData,
  blankData,
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  

  return (
    <>
      <SideLayout />
      <Layout>
        <NavBar />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb items={bcList} style={{ margin: '16px 0' }} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Table 
            dataSource={data} 
            pagination={false}
            style={{ width: '100%', margin: 'auto' }}
            >
              <Column title="役職名" dataIndex="position" key="position" render={(position: string) => <Input defaultValue={position} placeholder='役職名' />} />
              <ColumnGroup title="フリガナ">
                <Column title="氏名" dataIndex="bothname" key="bothname" 
                render={(bothname: any) => 
                <div >
                <Input defaultValue={bothname.furigana} placeholder='フリガナ' />
                <Input defaultValue={bothname.fullname} placeholder='氏名' />
                </div>
              } />
              </ColumnGroup>
              <Column title="性別" dataIndex="gender" key="gender"
              render={
                (gender:string) =>
                <Select
                  labelInValue
                  defaultValue={{ label: gender }}
                  style={{ width: '100%' }}
                  options={[
                    {
                      value: '1',
                      label: '男',
                    },
                    {
                      value: '2',
                      label: '女',
                    },
                  ]}
                />
              }  />
              <ColumnGroup title="生年月日"   >
                <Column title="元号" dataIndex="era" key="era"
                render={
                  (era:string) =>
                  <Select
                    labelInValue
                    defaultValue={{ label: era }}
                    style={{ width:  '100%' }}
                    options={[
                      {
                        value: '４',
                        label: '令和',
                      },
                      {
                        value: '３',
                        label: '平成',
                      },
                      {
                        value: '2',
                        label: '昭和',
                      },
                      {
                        value: '1',
                        label: '大昭',
                      },
                    ]}
                  />
                }  />
                <Column  title="年" dataIndex="year" key="year"   align="center" width={150} 
                  render={(year: string) => 
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Input style={{ width: '60%' }} defaultValue={year} placeholder='年' />
                    </div>
                } />
                <Column title="月" dataIndex="month" key="月" align="center" width={150} 
                  render={(month: string) => 
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                       <Input style={{ width:  '60%' }} defaultValue={month} placeholder='フリガナ' />
                    </div>
                } />
                <Column title="日" dataIndex="day" key="day" align="center" width={150} 
                  render={(day: string) => 
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                       <Input style={{ width:  '60%' }} defaultValue={day} placeholder='日' />
                    </div>
                } />
              </ColumnGroup>
            </Table>
            <br />
            <center><Button type="primary">修正</Button></center>
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default App;