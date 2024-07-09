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
    
const FormStudent8_4: React.FC = () => (
      <div>
            <Form  {...layout}  style={{ maxWidth: '100%' }}>
            
            <b>年間指導計画  3・4・5 歳児 （ 5 年 A  組 ） &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 年度</b>
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
            <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>指導計画は食育の内容を含むこと</Tag>
           
            <div>
                  <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                       
                        <br /> 
                       

                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label=" 生活する姿子どもの" name="input1" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                  </Form>
            </div>

            <Tag bordered={false} color="magenta"> <b>ねらい</b></Tag>
                        <br /> 

            <div>
                  <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                       
                        <br /> 
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label=" 養護" name="input2" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="教育" name="input3" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>

                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="健康·安全" name="input4" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <Tag bordered={false} color="magenta"> <b>指導の内容</b></Tag>
                        <br /> 
                        <b>養護</b>

                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="情緒の安定生命の保持" name="input5" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <b>教育</b>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="健康人間係.環境·言葉.表現" name="input6" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>

                        <Tag bordered={false} color="magenta"> <b>環境の構成</b></Tag>
                        <br /> 
                        <b>養護</b>

                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="情緒の安定生命の保持" name="input7" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <b>教育</b>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="健康人間係.環境·言葉.表現" name="input8" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>

                        <Tag bordered={false} color="magenta"> <b>予想される子どもの活動</b></Tag>
                        <br /> 
                        <b>養護</b>

                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="情緒の安定生命の保持" name="input9" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <b>教育</b>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="健康人間係.環境·言葉.表現" name="input10" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>


                        <Tag bordered={false} color="magenta"> <b>保育士等の援助と配慮</b></Tag>
                        <br /> 
                        <b>養護</b>

                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="情緒の安定生命の保持" name="input11" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>
                        <b>教育</b>
                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="健康人間係.環境·言葉.表現" name="input12" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>



                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="組運営・個別対応" name="input13" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>

                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="連携家庭・地域との" name="input14" >
                                    <Input.TextArea />
                              </Form.Item>
                              </Col>
                        </Row>

                        <Row gutter={16}>
                              <Col  lg={{ span: 8, offset: 2 }}>
                              <Form.Item label="行事" name="input15" >
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
export default FormStudent8_4;

