"use client";

import React , {useState} from 'react';
import { Button, Col, ConfigProviderProps, DatePicker, DatePickerProps, Form, Input, Row, Select, Space, Table, TableColumnsType, Tag } from 'antd';
import Link from 'next/link';


const layout = {
      labelCol: { span: 12 },
      wrapperCol: { span: 8 },
    };
    

  

const FormHistoryList2: React.FC = () => {

  return (
    
            <Form {...layout}>
                 
                  <Row className="ms-5">
                        <Col span={2} className="text-start pt-1"><label>氏 名 :</label></Col>
                        <Col span={6}><Input type="text"  value={'朝陽'} className="no-color-input" /></Col>
                  </Row>
                  <Row className="mt-4 ms-5">
                        <Col span={2} className="text-start pt-1"><label>生 年 月 日 :</label></Col>
                        <Col span={6}><Input type="text"  value={'1988年12月5日'} className="no-color-input" /></Col>
                  </Row>

                  
                  <Row className="mt-4 ms-5">
                        <Col span={2} className="text-start pt-1 pe-2"><label>続柄 :</label></Col>
                        <Col span={2}><Input type="text"  value={'母親'} className="no-color-input" /> </Col>
                        
                  </Row>

                  <Row className="mt-4 ms-5">
                        <Col span={2} className="text-start pt-1 pe-2"><label>職業(具体的に)</label></Col>
                        <Col span={6}><Input type="text"  value={'会計士'} className="no-color-input" /> </Col>
                        
                  </Row>

                  <Row className="mt-3 ms-5">
                        <Col span={2} className="text-start pt-1"><label>勤 務 先</label></Col>
                        <Col span={6}><Input.TextArea   value={'〒100-8994 東京都千代田区丸ノ内二丁目7番2号  東京中央郵便局'} className="no-color-input" /></Col>
                  </Row>

                  <Row className="mt-4 ms-5">
                        <Col span={2} className="text-start pt-1 pe-2"><label>T E L</label></Col>
                        <Col span={6}><Input type="text"  value={'0100000000'} className="no-color-input" /> </Col>
                        
                  </Row>

                 
                  
            </Form>
    );
};
export default FormHistoryList2;

