"use client";

import React  from 'react';
import { Button,  Col,  DatePickerProps, Form, Input,  Row, Select, Tag, Typography } from 'antd';
import {SaveOutlined} from '@ant-design/icons';

const onChangeselect = (value: string) => {
      console.log(`selected ${value}`);
    };
    
const onSearch = (value: string) => {
      console.log('search:', value);
};
const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.value ?? '').toLowerCase().includes(input.toLowerCase());

const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
};
    
const FormStudent8_1: React.FC = () => (
      <div>
            <Form  {...layout}  style={{ maxWidth: '100%' }}>
            
            <b>年間指導計画  ０ 歳児 （ 0 年 A  組 ） &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 年度</b>
                  <br /><br />
                  <Row>
                        <Col lg={{ span: 6, offset: 1 }}>
                              <Form.Item label="施設長" name="Facility_Director">
                              <b className='ms-10'>渡部　圭子</b>
                              </Form.Item>
                        </Col>
                  </Row>

                  <Row >
                        <Col lg={{ span: 6, offset: 1 }}>
                              <Form.Item label="主任 " name="Chief">
                              <b className='ms-10'>渡部　史朗</b>
                              </Form.Item>
                        </Col>
                  </Row>

                  <Row >
                        <Col lg={{ span: 6, offset: 1 }}>
                              <Form.Item label="担任" name="Homeroom_Teacher">
                              <b className='ms-10'>中川　康嘉</b>
                              </Form.Item>
                        </Col>
                  </Row>
            </Form>
            <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>指導計画は食育の内容を含むこと。</Tag>
           
            <div>
                  <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                       
                        <br /> 
                        <Tag bordered={false} color="magenta"> <b>ねらい</b></Tag>
                        <br /> 
                        <b>養護</b>
                        <Row >
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="生命の保持・情緒の安定" name="input1">
                              <Input.TextArea />
                              </Form.Item>
                              </Col>

                        </Row>
                        <b>教育</b>
                        <Row >
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に" name="Location">
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Tag bordered={false} color="magenta"> <b>子どもとの関わり方（保育士等の育みたい内容）</b></Tag>
                        <br />
                        <b>養護</b>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="生命の保持 / 情緒の安定 " name="input1">
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>

                        <b>教育</b>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に" name="input2" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>

                        <Tag bordered={false} color="magenta"> <b>環境づくり  予想される子どもの活動  配慮・援助</b></Tag>
                        <br />
                        <b>養護</b>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="生命の保持 / 情緒の安定" name="input3" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <b>教育</b>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に" name="input4" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>

                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="健康・安全" name="input5" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="との連携 家庭・地域 " name="input6" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="行 事" name="input7" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label=" 個別対応 組運営" name="input8" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="評価・反省" name="input9" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                  </Form>
            </div>
           
         
            {/* <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Button type="primary" htmlType="submit" icon={<SaveOutlined />} style={{ backgroundColor: '#33c033', borderColor: '#33c033' }}>
                  Save
                  </Button>
            </div> */}
      </div>
  
    
);
export default FormStudent8_1;

