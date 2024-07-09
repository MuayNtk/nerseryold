"use client";

import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { Button, Col, DatePicker, Form, Row, Space } from 'antd';

import {
    DownloadOutlined,
  } from '@ant-design/icons';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import Link from 'next/link';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};


const FormAcc6_2: React.FC = () => {
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
      
      <div>
        <Row gutter={16}>
          <Col span={6}></Col>
          <Col span={8}>
            <Form.Item label='Year'>
              <DatePicker onChange={onChange} picker="month" style={{ width: '200px'}} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item>
              <a href="/download/report6_2.pdf" download>
                <Button type="primary" icon={<DownloadOutlined />} size={size}>
                  Download
                </Button>
              </a>
            </Form.Item>
          </Col>
        </Row>
    </div>
        

    );
  };

export default FormAcc6_2;

