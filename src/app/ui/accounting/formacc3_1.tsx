"use client";

import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Space } from 'antd';

import {
    DownloadOutlined,
  } from '@ant-design/icons';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import Link from 'next/link';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};


const Form3_1: React.FC = () => {
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
          <label style={{ width: '70px', display: 'inline-block' }}>Year :</label>
            <DatePicker onChange={onChange} picker="year" style={{ width: '300px'}} />
            <br /><br />
            <div>
              <a href="/download/report3.xlsx" download>
                <Button type="primary" icon={<DownloadOutlined />} size={size}>
                  Download
                </Button>
              </a>
            </div>
        </div>
        

    );
  };

export default Form3_1;

