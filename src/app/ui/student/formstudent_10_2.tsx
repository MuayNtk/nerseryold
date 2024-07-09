"use client";

import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { Col, ConfigProviderProps, Form, Input, Row, Select, Table, TableColumnsType, DatePicker, Space, Card, Button, Flex, Radio } from 'antd';

import {
    DownloadOutlined,
} from '@ant-design/icons';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import Link from 'next/link';
import { FormDay, FormMonth, FormNameWeek } from '../common/formdate';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};


const FormStudent10_2: React.FC = () => {
    const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
    const styles = {
        border: '1px solid #dddddd',
        width: '80%',
        margin: '0 auto',

    };
    const td = {
        border: '1px solid #dddddd',
        height: '50px',
    };

    const { TextArea } = Input;

    return (

        <>
            <Row className="ms-2 mt-3">
                <Col span={3}></Col>
                <FormMonth/>
                <Col className="text-start pt-1 ms-5"><label>個人カリキュラム・記録</label></Col>
                <Col span={3} className="text-end pt-1 ms-10"><label>児童名:</label></Col>
                <Col span={2} className='text-center ms-7 pt-1 '><b>長谷川</b></Col>
                <Col span={1} className='ms-10 pt-1 '><span>2 歳</span></Col>
                <Col span={1} className='pt-1 '><span>5 月</span></Col>

            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3}><label>子どもの姿</label></Col>
                <Col span={8}><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}></Col>
                <Col span={3}><label>ねらいと配慮</label></Col>
                <Col span={8}><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={15}>
                    <Card style={{ width: '100%' }}>
                        <Row className="ms-10 mt-3">
                            <Col span={4}></Col>
                            <FormDay/>
                            <Col span={1}></Col>
                            <FormNameWeek/>
                        </Row>
                        <Row className="ms-10 mt-3">
                            <Col span={4}>食 事</Col>
                            <Col span={12}><TextArea rows={4} maxLength={6} /></Col>
                        </Row>
                        <Row className="ms-10 mt-3">
                            <Col span={4}>排 泄</Col>
                            <Col span={12}><TextArea rows={4} maxLength={6} /></Col>
                        </Row>
                        <Row className="ms-10 mt-3">
                            <Col span={4}>睡 眠</Col>
                            <Col span={12}><TextArea rows={4} maxLength={6} /></Col>
                        </Row>
                        <Row className="ms-10 mt-3">
                            <Col span={4}><label>健 康</label></Col>
                            <Col className='mt-1'>
                                <Radio.Group  value={1}>
                                    <Radio value={0}>良好</Radio>
                                    <Radio value={1}>鼻水・咳</Radio>
                                </Radio.Group>
                            </Col>
                            <Col span={4}><Input type="text" /></Col>
                            
                        </Row>
                        <Row className="ms-10 mt-3">
                            <Col span={6}><label>その他の記録</label></Col>
                            <Col span={10}><TextArea rows={4} maxLength={6} /></Col>
                        </Row>
                    </Card>

                    <Row className="mt-7">
                        <Col span={24} className="text-end"><Button type="primary">+</Button></Col>
                    </Row>
                </Col>
            </Row>

            <Row className="ms-5 mt-3">
                <Col span={2}><label>評価 ・ 反省</label></Col>
                <Col span={10}><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={2}><label>評価 ・ 反省</label></Col>
                <Col span={10}><TextArea rows={4} maxLength={6} /></Col>
            </Row>
            <Row className="ms-5 mt-7">
                <Col span={3}><label>施設長</label></Col>
                <Col span={8}><b>渡部　圭子</b></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={3}><label>主任</label></Col>
                <Col span={8}><b>渡部　史朗</b></Col>
            </Row>
            <Row className="ms-5 mt-3">
                <Col span={3}><label>担任</label></Col>
                <Col span={8}><b>中川　康嘉</b></Col>
            </Row>

            <Row className="mt-7">
                <Col span={24} className="text-start"><Button type="primary">Save</Button></Col>
            </Row>

        </>


    );
};

export default FormStudent10_2;

