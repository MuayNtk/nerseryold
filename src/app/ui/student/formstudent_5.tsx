"use client";

import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { Col, ConfigProviderProps, Form, Input, Row, Select, Table, TableColumnsType, DatePicker, Space, Card, Button, Flex } from 'antd';

import {
    DownloadOutlined,
} from '@ant-design/icons';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import Link from 'next/link';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};


const FormStudent5: React.FC = () => {
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

    return (

        <>
            <Row className="flex justify-center">
                <Col span={2}><label>部屋</label></Col>
                <Col span={3}>
                    <Select defaultValue="部屋の名前" style={{ width: '100%' }}
                        options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' }
                        ]}
                    />
                </Col>
                <Col span={3}></Col>
                <Col span={2}><label>日付</label></Col>
                <Col span={3}>
                    <Space className="w-full" direction="vertical">
                        <DatePicker onChange={onChange} style={{ width: '100%' }} />
                    </Space>
                </Col>
                <Col span={3}></Col>
                <Col>
                    <a href="/download/report5.pdf" download>
                        <Button type="primary" icon={<DownloadOutlined />} size={size}>
                            Download
                        </Button>
                    </a>
                </Col>
            </Row>
        </>


    );
};

export default FormStudent5;

