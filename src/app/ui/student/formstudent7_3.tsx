"use client";

import React  from 'react';
import { Button,  Card,  Col,  DatePickerProps, Form, Input,  Row, Select, Tag, Typography } from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import { FormMonth } from '../common/formdate';

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
      wrapperCol: { span: 14 },
};
    
const FormStudent7_3: React.FC = () => (
      <div>
            <Form  {...layout} >
            
            <b>年間指導計画  ０ 歳児 （ 3 年 A  組 ） &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 年度</b>
                  <br /><br />

                  <Row >
                        <Col lg={{ span: 9}}>
                              <Form.Item label="担任" name="Homeroom_Teacher">
                              <Input />
                              </Form.Item>
                        </Col>
                  </Row>
                  <Row >
                        <Col lg={{ span: 9 }}>
                              <Form.Item label="年間目標" name="input">
                                    <Input />
                              </Form.Item>
                        </Col>
                  </Row>
            </Form>
            <br />

            <Card style={{ border: '3px solid #AAA' }}>
                  <div>
                        <Form  {...layout} >

                              <Col className='ms-10'>
                                    <Row gutter={16}>
                                          <Col span={1} className='ms-10'>期:</Col>
                                          <FormMonth/>
                                                <Col lg={{ span: 1 }}>～</Col>
                                          <FormMonth/>
                                    </Row>
                              </Col>
                              <br />
                              <Tag bordered={false} style={{ fontSize: '18px' }} color="magenta"> <b>ねらい</b></Tag>
                              
                              <Row >
                                    <Col lg={{ span: 6}} offset={1}>
                                          <Form.Item label="養護" name="2" >
                                                <Input />
                                          </Form.Item>
                                          
                                    </Col>
                                    
                              </Row>
                              <Row >
                                    <Col lg={{ span: 6}}  offset={1}>
                                          <Form.Item label="教育" name="2">
                                                <Input />
                                          </Form.Item>
                                          
                                    </Col>
                              </Row>
                        
                        </Form>
                  </div>
                  <div>
                        <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                              <Tag bordered={false} style={{ fontSize: '18px' }} color="magenta" > <b>内容</b></Tag>
                              <br /> 
                              <b className='ms-10'>養護</b>
                              <Row >
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                          <Form.Item label="生命の保持・情緒の安定" name="input1">
                                                <Input.TextArea />
                                          </Form.Item>
                                    </Col>

                              </Row>
                              <b className='ms-10'>教育</b>
                              <Row >
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                    <Form.Item label="関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に" name="Location">
                                          <Input.TextArea />
                                    </Form.Item>
                                    </Col>
                              </Row>

                              <Row gutter={16}>
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                    <Form.Item label="食育 " name="input_1">
                                          <Input.TextArea />
                                    </Form.Item>
                                    </Col>
                              </Row>
                        </Form>
                  </div>
            </Card>

            <br />
            <Card style={{ border: '3px solid #AAA' }}>
                  <div>
                        <Form  {...layout} >

                              <Col className='ms-10'>
                                    <Row gutter={16}>
                                          <Col span={1} className='ms-10'>期:</Col>
                                          <FormMonth/>
                                                <Col lg={{ span: 1 }}>～</Col>
                                          <FormMonth/>
                                    </Row>
                              </Col>
                              <br />
                              <Tag bordered={false} style={{ fontSize: '18px' }} color="magenta"> <b>ねらい</b></Tag>
                              
                              <Row >
                                    <Col lg={{ span: 6}} offset={1}>
                                          <Form.Item label="養護" name="2" >
                                                <Input />
                                          </Form.Item>
                                          
                                    </Col>
                                    
                              </Row>
                              <Row >
                                    <Col lg={{ span: 6}}  offset={1}>
                                          <Form.Item label="教育" name="2">
                                                <Input />
                                          </Form.Item>
                                          
                                    </Col>
                              </Row>
                        
                        </Form>
                  </div>
                  <div>
                        <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                              <Tag bordered={false} style={{ fontSize: '18px' }} color="magenta" > <b>内容</b></Tag>
                              <br />
                              <b className='ms-10'>養護</b>
                              <Row >
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                          <Form.Item label="生命の保持・情緒の安定" name="input1">
                                                <Input.TextArea />
                                          </Form.Item>
                                    </Col>

                              </Row>
                              <b className='ms-10'>教育</b>
                              <Row >
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                    <Form.Item label="関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に" name="Location">
                                          <Input.TextArea />
                                    </Form.Item>
                                    </Col>
                              </Row>

                              <Row gutter={16}>
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                    <Form.Item label="食育 " name="input_1">
                                          <Input.TextArea />
                                    </Form.Item>
                                    </Col>
                              </Row>
                        </Form>
                  </div>
            </Card>

            <br />
            <Card style={{ border: '3px solid #AAA' }}>
                  <div>
                        <Form  {...layout} >

                              <Col className='ms-10'>
                                    <Row gutter={16}>
                                          <Col span={1} className='ms-10'>期:</Col>
                                          <FormMonth/>
                                                <Col lg={{ span: 1 }}>～</Col>
                                          <FormMonth/>
                                    </Row>
                              </Col>
                              <br />
                              <Tag bordered={false} style={{ fontSize: '18px' }} color="magenta"> <b>ねらい</b></Tag>
                              
                              <Row >
                                    <Col lg={{ span: 6}} offset={1}>
                                          <Form.Item label="養護" name="2" >
                                                <Input />
                                          </Form.Item>
                                          
                                    </Col>
                                    
                              </Row>
                              <Row >
                                    <Col lg={{ span: 6}}  offset={1}>
                                          <Form.Item label="教育" name="2">
                                                <Input />
                                          </Form.Item>
                                          
                                    </Col>
                              </Row>
                        
                        </Form>
                  </div>
                  <div>
                        <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                              <Tag bordered={false} style={{ fontSize: '18px' }} color="magenta" > <b>内容</b></Tag>
                              <br /> 
                              <b className='ms-10'>養護</b>
                              <Row >
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                          <Form.Item label="生命の保持・情緒の安定" name="input1">
                                                <Input.TextArea />
                                          </Form.Item>
                                    </Col>

                              </Row>
                              <b className='ms-10'>教育</b>
                              <Row >
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                    <Form.Item label="関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に" name="Location">
                                          <Input.TextArea />
                                    </Form.Item>
                                    </Col>
                              </Row>

                              <Row gutter={16}>
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                    <Form.Item label="食育 " name="input_1">
                                          <Input.TextArea />
                                    </Form.Item>
                                    </Col>
                              </Row>
                        </Form>
                  </div>
            </Card>
            <br />
            <Card style={{ border: '3px solid #AAA' }}>
                  <div>
                        <Form  {...layout} >

                              <Col className='ms-10'>
                                    <Row gutter={16}>
                                          <Col span={1} className='ms-10'>期:</Col>
                                          <FormMonth/>
                                                <Col lg={{ span: 1 }}>～</Col>
                                          <FormMonth/>
                                    </Row>
                              </Col>
                              <br />
                              <Tag bordered={false} style={{ fontSize: '18px' }} color="magenta"> <b>ねらい</b></Tag>
                              
                              <Row >
                                    <Col lg={{ span: 6}} offset={1}>
                                          <Form.Item label="養護" name="2" >
                                                <Input />
                                          </Form.Item>
                                          
                                    </Col>
                                    
                              </Row>
                              <Row >
                                    <Col lg={{ span: 6}}  offset={1}>
                                          <Form.Item label="教育" name="2">
                                                <Input />
                                          </Form.Item>
                                          
                                    </Col>
                              </Row>
                        
                        </Form>
                  </div>
                  <div>
                        <Form style={{ maxWidth: '100%' }}  layout="vertical" >
                              <Tag bordered={false} style={{ fontSize: '18px' }} color="magenta" > <b>内容</b></Tag>
                              <br />
                              <b className='ms-10'>養護</b>
                              <Row >
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                          <Form.Item label="生命の保持・情緒の安定" name="input1">
                                                <Input.TextArea />
                                          </Form.Item>
                                    </Col>

                              </Row>
                              <b className='ms-10'>教育</b>
                              <Row >
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                    <Form.Item label="関する視点 身体的発達に , 関する視点 社会的発達に , 関する視点 精神的発達に" name="Location">
                                          <Input.TextArea />
                                    </Form.Item>
                                    </Col>
                              </Row>

                              <Row gutter={16}>
                                    <Col  lg={{ span: 7, offset: 3 }}>
                                    <Form.Item label="食育 " name="input_1">
                                          <Input.TextArea />
                                    </Form.Item>
                                    </Col>
                              </Row>
                        </Form>
                  </div>
            </Card>
           
            <br />
            <Form>
                  <Row gutter={16}>
                        <Col  lg={{ span: 10}} offset={2}>
                              <Form.Item label="【家庭・地域との連携】" name="input_2" >
                                    <Input.TextArea />
                              </Form.Item>
                        </Col>
                 
                        <Col  lg={{ span: 10 }}>
                              <Form.Item label="【評価・反省】" name="input_3" >
                                    <Input.TextArea />
                              </Form.Item>
                        </Col>
                  </Row>
            </Form>
           
            
           
         
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Button type="primary" htmlType="submit" icon={<SaveOutlined />} style={{ backgroundColor: '#33c033', borderColor: '#33c033' }}>
                  Save
                  </Button>
            </div>
      </div>
  
    
);
export default FormStudent7_3;

