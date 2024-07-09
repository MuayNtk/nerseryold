"use client";

import React from 'react';
import { Button, Input, Tag,Space, Row, Col, Form  } from 'antd';
import Link from 'next/link'
import { EyeOutlined } from '@ant-design/icons';
import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const FormClass1: React.FC = () => {
    const styles = {
        border: '1px solid #dddddd',
        width: '50%',
        margin: '0 auto',
    };
    const td = {
        border: '1px solid #dddddd',
        height: '40px',
    };
    return (
        <>
            <Row>
                <Col offset={6}>
                    <Form.Item label='歳児' >
                        <Search
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            style={{ width: 300 }}
                            onSearch={onSearch}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <table style={styles}>
                <tbody>
                    <tr>
                        <td style={td}>No</td>
                        <td style={td} colSpan={2} align='center'>クラス名</td>
                        <td style={td} align='center'>総額</td>
                        <td style={td} align='center'>内容</td>
                    </tr>
                    <tr>
                        <td style={td}>1</td>
                        <td style={td}>0 歳児</td>
                        <td style={td}>うさぎ</td>
                        <td style={td}>11</td>
                        <td style={td}>
                            <Link href={'../setting/class/namelist'}> <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button></Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>2</td>
                        <td style={td}>1 歳児</td>
                        <td style={td}>くま</td>
                        <td style={td}>15</td>
                        <td style={td}>
                              <Link href={'../setting/class/namelist'}><Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button></Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>3</td>
                        <td style={td}>2 歳児</td>
                        <td style={td}>ぱんだ</td>
                        <td style={td}>08</td>
                        <td style={td}>
                              <Link href={'../setting/class/namelist'}><Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button></Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>4</td>
                        <td style={td}>3 歳児</td>
                        <td style={td}>かめ</td>
                        <td style={td}>05</td>
                        <td style={td}>
                              <Link href={'../setting/class/namelist'}><Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button></Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>5</td>
                        <td style={td}>4 歳児</td>
                        <td style={td}>りす</td>
                        <td style={td}>09</td>
                        <td style={td}>
                              <Link href={'../setting/class/namelist'}><Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button></Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>6</td>
                        <td style={td}>5 歳児</td>
                        <td style={td}>とり</td>
                        <td style={td}>10</td>
                        <td style={td}>
                              <Link href={'../setting/class/namelist'}><Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default FormClass1;
