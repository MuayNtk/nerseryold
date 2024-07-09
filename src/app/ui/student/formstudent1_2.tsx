"use client";

import React, { useState } from 'react';
import { Col, ConfigProviderProps, Form, Input, Row, Select, Table, TableColumnsType, DatePicker, Space, Card, Button, Flex, Radio } from 'antd';
import type { DatePickerProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FormEra from '../common/formera';
import {FormDay, FormMonth} from '../common/formdate';

const FormStudent1_2: React.FC = () => {
    const styles = {
        border: '1px solid #dddddd',
        width: '80%',
        margin: '0 auto'
    };
    const td = {
        border: '1px solid #dddddd',
        height: '50px'
    };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    const { TextArea } = Input;

    return (
        <>
            <Row className="ms-5">
                <Col span={3}  className="text-end pt-1 pe-2"><label>健康管理台帳</label></Col>
                <Col span={3}>
                    <Select defaultValue="ありません" style={{ width: '100%' }}
                        options={[
                            { value: '有', label: '有' },
                            { value: 'ありません', label: 'ありません' }
                        ]}
                    />
                </Col>
                <Col span={3} className='text-end pt-1 pe-2 ms-2'><label>健康個人カード</label></Col>
                <Col span={3}>
                    <Select defaultValue="ありません" style={{ width: '100%' }}
                        options={[
                            { value: '有', label: '有' },
                            { value: 'ありません', label: 'ありません' }
                        ]}
                    />
                </Col>
            </Row>

            <Row className="mt-3 ms-5">
                <Col span={3} className="text-end pt-1 pe-2"><label>ふりがな</label></Col>
                <Col span={6}><Input type="text" /></Col>
            </Row>
            <Row className="mt-3 ms-5">
                <Col span={3} className="text-end pt-1 pe-2"><label>氏名</label></Col>
                <Col span={6}><Input type="text" /></Col>
            </Row>

            <Row className="mt-3 ms-5">
                <Col span={3} className="text-end pt-1 pe-2"><label>性別</label></Col>
                <Col span={8}>
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
            <Row className="mt-7">
                <Col span={14} className="text-end"><Button type="primary">+</Button></Col>
            </Row>
            <Row className="flex justify-start mt-5">
                <Col span={14} className="">
                    <Card className="shadow" style={{ width: '100%' }}>
                        <Row>
                            <Col span={2} className="text-start pt-1 pe-2"><label>年度</label></Col>
                            <Col span={5}>
                                <Select placeholder="０歳児" style={{ width: '100%' }}
                                    options={[
                                        { value: '0', label: '0' },
                                        { value: '1', label: '1' },
                                        { value: '2', label: '2' },
                                        { value: '3', label: '3' },
                                        { value: '4', label: '4' },
                                        { value: '5', label: '5' },
                                    ]}
                                />
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col span={2} className="text-start pt-1 pe-2"><label>頭囲</label></Col>
                            <Col span={4}><Input type="text" suffix='cm'/></Col>
                            <Col span={2} className="text-start pt-1 pe-2 ms-5"><label>胸囲</label></Col>
                            <Col span={4}><Input type="text" suffix='cm'/></Col>
                        </Row>

                        <Row className="mt-3">
                            <Col span={3}><label>栄養状態</label></Col>
                            <Col span={12}>
                                <Radio.Group name="radiogroup2" defaultValue={2}>
                                    <Radio value={1}>良</Radio>
                                    <Radio value={2}>普</Radio>
                                    <Radio value={3}>不良</Radio>

                                </Radio.Group>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col span={3} className='text-start pt-1'>脊　柱</Col>
                            <Col span={4}>
                                <Select placeholder="" style={{ width: '100%' }}
                                    options={[
                                        { value: '0', label: ' ' },
                                        { value: '1', label: '正常' }
                                    ]}
                                />
                            </Col>
                            <Col span={4} className='ms-2'><Input type="text" /></Col>

                            <Col span={3} className='text-center ms-2 pt-1'>胸　郭</Col>
                            <Col span={4}>
                                <Select placeholder="" style={{ width: '100%' }}
                                    options={[
                                        { value: '0', label: ' ' },
                                        { value: '1', label: '正常' }
                                    ]}
                                />
                            </Col>
                            <Col span={4} className='ms-2'><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3">

                            <Col span={3} className='text-start pt-1'>四　肢</Col>
                            <Col span={4}>
                                <Select placeholder="" style={{ width: '100%' }}
                                    options={[
                                        { value: '0', label: ' ' },
                                        { value: '1', label: '正常' }
                                    ]}
                                />
                            </Col>
                            <Col span={4} className='ms-2'><Input type="text" /></Col>

                            <Col span={3} className='text-center ms-2 pt-1'>皮　膚</Col>
                            <Col span={4}>
                                <Select placeholder="" style={{ width: '100%' }}
                                    options={[
                                        { value: '0', label: ' ' },
                                        { value: '1', label: '正常' }
                                    ]}
                                />
                            </Col>
                            <Col span={4} className='ms-2'><Input type="text" /></Col>
                            
                        </Row>

                        <Row className="mt-3">

                            <Col span={3} className='text-start pt-1'>心雑音</Col>
                            <Col span={4}>
                                <Select placeholder="" style={{ width: '100%' }}
                                    options={[
                                        { value: '0', label: ' ' },
                                        { value: '1', label: '正常' }
                                    ]}
                                />
                            </Col>
                            <Col span={4} className='ms-2'><Input type="text" /></Col>

                            <Col span={3} className='text-center ms-2 pt-1'>腹　部</Col>
                            <Col span={4}>
                                <Select placeholder="" style={{ width: '100%' }}
                                    options={[
                                        { value: '0', label: ' ' },
                                        { value: '1', label: '正常' }
                                    ]}
                                />
                            </Col>
                            <Col span={4} className='ms-2'><Input type="text" /></Col>
                            
                        </Row>

                        <Row className="mt-3">


                            <Col span={3} className='text-start pt-1'>口　腔</Col>
                            <Col span={4}>
                                <Select placeholder="" style={{ width: '100%' }}
                                    options={[
                                        { value: '0', label: ' ' },
                                        { value: '1', label: '正常' }
                                    ]}
                                />
                            </Col>
                            <Col span={4} className='ms-2'><Input type="text" /></Col>

                        </Row>

                        <Row className="mt-3">
                            <Col span={3}>医師所見</Col>
                            <Col span={10}><TextArea rows={4} /></Col>
                        </Row>

                        <Row className="mt-3">
                            <Col span={4} className="text-start pt-1 pe-2"><label>(健診日)</label></Col>
                               <FormMonth/> &nbsp;&nbsp;&nbsp;
                               <FormDay/>
                            <Col span={1}></Col>
                            <Col span={5} className="text-start pt-1 pe-2"><label>う歯の状況</label></Col>
                            <Col span={5}>
                                <Select placeholder="" style={{ width: '100%' }}
                                    options={[
                                        { value: '無', label: '無' },
                                        { value: '有', label: '有' }
                                    ]}
                                />
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col span={4} className="text-start pt-1 pe-2"><label>(健診日)</label></Col>
                                <FormMonth/> &nbsp;&nbsp;&nbsp;
                               <FormDay/>
                        </Row>
                        <Row className="mt-3">
                            <Col span={4}>検　尿</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col span={2}></Col>
                            <Col span={3} className="text-start pt-1 pe-2">蛋白</Col>
                            <Col span={2} className="text-center">
                                <Select placeholder="" 
                                    options={[
                                        { value: '1', label: '+' },
                                        { value: '2', label: '±' },
                                        { value: '3', label: '-' }
                                    ]}
                                />
                            </Col>
                            <Col span={2} className="text-end pt-1 pe-2">他</Col>
                            <Col span={8}><Input type="text" /></Col>
                        </Row>
                        <Row className="mt-3">
                            <Col span={2}></Col>
                            <Col span={3} className="text-start pt-1 pe-2">蛋白</Col>
                            <Col span={2} className="text-center">
                                <Select placeholder="" 
                                    options={[
                                        { value: '1', label: '+' },
                                        { value: '2', label: '±' },
                                        { value: '3', label: '-' }
                                    ]}
                                />
                            </Col>
                            <Col span={2} className="text-end pt-1 pe-2">他</Col>
                            <Col span={8}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3">
                            <Col span={4}>発育測定表</Col>
                        </Row>

                        <Row className="mt-3">
                            <Col span={2}></Col>
                            <Col span={3}></Col>
                            <Col span={4} className="text-center pt-1"><label>身長 (cm)</label></Col>
                            <Col span={1}></Col>
                            <Col span={4} className="text-center pt-1"><label>体重 (㎏)</label></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>４月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>５月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>６月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>７月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>８月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>９月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>１０月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>１１月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>１２月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>１月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>２月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>

                        <Row className="mt-3 ms-5">
                            <Col span={2} className="text-start pt-1"><label>月</label></Col>
                            <Col span={3} className="text-start pt-1"><label>３月</label></Col>
                            <Col span={4}><Input type="text" /></Col>
                            <Col span={1}></Col>
                            <Col span={4}><Input type="text" /></Col>
                        </Row>
                    </Card>

                    
                </Col>
            </Row>

            <Row className="mt-7">
                <Col span={24} className="text-center"><Button type="primary">Save</Button></Col>
            </Row>
        </>

    );
};

export default FormStudent1_2;

