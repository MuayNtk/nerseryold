"use client";

import React from 'react';
import { Button, Col, Input, Row, Select, Tag } from 'antd';
import Link from 'next/link';
import { PlusOutlined ,EditOutlined ,EyeOutlined ,CloseOutlined ,SearchOutlined} from '@ant-design/icons';

const FormListTeach1: React.FC = () => {
    const styles = {
        border: '1px solid #dddddd',
        width: '90%',
        margin: '0 auto',
    };
    const td = {
        border: '1px solid #dddddd',
        height: '25px',
        padding: '5px'
    };
    return (
        <>
            <Row>
                <Col span={1}></Col>
                <Col span={2} className='mt-1'>氏名</Col>
                  <Col span={4}>
                    <Input/>
                </Col>
                <Col span={2} className='mt-1'>状態</Col>
                  <Col span={5}>
                    <Select defaultValue="1"
                          options={[
                                { value: '0', label: '履歴書 (正規職員用)'},
                                { value: '1', label: '履歴書 (賃金職員用)'}
                          ]}
                    />
                </Col>

                <Col span={1}></Col>
                <Col className="text-end">
                    <Button type="primary" icon={<SearchOutlined />}>
                      Search
                    </Button>
                </Col>
            </Row>
            <div className='text-end  ' style={{ width: '95%' }} >
                <Col className="text-end pt-1">
                    <a href="../listteacher/registerteach" >
                        <Button type="primary" icon={<PlusOutlined />}  size="small">
                            Add
                        </Button>
                    </a>
                </Col>
            </div>
            <br/>
            <table style={styles}>
                <tbody> {/* เพิ่ม tbody เพื่อให้โค้ดของคุณถูกต้องตามมาตรฐาน HTML */}
                    <tr>
                        <td style={td} width={'5%'}>No</td>
                        <td style={td} align='left' >氏名</td>
                        <td style={td} align='center' width={'15%'}>出願日</td>
                        <td style={td} align='center' width={'25%'} >現住所</td>
                        <td style={td} align='center' width={'20%'}>状態</td>
                        <td style={td} align='center' width={'15%'}></td>
                    </tr>
                    <tr>
                        <td style={td} >1</td>
                        <td style={td} align='left' >藤井　みさ</td>
                        <td style={td}>2020年11月5日</td>
                        <td style={td}>福岡市南区平和2-27-29-303</td>
                        <td style={td}>履歴書 (正規職員用)</td>
                        <td style={td}>
                            <div >
                                <Link href="../listteacher/registerteach" >
                                    <Button  type="primary" icon={<EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href="../listteacher/registerteach" >
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href="../listteacher/registerteach" >
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>2</td>
                        <td style={td} align='left'>髙本　泰世</td>
                        <td style={td}>2020年12月10日</td>
                        <td style={td}>福岡市南区三宅 3-13-30-402</td>
                        <td style={td}>履歴書 (正規職員用)</td>
                        <td style={td}>
                            <div >
                                <Link href="../listteacher/registerteach" >
                                    <Button  type="primary" icon={<EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href="../listteacher/registerteach" >
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href="../listteacher/registerteach" >
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>

                    </tr>

                    <tr>
                        <td style={td}>2</td>
                        <td style={td} align='left'>山崎　都</td>
                        <td style={td}>2020年12月10日</td>
                        <td style={td}>福岡市中央区白金2-10-2-902</td>
                        <td style={td}>履歴書 (賃金職員用)</td>
                        <td style={td}>
                            <div >
                                <Link href="../listteacher/registerteach" >
                                    <Button  type="primary" icon={<EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href="../listteacher/registerteach" >
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href="../listteacher/registerteach" >
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default FormListTeach1;
