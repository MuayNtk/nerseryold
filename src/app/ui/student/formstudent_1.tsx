"use client";

import React, { useState } from 'react';
import { Col, Radio , Input, Row, Select, DatePicker, Space,  Button, Tag, Checkbox } from 'antd';
import type { RadioChangeEvent } from 'antd';
import FormEra from '../common/formera';
import FormAge from '../common/formage';


const { RangePicker } = DatePicker;



function onChangeCheckbox(checkedValues: any[], checkboxNames: string[]) {
  checkedValues.forEach((value: any, index: any) => {
    console.log(`Name: ${checkboxNames[index]}, Value: ${value}`);
    // alert(`Name: ${checkboxNames[index]}, Value: ${value}`);
  });
}

const FormStudent1: React.FC = () => {

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
 
  return (

    <>
       <Row className="mt-5 ms-5">
        <Col span={2} className="text-start pt-1"></Col>
        <Col span={24} className="text-start pt-1 ms-10">
          <Radio.Group onChange={onChange} value={1}>
            <Radio value={0}>０歳児</Radio>
            <Radio value={1}>１歳児</Radio>
            <Radio value={2}>２歳児</Radio>
            <Radio value={3}>３歳児</Radio>
            <Radio value={4}>４歳児</Radio>
            <Radio value={5}>５歳児</Radio>
          </Radio.Group>

        </Col>
       
        
      </Row>
      
      <Row className="mt-7 ms-5">
        <Col span={3} className="text-end pt-1 pe-2"><label>ふりがな</label></Col>
        <Col span={6}><Input type="text" /></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={3} className="text-end pt-1 pe-2"><label>氏名</label></Col>
        <Col span={6}><Input type="text" /></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={3} className="text-end pt-1 pe-2"><label>性別</label></Col>
        <Col span={6}>
          <Select defaultValue="女"
            options={[
              { value: '男', label: '男' },
              { value: '女', label: '女' }
            ]}
          />
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={3} className="text-end pt-1 pe-2"><label>生 年 月 日</label></Col>
        <FormEra/>
       
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={3} className="text-end pt-1 pe-2"><label>入 所</label></Col>
          <FormEra/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={3} className="text-end pt-1 pe-2"><label>退 所</label></Col>
          <FormEra/>
      </Row>
      <Row className="mt-2 ms-5">
      
        <Col className=""><Tag color="magenta" style={{ fontSize: '14px', padding: '6px' }}>現住所</Tag></Col>
      </Row>
        <Col className="text-center mt-5" style={{ width: '100%' }}>
          <Space >
            <Input addonBefore="〒" type="text" />
            <Input type="text" />
            <Input addonBefore="TEL" type="text" />
            <Input addonBefore="校区" type="text" />
            <Col className="text-end py-2 " span={17}><Button type="primary" ><label className="text-end font-bold bottom-10">+</label></Button></Col>
      
          </Space>
        </Col>
       
      
      <Row className="mt-3 ms-5">
        <Col className=""><Tag color="magenta" style={{ fontSize: '14px', padding: '6px' }}>家族の状況</Tag></Col>
      </Row>
      <Col className="mt-7" >
        <Row className="mt-3">
          <Col span={2} className="text-end pt-1 pe-2"><label>氏 名</label></Col>
          <Col span={6}><Input type="text" /></Col>
          <Col span={3} className="text-end pt-1 pe-2"><label>生 年 月 日</label></Col>
          <FormEra/>

        </Row>
        <Row className="mt-3">
          <Col span={2} className="text-end pt-1 pe-2"><label>続柄</label></Col>
          <Col span={6}><Input type="text" /></Col>
          <Col span={3} className="text-end pt-1 pe-2"><label>職業(具体的に)</label></Col>
          <Col span={6}><Input type="text" /></Col>
        </Row>
        <Row className="mt-3">
          <Col span={2} className="text-end pt-1 pe-2"><label>勤 務 先</label></Col>
          <Col span={6}><Input type="text" /></Col>
          <Col span={3} className="text-end pt-1 pe-2"><label>ＴＥＬ</label></Col>
          <Col span={6}><Input type="text" /></Col>
        </Row>
      </Col>
      <Col>
          <Col className="mt-7">
            <Row className="mt-3">
              <Col span={2} className="text-end pt-1 pe-2"><label>氏 名</label></Col>
              <Col span={6}><Input type="text" /></Col>
              <Col span={3} className="text-end pt-1 pe-2"><label>生 年 月 日</label></Col>
                <FormEra/>
            </Row>
            <Row className="mt-3">
              <Col span={2} className="text-end pt-1 pe-2"><label>続柄</label></Col>
              <Col span={6}><Input type="text" /></Col>
              <Col span={3} className="text-end pt-1 pe-2"><label>職業(具体的に)</label></Col>
              <Col span={6}><Input type="text" /></Col>
            </Row>
            <Row className="mt-3">
              <Col span={2} className="text-end pt-1 pe-2"><label>勤 務 先</label></Col>
              <Col span={6}><Input type="text" /></Col>
              <Col span={3} className="text-end pt-1 pe-2"><label>ＴＥＬ</label></Col>
              <Col span={6}><Input type="text" /></Col>
            </Row>
            <br />
          </Col>
          <Col className="text-end " span={19}><Button type="primary" ><label className="text-end font-bold bottom-10">+</label></Button></Col>
       
          
      </Col>
      

      <Row className="mt-2 ms-5">
        <Col><Tag color="magenta" style={{ fontSize: '14px', padding: '6px' }}>通所（園）方法</Tag></Col>
      </Row>
      <Row className=" mt-3">
        <Col span={3}></Col>
        <Col span={8} className="ms-5">
            <Col className="text-center"><label>自宅</label></Col>
            <Row className="py-3">
              <Col span={15}><Input type="text" /></Col>
              <Col span={1}></Col>
              <Col span={3}><Button type="primary" ><label className="text-end font-bold bottom-10">+</label></Button></Col>
            </Row>
            <Col className="text-center"><label>保育所（園）</label></Col>
        </Col>
      </Row>

      <Row className="mt-5 ms-5">
        <Col><Tag color="magenta" style={{ fontSize: '14px', padding: '6px' }}>かかりつけの病院</Tag></Col>
      </Row>
      <Row className="mt-2 ms-5">
        <Col span={2}></Col>
        <Col span={5} className="ms-2"><Input suffix='小児科' /></Col>
        <Col span={4} className="text-start ms-2"><Input type="text" prefix='TEL'/></Col>
      </Row>
      <Row className="mt-2 ms-5">
        <Col span={2}></Col>
        <Col span={5} className="ms-2"><Input suffix='内 科' /></Col>
        <Col span={4} className="text-start ms-2"><Input type="text" prefix='TEL'/></Col>
      </Row>
      <Row className="mt-2 ms-5">
        <Col span={2}></Col>
        <Col span={5} className="ms-2"><Input suffix='外 科' /></Col>
        <Col span={4} className="text-start ms-2"><Input type="text" prefix='TEL'/></Col>
   
      </Row>
      <Row className="mt-2 ms-5">
        <Col span={2}></Col>
        <Col span={5} className="ms-2"><Input suffix='歯 科' /></Col>
        <Col span={4} className="text-start ms-2"><Input type="text" prefix='TEL'/></Col>
     
      </Row>
      <Row className="mt-2 ms-5">
        <Col span={2}></Col>
        <Col span={5} className="ms-2"><Input suffix='科' /></Col>
        <Col span={4} className="text-start ms-2"><Input type="text" prefix='TEL'/></Col>
      </Row>
      <Row className="mt-2 ms-5">
        <Col span={2}></Col>
        <Col span={5} className="ms-2"><Input suffix='科' /></Col>
        <Col span={4} className="text-start ms-2"><Input type="text" prefix='TEL'/></Col>
      </Row>
      <Row className="mt-2 ms-5">
        <Col span={2}></Col>
        <Col span={2}  className="ms-2 pt-1"><label>血液型</label></Col>
        <Col span={3}><Input suffix='型'  type="text" /></Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col span={3} offset={2}><label>妊娠中の状況</label></Col>
        <Col span={5} className="text-start pt-1">
          <Radio.Group name="radiogroup1" defaultValue={1}>
            <Radio value={1}>異常なし</Radio>
            <Radio value={2}>あり</Radio>
          </Radio.Group>
        </Col>
        <Col span={4}><Input type="text" /></Col>
        <Col span={1}></Col>
        <Col span={2} className="text-end pt-1 "><label> 妊娠期間</label></Col>
        <Col span={2} className='ms-2'><Input type="text" suffix="週" /></Col>
      
      </Row>

 
      <Row className="mt-3 ms-5">
        <Col span={3} offset={2}><label>分娩時の状況</label></Col>
        <Col span={5} className="text-start pt-1">
          <Radio.Group name="radiogroup2" defaultValue={1}>
            <Radio value={1}>異常なし</Radio>
            <Radio value={2}>あり</Radio>
          </Radio.Group>
        </Col>
        <Col span={4}><Input type="text" /></Col>
        <Col span={1}></Col>
        <Col span={2} className="text-end pt-1"><label> 出生時体重</label></Col>
        <Col span={2} className="ms-2"><Input type="text" suffix="ｇ" /></Col>
      </Row>

      
      <Row className="mt-3 ms-5">
        <Col span={3} offset={2}><label>出生時の状 況</label></Col>
        <Col span={5} className="text-start pt-1">
          <Radio.Group name="radiogroup3" defaultValue={1}>
            <Radio value={1}>異常なし</Radio>
            <Radio value={2}>あり</Radio>
          </Radio.Group>
        </Col>
        <Col span={4}><Input type="text" /></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={3} offset={2}><label>乳児期の様子</label></Col>
        <Col span={24}>
          <Row >
            <Col span={2}></Col>
            <Col span={2} offset={1} className="text-start pt-1"><label> 栄養方法</label></Col>
            <Col span={10} className="text-start pt-1">
              <Radio.Group name="radiogroup4" defaultValue={''}>
                <Radio value={1}>母乳</Radio>
                <Radio value={2}>混合</Radio>
                <Radio value={3}>人工乳</Radio>
              </Radio.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={24}>
          <Row>
            <Col span={2}></Col>
            <Col span={2} offset={1} className="text-start pt-1"><label> 離乳</label></Col>
            <Col span={10} className="text-start pt-1">
              <Radio.Group name="radiogroup5" defaultValue={2}> 
                <Radio value={1}>未開始</Radio>
                <Radio value={2}>か月</Radio>
                <Radio value={3}>完了</Radio>
              </Radio.Group>
            </Col>
        
          </Row>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={24}>
          <Row className="mt-3 ms-5">
            <Col span={1}></Col>
            <Col span={2} offset={1} className="text-start pt-1"><label> 首のすわり</label></Col>
            <Col span={2} ><Input type="text" suffix="か月"/></Col>
     
            <Col span={4} offset={1} className="text-end pt-1 ms-3"><label> はいはい</label></Col>
            <Col span={1}></Col>
            <Col span={2} ><Input type="text" suffix="か月"/></Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row className="mt-3 ms-5">
            <Col span={2}></Col>
            <Col span={2} className="text-start pt-1"><label> ひとり歩き</label></Col>
            <Col span={2}><Input type="text" suffix="か月"/></Col>
            <Col span={4} offset={1} className="text-end pt-1 ms-3"><label> “マンマ”などの言葉</label></Col>
            <Col span={1}></Col>
            <Col span={2}><Input type="text" suffix="か月" /></Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><Tag color="magenta" style={{ fontSize: '14px', padding: '6px' }}>予防接種状況</Tag></Col>
      </Row> 

        <Row className="mt-3 ms-5">
          <Col span={4} className="text-end pt-1"><label>Ｂ型肝炎</label></Col>
          <Col span={1}></Col>
          <Col span={6}>
            <Space className="w-full" direction="vertical">
              <RangePicker  />
            </Space>
          </Col>
          <Col span={3} className="text-end pt-1"><label>BCG</label></Col>
          <Col span={1}></Col>
          <Col span={6}>
            <Space className="w-full" direction="vertical">
              <RangePicker  />
            </Space>
          </Col>
        </Row>

      <Row className="mt-3 ms-5">
        <Col span={4} className="text-end pt-1"><label>４種混合</label></Col>
        <Col span={1}></Col>
        <Col span={6}>
          <Space className="w-full" direction="vertical">
            <RangePicker  />
          </Space>
        </Col>
        <Col span={3} className="text-end pt-1"><label>ロタウイルス</label></Col>
        <Col span={1}></Col>
        <Col span={6}>
          <Space className="w-full" direction="vertical">
            <RangePicker  />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={4} className="text-end pt-1"><label>麻しん(はしか) 風しん</label></Col>
        <Col span={1}></Col>
        <Col span={6}>
          <Space className="w-full" direction="vertical">
            <RangePicker  />
          </Space>
        </Col>
        <Col span={3} className="text-end pt-1"><label>日本脳炎</label></Col>
        <Col span={1}></Col>
        <Col span={6}>
          <Space className="w-full" direction="vertical">
            <RangePicker  />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={4} className="text-end pt-1"><label>ヒブ</label></Col>
        <Col span={1}></Col>
        <Col span={6}>
          <Space className="w-full" direction="vertical">
            <RangePicker  />
          </Space>
        </Col>
        <Col span={3} className="text-end pt-1"><label>小児肺炎球菌</label></Col>
        <Col span={1}></Col>
        <Col span={6}>
          <Space className="w-full" direction="vertical">
            <RangePicker  />
          </Space>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={4} className="text-end pt-1"><label>水痘 (水ぼうそう)</label></Col>
        <Col span={1}></Col>
        <Col span={6}>
          <Space className="w-full" direction="vertical">
            <RangePicker  />
          </Space>
        </Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><Tag color="magenta" style={{ fontSize: '14px', padding: '6px' }}>乳幼児健診</Tag></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> ４か月</label></Col>
            <FormEra/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> １０か月</label></Col>
            <FormEra/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> １歳６か月</label></Col>
            <FormEra/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> ３歳</label></Col>
            <FormEra/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 特記事項</label></Col>
        <Col span={3}><Input type="text" /></Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><Tag color="magenta" style={{ fontSize: '14px', padding: '6px' }}>既往症</Tag></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={3} className="text-end pt-1  ms-5"><label> 川崎病</label></Col>
          <FormAge/>
        <Col span={3} className="text-end pt-1 ms-2"><label> 先天性股関節脱臼</label></Col>
          <FormAge/>
      </Row>

      <Row className="mt-3 ms-5">
        <Col span={3} className="text-end pt-1 ms-5"><label> 心臓病</label></Col>
          <FormAge/>
        <Col span={3} className="text-end pt-1 ms-2"><label> ヘルニア</label></Col>
          <FormAge/>
      </Row>

      <Row className="mt-3 ms-5">
        <Col span={3} className="text-end pt-1  ms-5"><label> 腎臓病</label></Col>
          <FormAge/>
        <Col span={3} className="text-end pt-1 ms-2"><label> 肺炎</label></Col>
          <FormAge/>
      </Row>

      <Row className="mt-3 ms-5">
        <Col span={3} className="text-end pt-1 ms-5"><label> 肝臓病</label></Col>
          <FormAge/>
        <Col span={3} className="text-end pt-1 ms-2"><label> 自家中毒</label></Col>
          <FormAge/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> 大きな外傷や手術</label></Col>
        <Col span={3}><Input type="text" /></Col>
        <FormAge/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> その他の重い病気</label></Col>
        <Col span={3}><Input type="text" /></Col>
        <FormAge/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 麻しん</label></Col>
        <FormAge/>
        <Col span={2} className="text-end pt-1"><label> 風しん</label></Col>
        <FormAge/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 水痘</label></Col>
          <FormAge/>
        <Col span={2} className="text-end pt-1"><label> 百日咳</label></Col>
          <FormAge/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1"><label> 流行性耳下腺炎</label></Col>
        <FormAge/>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={2} className="text-start pt-1"><label> 脱臼の経験</label></Col>
        <Col span={3} className="text-start pt-1">
              <Radio.Group name="radiogroup5" defaultValue={1}> 
                <Radio value={1}>有</Radio>
                <Radio value={2}>無</Radio>
              </Radio.Group>
        </Col>
        <Col span={1}></Col>
        <Col span={4} className="text-start pt-1"><label> けいれん(ひきつけ)</label></Col>
        <Col span={3} className="text-start pt-1">
              <Radio.Group name="radiogroup5" defaultValue={1}> 
                <Radio value={1}>有</Radio>
                <Radio value={2}>無</Radio>
              </Radio.Group>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>  
        <Col span={1} className="text-start pt-1"><label> 有熱</label></Col>
        <Col span={2}><Input type="text" suffix='回'/></Col>
        <Col span={1}></Col>
        <Col span={1} className="text-center pt-1"><label> 無熱</label></Col>
        <Col span={2}><Input type="text"  suffix='回'/></Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={6} className="text-start pt-1"><label> 初めてけいれんを起こした月齢</label></Col>
        <FormAge/>
        <Col span={2} className="text-start pt-1 ms-7"><label> 喘息の診断</label></Col>
        <Col span={3} className="text-start pt-1">
            <Radio.Group name="radiogroup5" defaultValue={1}> 
              <Radio value={1}>有</Radio>
              <Radio value={2}>無</Radio>
            </Radio.Group>
        </Col>
      </Row>
      <Row className="mt-3 ms-5">
        <Col span={2}></Col>
        <Col span={3} className="text-start pt-1 "><label> アレルギーの診断</label></Col>
        <Col span={3} className="text-start pt-1 ms-1">
            <Radio.Group name="radiogroup5" defaultValue={1}> 
              <Radio value={1}>有</Radio>
              <Radio value={2}>無</Radio>
            </Radio.Group>
        </Col>
        <Col span={2} className="text-start pt-1"><label> 有の場合</label></Col>
        <Col span={3}><Input type="text" /></Col>
      </Row>

      <Row className="mt-7 ms-5">
        <Col><Tag color="magenta" style={{ fontSize: '14px', padding: '6px' }}>現在の体質</Tag></Col>
      </Row>
      <Row className="mt-3"  >
        <Col span={6} className='text-right'><label>かぜをひきやすい</label></Col>
        <Col span={1}></Col>
        <Col span={2} className='ms-3'><label>入所時</label></Col>
        <Col span={2} className='ms-3'><label>2025 年</label></Col>
        <Col span={2} className='ms-2'><label>2026 年</label></Col>
        <Col span={2} className='ms-3'><label>2027 年</label></Col>
        <Col span={2} className='ms-2'><label>2028 年</label></Col>
        <Col span={2} className='ms-2'><label>2029 年</label></Col>
        <Col span={2} className='ms-1'><label>2030 年</label></Col>
      </Row>
      <Row className="mt-3" >
        <Checkbox.Group style={{ width: '100%' }}>
          <Col span={6} className='text-right'><label>発熱しやすい</label></Col>
          <Col span={1}></Col>
          <Col span={2} className="ms-3"><Checkbox value="1" ></Checkbox></Col>
          <Col span={2}><Checkbox value="2"></Checkbox></Col>
          <Col span={2}><Checkbox value="3"></Checkbox></Col>
          <Col span={2}><Checkbox value="4"></Checkbox></Col>
          <Col span={2}><Checkbox value="5"></Checkbox></Col>
          <Col span={2}><Checkbox value="6"></Checkbox></Col>
          <Col span={2}><Checkbox value="7"></Checkbox></Col>
        </Checkbox.Group>
      </Row>
      <Row className="mt-3">
        <Checkbox.Group style={{ width: '100%' }}>
          <Col span={6} className='text-right'><label>時々腹痛を訴える</label></Col>
          <Col span={1}></Col>
          <Col span={2} className="ms-3"><Checkbox value="1" ></Checkbox></Col>
          <Col span={2}><Checkbox value="2"></Checkbox></Col>
          <Col span={2}><Checkbox value="3"></Checkbox></Col>
          <Col span={2}><Checkbox value="4"></Checkbox></Col>
          <Col span={2}><Checkbox value="5"></Checkbox></Col>
          <Col span={2}><Checkbox value="6"></Checkbox></Col>
          <Col span={2}><Checkbox value="7"></Checkbox></Col>
        </Checkbox.Group>
      </Row>
      <Row className="mt-3">
        <Checkbox.Group style={{ width: '100%' }}>
          <Col span={6} className='text-right'><label>ゼイゼイがある</label></Col>
          <Col span={1}></Col>
          <Col span={2} className="ms-3"><Checkbox value="1" ></Checkbox></Col>
          <Col span={2}><Checkbox value="2" ></Checkbox></Col>
          <Col span={2}><Checkbox value="3" ></Checkbox></Col>
          <Col span={2}><Checkbox value="4" ></Checkbox></Col>
          <Col span={2}><Checkbox value="5" ></Checkbox></Col>
          <Col span={2}><Checkbox value="6" ></Checkbox></Col>
          <Col span={2}><Checkbox value="7" ></Checkbox></Col>
        </Checkbox.Group>
      </Row>        
      <Row className="mt-3">
        <Checkbox.Group style={{ width: '100%' }}>
          <Col span={6} className='text-right'><label>湿疹がでやすい</label></Col>
          <Col span={1}></Col>
          <Col span={2} className="ms-3"><Checkbox value="1" ></Checkbox></Col>
          <Col span={2}><Checkbox value="2" ></Checkbox></Col>
          <Col span={2}><Checkbox value="3" ></Checkbox></Col>
          <Col span={2}><Checkbox value="4" ></Checkbox></Col>
          <Col span={2}><Checkbox value="5" ></Checkbox></Col>
          <Col span={2}><Checkbox value="6" ></Checkbox></Col>
          <Col span={2}><Checkbox value="7" ></Checkbox></Col>
        </Checkbox.Group>
      </Row>    

      <Row className="mt-3">
        <Checkbox.Group style={{ width: '100%' }}>
          <Col span={6} className='text-right'><label>鼻血がでやすい</label></Col>
          <Col span={1}></Col>
          <Col span={2} className="ms-3"><Checkbox value="1" ></Checkbox></Col>
          <Col span={2}><Checkbox value="2" ></Checkbox></Col>
          <Col span={2}><Checkbox value="3" ></Checkbox></Col>
          <Col span={2}><Checkbox value="4" ></Checkbox></Col>
          <Col span={2}><Checkbox value="5" ></Checkbox></Col>
          <Col span={2}><Checkbox value="6" ></Checkbox></Col>
          <Col span={2}><Checkbox value="7" ></Checkbox></Col>
        </Checkbox.Group>

      </Row>  
      <Row className="mt-3">
        <Checkbox.Group style={{ width: '100%' }}>
          <Col span={6} className='text-right'><label>中耳炎になりやすい</label></Col>
          <Col span={1}></Col>
          <Col span={2} className="ms-3"><Checkbox value="1" ></Checkbox></Col>
          <Col span={2}><Checkbox value="2" ></Checkbox></Col>
          <Col span={2}><Checkbox value="3" ></Checkbox></Col>
          <Col span={2}><Checkbox value="4" ></Checkbox></Col>
          <Col span={2}><Checkbox value="5" ></Checkbox></Col>
          <Col span={2}><Checkbox value="6" ></Checkbox></Col>
          <Col span={2}><Checkbox value="7" ></Checkbox></Col>
        </Checkbox.Group>
      </Row>  
    
      <Row className="mt-3" >
        <Col span={6} className='text-right mt-1'><label>平 熱</label></Col>
        <Col span={1}></Col>
        <Col span={2} className='ms-2'><Input type="text" suffix='℃' style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-2'><Input type="text" suffix='℃' style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-3'><Input type="text" suffix='℃' style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-2'><Input type="text" suffix='℃' style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-2'><Input type="text" suffix='℃' style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-2'><Input type="text" suffix='℃' style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-2'><Input type="text" suffix='℃' style={{ width: '72%' }}/></Col>
      </Row>
      <Row className="mt-3">
        <Col span={6} className='text-right' ><label>保育園で気をつけてほしいことその他特記事項</label></Col>  
        <Col span={1}></Col>
        <Col span={2} className='ms-2'><Input type="text" style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-2'><Input type="text" style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-3'><Input type="text" style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-2'><Input type="text" style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-2'><Input type="text" style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-2'><Input type="text" style={{ width: '72%' }}/></Col>
        <Col span={2} className='ms-2'><Input type="text" style={{ width: '70%' }}/></Col>
      </Row>
  
      <Row className="mt-5 ms-5" style={{ width: '90%' }} >
        <Col span={3}><label></label></Col>
        <Col span={3}  className='text-center'><label>(０歳児)</label></Col>
        <Col span={3}  className='text-center'><label>(０歳児)</label></Col>
        <Col span={3}  className='text-center'><label>(１歳児)</label></Col>
        <Col span={3}  className='text-center'><label>(２歳児)</label></Col>
        <Col span={3}  className='text-center'><label>(３歳児)</label></Col>
        <Col span={3}  className='text-center'><label>(４歳児)</label></Col>
        <Col span={3}  className='text-center'><label>(５歳児)</label></Col>
      </Row>
      <Row className="mt-3 ms-5" style={{ width: '90%' }}>
        <Col span={2} className='text-center ms-5 pt-1' offset={1}></Col>        
        <Col span={3}><Input type="text" style={{ width: '95%' }} suffix='年度'/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }} suffix='年度'/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }} suffix='年度'/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }} suffix='年度'/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }} suffix='年度'/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }} suffix='年度'/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }} suffix='年度'/></Col>
      </Row>
      <Row className="mt-3 ms-5" style={{ width: '90%' }}>
        <Col span={2} className='text-center ms-3 pt-1' offset={1} ><label>主任</label></Col>        
        <Col span={3} ><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
      </Row>
      <Row className="mt-3 ms-5" style={{ width: '90%' }}>
        <Col span={2} className='text-center ms-3 pt-1'offset={1}><label>担任</label></Col>        
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
        <Col span={3}><Input type="text" style={{ width: '95%' }}/></Col>
      </Row>

      <Row className="mt-7">
              <Col span={24} className="text-center"><Button type="primary">Save</Button></Col>
      </Row>

    </>

  );
};
export default FormStudent1;

