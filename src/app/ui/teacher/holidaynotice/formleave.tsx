"use client"
import React from 'react';
import { Button, Col, Input, Row, Typography , Table, Tag, Checkbox, Card } from 'antd';
import FormEra from '../../common/formera';
import { FormDay, FormMonth } from '../../common/formdate';

const { Title } = Typography;
const { TextArea } = Input;

const FormLeave: React.FC = () => {
  return (
      <>
            <div className='mt-7'>
                  <Title level={4}>休　暇　届</Title>
            </div>
            <Row className='mt-7' justify="end">
                  <Col span={3}>
                        <Input  addonBefore="令和"  />
                  </Col>
                  <Col span={3} className='ms-2'>
                        <Input  addonBefore="年"  />
                  </Col>
                  &nbsp; &nbsp;
                        <FormMonth />
                  &nbsp; &nbsp;
                        <FormDay />
            </Row>
            <Row className='mt-7'>
                  <Col className='mt-1' offset={4}>
                        <span>所　属　：</span>
                  </Col>
                  <Col span={5}>
                        <Input/>
                  </Col>
                  <Col className='mt-1 ms-10'>
                        <span>役　職　：</span>
                  </Col>
                  <Col span={5}>
                        <Input/>
                  </Col>
            </Row>
            <Row className='mt-7'>
                  <Col className='mt-1' offset={4}>
                        <span>氏　名　：</span>
                  </Col>
                  <Col span={5}>
                        <Input/>
                  </Col>
            </Row>
            <Row className='mt-7'>
                  <Col offset={4}>
                        <span>適　用　：</span>
                  </Col>
                 <Col span={15}> 
                        <Checkbox.Group style={{ width: '100%' }}>
                              <Col span={5}><Checkbox value="1">有給休暇</Checkbox></Col>
                              <Col span={5}><Checkbox value="2">特別休暇</Checkbox></Col>
                              <Col span={5}><Checkbox value="3">振替休暇</Checkbox></Col>
                              <Col span={5}><Checkbox value="4">慶弔休暇</Checkbox></Col>
                        </Checkbox.Group>
                  </Col>
            </Row>
            <Row className='mt-7'>
                  <Col className='mt-1' offset={4}>
                        <span>氏　名　：</span>
                  </Col>
                  &nbsp; &nbsp;
                        <FormMonth />
                  &nbsp; &nbsp;
                        <FormDay />
                  <Col className='mt-1'>（　　）</Col>
                  <Col className='ms-5'>～</Col>
                  <Col className='ms-7'></Col>
                        <FormMonth />
                  &nbsp; &nbsp;
                        <FormDay />
                  <Col className='mt-1'>（　　）</Col>
            </Row>

            <Row className='mt-7'>
                  <Col span={2} offset={8}>
                        <Input suffix='日間'/>
                  </Col>
            </Row>
            <Row className='mt-7'>
                  <Col className='mt-1' span={15} offset={4}>
                        <TextArea rows={4} placeholder="＜理　由＞" />
                  </Col>
            </Row>
            <Row className='mt-5'>
                  <Col className='ms-7' offset={2}></Col>
                  <Col className='text-center mt-1'span={3} offset={11}>
                        <span>部長</span>
                  </Col>
                  <Col className='mt-1' span={3} >
                        <span>課長</span>
                  </Col>
            </Row>
            <Row >
                  <Col className='ms-7' offset={2}></Col>
                  <Col className='mt-1' span={3} offset={11}>
                        <TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
                  </Col>
                  <Col className='mt-1' span={3} >
                        <TextArea autoSize={{ minRows: 3, maxRows: 5 }}  />
                  </Col>
            </Row>
            <div className='text-center mt-7' >
                  <Button type="primary" >戻る</Button> 
                  <Button type="primary" className='ms-5'>修正</Button>
            </div>
           
      
      </>
  );
}

export default FormLeave;
