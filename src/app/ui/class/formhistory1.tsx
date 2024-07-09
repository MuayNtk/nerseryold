"use client";

import React , {useState} from 'react';
import { Button, Col, ConfigProviderProps, DatePicker, DatePickerProps, Form, Input, Row, Select, Space, Table, TableColumnsType, Tag } from 'antd';
import Link from 'next/link';


const layout = {
      labelCol: { span: 12 },
      wrapperCol: { span: 8 },
    };
    


const FormHistoryList1: React.FC = () => {

  return (
    
            <Form {...layout}>
                 
                  <Row className="ms-5">
                        <Col span={2} className="text-start pt-1"><label>施設長 :</label></Col>
                        <Col span={6}><Input type="text"  value={'佐藤'} className="no-color-input" /></Col>
                  </Row>
                  <Row className="mt-4 ms-5">
                        <Col span={2} className="text-start pt-1"><label>生 年 月 日 :</label></Col>
                        <Col span={6}><Input type="text"  value={'2021年11月5日'} className="no-color-input" /></Col>
                  </Row>

                  
                  <Row className="mt-4 ms-5">
                        <Col span={2} className="text-start pt-1 pe-2"><label>性別 :</label></Col>
                        <Col span={2}><Input type="text"  value={'男'} className="no-color-input" /> </Col>

                        <Col span={2} className="text-center pt-1 pe-2"><label>年 :</label></Col>
                        <Col span={2}><Input type="text"  value={'1'} className="no-color-input" /></Col>
                        
                  </Row>

                  <Row className="mt-3 ms-5">
                        <Col span={2} className="text-start pt-1"><label>現住所 :</label></Col>
                        <Col span={6}><Input.TextArea   value={'〒100-8994 東京都千代田区丸ノ内二丁目7番2号  東京中央郵便局'} className="no-color-input" /></Col>
                  </Row>

                 
                  
            </Form>
    );
};
export default FormHistoryList1;

