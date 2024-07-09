"use client";

import React  from 'react';
import { Button,  Card,  Col,  DatePickerProps, Form, Input,  Row, Select, Tag, Typography } from 'antd';
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
    
const FormStudent8_2: React.FC = () => (
      <div>
            {/* <Form  {...layout}  style={{ maxWidth: '100%' }}>
            
            <b>年間指導計画  ０ 歳児 （ 0 年 A  組 ） &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 年度</b>
                  <br /><br />
                  <Row>
                        <Col lg={{ span: 6, offset: 1 }}>
                              <Form.Item label="施設長" name="Facility_Director">
                                    <Input />
                              </Form.Item>
                        </Col>
                  </Row>

                  <Row >
                        <Col lg={{ span: 6, offset: 1 }}>
                              <Form.Item label="主任 " name="Chief">
                              <Input />
                              </Form.Item>
                        </Col>
                  </Row>

                  <Row >
                        <Col lg={{ span: 6, offset: 1 }}>
                              <Form.Item label="担任" name="Homeroom_Teacher">
                              <Input />
                              </Form.Item>
                        </Col>
                  </Row>
            </Form> */}
            <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>身体的発達に関する視点、社会的発達に関する視点、精神的発達に関する視点、指導計画は食育の内容を含むこと</Tag>
           
            <div>
                  <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                       
                        <br /> 
                        <Tag bordered={false} color="magenta"> <b>ねらい</b></Tag>
                        <br /> 

                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="養護" name="input1" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="教育" name="input2" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="家庭・地域との連携" name="input3" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="行 事" name="input4" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                       
                  </Form>
            </div>
   
            <div>
                  <Form  {...layout}  >
                        
                        <Row>
                              <Col lg={{ span: 10}}>
                                    <Form.Item label="施設長" name="input5">
                                          <Input />
                                    </Form.Item>
                              </Col>
                        </Row>

                        <Row >
                              <Col lg={{ span: 10}}>
                                    <Form.Item label="主任 " name="input6">
                                    <Input />
                                    </Form.Item>
                              </Col>
                        </Row>
                  </Form>
            </div>
            <div>
                  <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="子 ど も の 生 活 す る 姿" name="School_Location" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="子どもとの関わり方 保育士等の育みたい内容（養護・教育）" name="School_Location" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="環 境 づ く り" name="School_Location" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="生 活 と 遊 び" name="School_Location" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                       
                  </Form>
            </div>
         
            <div>
                  <Form  {...layout}  style={{ maxWidth: '100%' }} >
                        
                        <Row>
                              <Col lg={{ span: 10}}>
                                    <Form.Item label="施設長" name="input7">
                                          <Input />
                                    </Form.Item>
                              </Col>
                        </Row>

                        <Row >
                              <Col lg={{ span: 10}}>
                                    <Form.Item label="主任 " name="input8">
                                    <Input />
                                    </Form.Item>
                              </Col>
                        </Row>
                  </Form>
            </div>
            <div>
                  <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="子 ど も の 生 活 す る 姿" name="input9" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="子どもとの関わり方 保育士等の育みたい内容（養護・教育）" name="input10" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="環 境 づ く り" name="input11" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="生 活 と 遊 び" name="input12" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                       
                  </Form>
            </div>
            <div>
                  <Form  {...layout}  style={{ maxWidth: '100%' }} >
                        
                        <Row>
                              <Col lg={{ span: 10}}>
                                    <Form.Item label="施設長" name="input13">
                                          <Input />
                                    </Form.Item>
                              </Col>
                        </Row>

                        <Row >
                              <Col lg={{ span: 10}}>
                                    <Form.Item label="主任 " name="input14">
                                    <Input />
                                    </Form.Item>
                              </Col>
                        </Row>
                  </Form>
            </div>
            <div>
                  <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="子 ど も の 生 活 す る 姿" name="input15" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="子どもとの関わり方 保育士等の育みたい内容（養護・教育）" name="input16" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="環 境 づ く り" name="input17" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="生 活 と 遊 び" name="input18" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                       
                  </Form>
            </div>
            <div>
                  <Form  {...layout}  style={{ maxWidth: '100%' }} >
                        
                        <Row>
                              <Col lg={{ span: 10}}>
                                    <Form.Item label="施設長" name="input19">
                                          <Input />
                                    </Form.Item>
                              </Col>
                        </Row>

                        <Row >
                              <Col lg={{ span: 10}}>
                                    <Form.Item label="主任 " name="input20">
                                    <Input />
                                    </Form.Item>
                              </Col>
                        </Row>
                  </Form>
            </div>
            <div>
                  <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="子 ど も の 生 活 す る 姿" name="input21" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="子どもとの関わり方 保育士等の育みたい内容（養護・教育）" name="input22" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="環 境 づ く り" name="input23" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="生 活 と 遊 び" name="input24" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                       
                  </Form>
            </div>
            <div>
                  <Form  {...layout}  style={{ maxWidth: '100%' }} >
                        
                        <Row>
                              <Col lg={{ span: 10}}>
                                    <Form.Item label="施設長" name="input25">
                                          <Input />
                                    </Form.Item>
                              </Col>
                        </Row>

                        <Row >
                              <Col lg={{ span: 10}}>
                                    <Form.Item label="主任 " name="input26">
                                    <Input />
                                    </Form.Item>
                              </Col>
                        </Row>
                  </Form>
            </div>
            <div>
                  <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="子 ど も の 生 活 す る 姿" name="input27" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="子どもとの関わり方 保育士等の育みたい内容（養護・教育）" name="input28" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="環 境 づ く り" name="input29" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="生 活 と 遊 び" name="input30" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                       
                  </Form>
            </div>
            <div>
                  <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="健康・安全" name="input31" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="組運営" name="input32" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="評価・反省" name="input33" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                  
                       
                  </Form>
            </div>
         
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Button type="primary" htmlType="submit" icon={<SaveOutlined />} style={{ backgroundColor: '#33c033', borderColor: '#33c033' }}>
                  Save
                  </Button>
            </div>
      </div>
  
    
);
export default FormStudent8_2;

