"use client";

import React, { useState } from 'react';
import { Col, ConfigProviderProps, Form, Input, Row, Select, Table, TableColumnsType, DatePicker, Space, Card, Button, Flex } from 'antd';
import type { DatePickerProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 8 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    date: '${label} is not a valid date!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */



const onFinish = (values: any) => {
  console.log(values);
};





// date
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

// textarea
const { TextArea } = Input;

const FormHistoryList3: React.FC = () => {
 
  return (

    <>
     
        <Row className="mt-7 ms-5">
            <Col className=""><label>家族の状況</label></Col>
        </Row>
        <Col className="mt-7">
            <Row className="mt-3 ms-5">
                <Col span={3} className="text-end pt-1 pe-2"><label>氏 名</label></Col>
                <Col span={1} className="text-start pt-1"></Col>
                <Col span={6}><Input type="text" /></Col>
                <Col span={2} className="text-end pt-1 pe-2"><label>誕生日</label></Col>
                <Col span={1} className="text-start pt-1"></Col>
                <Col span={3}>
                    <Space className="w-full" direction="vertical">
                    <DatePicker onChange={onChange} style={{ width: '100%' }} />
                    </Space>
                </Col>
                <Col span={2} className="text-right pt-1 pe-2"><label>時代</label></Col>
                <Col span={2}>
                    <Select defaultValue="令和" style={{ width: '80%' }}
                    options={[
                        { value: '平成', label: '平成' },
                        { value: '令和', label: '令和' }
                    ]}
                    />
                </Col>
            </Row>
            <Row className="mt-3 ms-5">
                <Col span={3} className="text-end pt-1 pe-2"><label>続柄</label></Col>
                <Col span={1} className="text-start pt-1"></Col>
                <Col span={6}><Input type="text" /></Col>
                <Col span={3} className="text-end pt-1 pe-2"><label>職業(具体的に)</label></Col>
                <Col span={6}><Input type="text" /></Col>
            </Row>
            <Row className="mt-3 ms-5">
                <Col span={3} className="text-end pt-1 pe-2"><label>勤 務 先</label></Col>
                <Col span={1} className="text-start pt-1"></Col>
                <Col span={6}><Input type="text" /></Col>
                <Col span={3} className="text-center pt-1 pe-2"><label>ＴＥＬ</label></Col>
                <Col span={6}><Input type="text" /></Col>
            </Row>
        </Col>
      <Col className="mt-7">
        <Row className="mt-3 ms-5">
            <Col span={3} className="text-end pt-1 pe-2"><label>氏 名</label></Col>
            <Col span={1} className="text-start pt-1"></Col>
            <Col span={6}><Input type="text" /></Col>
            <Col span={2} className="text-end pt-1 pe-2"><label>誕生日</label></Col>
            <Col span={1} className="text-start pt-1"></Col>
            <Col span={3}>
                <Space className="w-full" direction="vertical">
                <DatePicker onChange={onChange} style={{ width: '100%' }} />
                </Space>
            </Col>
            <Col span={2} className="text-right pt-1 pe-2"><label>時代</label></Col>
            <Col span={2}>
                <Select defaultValue="令和" style={{ width: '80%' }}
                options={[
                    { value: '平成', label: '平成' },
                    { value: '令和', label: '令和' }
                ]}
                />
            </Col>
        </Row>
        <Row className="mt-3 ms-5">
          <Col span={3} className="text-end pt-1 pe-2"><label>続柄</label></Col>
          <Col span={1} className="text-start pt-1"></Col>
          <Col span={6}><Input type="text" /></Col>
          <Col span={3} className="text-end pt-1 pe-2"><label>職業(具体的に)</label></Col>
          <Col span={6}><Input type="text" /></Col>
        </Row>
        <Row className="mt-3 ms-5">
          <Col span={3} className="text-end pt-1 pe-2"><label>勤 務 先</label></Col>
          <Col span={1} className="text-start pt-1"></Col>
          <Col span={6}><Input type="text" /></Col>
          <Col span={3} className="text-center pt-1 pe-2"><label>ＴＥＬ</label></Col>
          <Col span={6}><Input type="text" /></Col>
        </Row>
      </Col>
     
      
      
     
      <Row className="mt-7 ms-5">
        <Col><label>かかりつけの病院</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label>小児科</label></Col>
        <Col span={2} className="text-start pt-1"><label>TEL</label></Col>
        <Col span={6}><Input type="text" /></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label>内 科</label></Col>
        <Col span={2} className="text-start pt-1"><label>TEL</label></Col>
        <Col span={6}><Input type="text" /></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label>外 科</label></Col>
        <Col span={2} className="text-start pt-1"><label>TEL</label></Col>
        <Col span={6}><Input type="text" /></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label>歯 科</label></Col>
        <Col span={2} className="text-start pt-1"><label>TEL</label></Col>
        <Col span={6}><Input type="text" /></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label>科</label></Col>
        <Col span={2} className="text-start pt-1"><label>TEL</label></Col>
        <Col span={6}><Input type="text" /></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label>科</label></Col>
        <Col span={2} className="text-start pt-1"><label>TEL</label></Col>
        <Col span={6}><Input type="text" /></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"></Col>
        <Col span={2} className="text-start pt-1"><label>血液型</label></Col>
        <Col span={4}><Input type="text" /></Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><label>妊娠中の状況</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 異常なし</label></Col>
        <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> あり</label></Col>
        <Col span={4}><Input type="text" /></Col>
        <Col span={2} className="text-center pt-1"><label> 妊娠期間</label></Col>
        <Col span={3}><Input type="text" /></Col>
        <Col span={2} className="text-center pt-1"><label> 週</label></Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><label>分娩時の状況</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 異常なし</label></Col>
        <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> あり</label></Col>
        <Col span={4}><Input type="text" /></Col>
        <Col span={2} className="text-center pt-1"><label> 出生時体重</label></Col>
        <Col span={3}><Input type="text" /></Col>
        <Col span={2} className="text-center pt-1"><label> ｇ</label></Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><label>出生時の状 況</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 異常なし</label></Col>
        <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> あり</label></Col>
        <Col span={4}><Input type="text" /></Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><label>乳児期の様子</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={24}>
          <Row>
            <Col span={2}></Col>
            <Col span={2} className="text-start pt-1"><label> 栄養方法</label></Col>
            <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
            <Col span={2} className="text-start pt-1"><label> 母乳</label></Col>
            <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
            <Col span={2} className="text-start pt-1"><label> 混合</label></Col>
            <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
            <Col span={2} className="text-start pt-1"><label> 人工乳</label></Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={24}>
          <Row>
            <Col span={2}></Col>
            <Col span={2} className="text-start pt-1"><label> 離乳</label></Col>
            <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
            <Col span={2} className="text-start pt-1"><label> 未開始</label></Col>
            <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
            <Col span={2} className="text-start pt-1"><label> か月</label></Col>
            <Col span={2} className="text-start pt-1"><Input type="radio" /></Col>
            <Col span={2} className="text-start pt-1"><label> 完了</label></Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={24}>
          <Row className="mt-3 ms-5">
            <Col span={2}></Col>
            <Col span={2} className="text-start pt-1"><label> 首のすわり</label></Col>
            <Col span={2}><Input type="text" /></Col>
            <Col span={2} className="text-center pt-1"><label> か月</label></Col>
            <Col span={3} className="text-start pt-1"><label> はいはい</label></Col>
            <Col span={2}><Input type="text" /></Col>
            <Col span={2} className="text-center pt-1"><label> か月</label></Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row className="mt-3 ms-5">
            <Col span={2}></Col>
            <Col span={2} className="text-start pt-1"><label> ひとり歩き</label></Col>
            <Col span={2}><Input type="text" /></Col>
            <Col span={2} className="text-center pt-1"><label> か月</label></Col>
            <Col span={3} className="text-start pt-1"><label> “マンマ”などの言葉</label></Col>
            <Col span={2}><Input type="text" /></Col>
            <Col span={2} className="text-center pt-1"><label> か月</label></Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><label>予防接種状況</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label>Ｂ型肝炎</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
        <Col span={1} className="text-center pt-1"><label>に</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label>BCG</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
        <Col span={1} className="text-center pt-1"><label>に</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label>４種混合</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
        <Col span={1} className="text-center pt-1"><label>に</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label>ロタウイルス</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
        <Col span={1} className="text-center pt-1"><label>に</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label>麻しん(はしか) 風しん</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
        <Col span={1} className="text-center pt-1"><label>に</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label>日本脳炎</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
        <Col span={1} className="text-center pt-1"><label>に</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label>ヒブ</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
        <Col span={1} className="text-center pt-1"><label>に</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label>小児肺炎球菌</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
        <Col span={1} className="text-center pt-1"><label>に</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label>水痘 (水ぼうそう)</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
        <Col span={1} className="text-center pt-1"><label>に</label></Col>
        <Col span={3}>
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><label>乳幼児健診</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> ４か月</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 平成</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 令和</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={3} className="text-start pt-1">
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> １０か月</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 平成</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 令和</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={3} className="text-start pt-1">
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> １歳６か月</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 平成</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 令和</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={3} className="text-start pt-1">
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> ３歳</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 平成</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 令和</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={3} className="text-start pt-1">
          <Space className="w-full" direction="vertical">
            <DatePicker onChange={onChange} style={{ width: '100%' }} />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 首のすわり</label></Col>
        <Col span={2}><Input type="text" /></Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><label>既往症</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 川崎病</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> 先天性股関節脱臼</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 心臓病</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> ヘルニア</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 腎臓病</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> 肺炎</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 肝臓病</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> 自家中毒</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> 大きな外傷や手術</label></Col>
        <Col span={4}><Input type="text" /></Col>
        <Col span={3}></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> その他の重い病気</label></Col>
        <Col span={4}><Input type="text" /></Col>
        <Col span={3}></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 麻しん</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> 風しん</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 水痘</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> 百日咳</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳 </label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> 流行性耳下腺炎</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 歳</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> か月 </label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 脱臼の経験</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 有</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 無</label></Col>
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> けいれん(ひきつけ)</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 有</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 無</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={1} className="text-start pt-1"><label> 有熱</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 回</label></Col>
        <Col span={1}></Col>
        <Col span={1} className="text-center pt-1"><label> 無熱</label></Col>
        <Col span={2}><Input type="text" /></Col>
        <Col span={1} className="text-center pt-1"><label> 回</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={4} className="text-start pt-1"><label> 初めてけいれんを起こした月齢</label></Col>
        <Col span={2}><Input type="text" /></Col>
        `<Col span={1} className="text-center pt-1 ms-2"><label> 年</label></Col>
        <Col span={2}><Input type="text" /></Col>`
        <Col span={1}></Col>
        <Col span={1} className="text-center pt-1"><label> 月</label></Col>
        <Col span={2} className="text-start pt-1"><label> 喘息の診断</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 有</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={2} className="text-start pt-1"><label> 無</label></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> アレルギーの診断</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={1} className="text-start pt-1"><label> 有</label></Col>
        <Col span={1} className="text-start pt-1"><Input type="radio" /></Col>
        <Col span={1} className="text-start pt-1"><label> 無</label></Col>
        <Col span={1}></Col>
        <Col span={2} className="text-start pt-1"><label> 有の場合</label></Col>
        <Col span={3}><Input type="text" /></Col>
      </Row>

      
    </>

  );
};
export default FormHistoryList3;

