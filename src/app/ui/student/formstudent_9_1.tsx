"use client";

import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { Col, Input, Row,  Button, Select, Form, Divider} from 'antd';

import { SizeType } from 'antd/es/config-provider/SizeContext';
import { FormDay, FormMonth } from '../common/formdate';


const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};


const FormStudent9_1: React.FC = () => {
   
    const { TextArea } = Input;

    return (

        <>
            <Row className="ms-5">
                <Col span={6}><label>週 案 と 保 育 日 誌（未満児）</label></Col>
            </Row>
            <Row className="ms-5 mt-5">
                <Col  span={3}></Col>
                    <FormMonth/>
                <Col span={2} className='ms-5'><Input type="text" suffix="第 "/></Col>
                <Col span={2} className='ms-2'><Input type="text" suffix="週"/></Col>
                <Col span={2} className='ms-2'><Input type="text" suffix="組"/></Col>


            </Row>
            <Form>

                <Row style={{ margin: '0 0' }}>
                    <Col lg={{ span: 6, offset: 1 }}>
                            <Form.Item label="施設長" name="Facility_Director">
                            <b className='ms-7'>渡部　圭子</b>
                            </Form.Item>
                    </Col>
                </Row>
                <Row style={{ margin: '-15px 0' }}>
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
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className='text-end '><label>子どもの姿</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className='text-end'><label>週のねらいと配慮</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className='text-end'><label>家庭連絡</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className='text-end'><label>活 動 予 定</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Divider />
            <Row className="ms-5 mt-3">
                <Col span={5} className='ms-2' ></Col>
                <FormDay/>
                <Col className="text-start pt-1 ms-10"><label>(月)</label></Col>
                <Col span={1} className=' pt-1 ms-10'><label>天候</label></Col>
                <Col span={2} className='ms-2'><Input type="text" suffix='℃' /></Col>
            </Row>
          
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>主 な 活 動</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>評 価 及 び 反 省</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>

            <Divider />
            <Row className="ms-5 mt-3">
                <Col span={5} className='ms-2' ></Col>
                <FormDay/>
                <Col className="text-start pt-1 ms-10"><label>(火)</label></Col>
                <Col span={1} className=' pt-1 ms-10'><label>天候</label></Col>
                <Col span={2} className='ms-2'><Input type="text" suffix='℃' /></Col>
            </Row>



          
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>主 な 活 動</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>評 価 及 び 反 省</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Divider />
            <Row className="ms-5 mt-3">
                <Col span={5} className='ms-2' ></Col>
                <FormDay/>
                <Col className="text-start pt-1 ms-10"><label>(水)</label></Col>
                <Col span={1} className=' pt-1 ms-10'><label>天候</label></Col>
                <Col span={2} className='ms-2'><Input type="text" suffix='℃' /></Col>
            </Row>



            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>主 な 活 動</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>評 価 及 び 反 省</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>

            <Divider />
            <Row className="ms-5 mt-3">
                <Col span={5} className='ms-2' ></Col>
                <FormDay/>
                <Col className="text-start pt-1 ms-10"><label>(木)</label></Col>
                <Col span={1} className=' pt-1 ms-10'><label>天候</label></Col>
                <Col span={2} className='ms-2'><Input type="text" suffix='℃' /></Col>
            </Row>
          
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>主 な 活 動</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>評 価 及 び 反 省</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Divider />
            <Row className="ms-5 mt-3">
                <Col span={5} className='ms-2' ></Col>
                <FormDay/>
                <Col className="text-start pt-1 ms-10"><label>(金)</label></Col>
                <Col span={1} className=' pt-1 ms-10'><label>天候</label></Col>
                <Col span={2} className='ms-2'><Input type="text" suffix='℃' /></Col>
            </Row>

          
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>主 な 活 動</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>評 価 及 び 反 省</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>

            <Divider />
            <Row className="ms-5 mt-3">
                <Col span={5} className='ms-2' ></Col>
                <FormDay/>
                <Col className="text-start pt-1 ms-10"><label>(土)</label></Col>
                <Col span={1} className=' pt-1 ms-10'><label>天候</label></Col>
                <Col span={2} className='ms-2'><Input type="text" suffix='℃' /></Col>
            </Row>
          
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>主 な 活 動</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3} className="text-end "><label>評 価 及 び 反 省</label></Col>
                <Col span={8} className='ms-2'><TextArea rows={4} maxLength={6} /></Col>
            </Row>

            <Row className="mt-7">
                <Col span={24} className="text-start"><Button type="primary">Save</Button></Col>
            </Row>

        </>


    );
};

export default FormStudent9_1;

