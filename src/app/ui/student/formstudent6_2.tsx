"use client";

import React  from 'react';
import { Button,  Col,  DatePickerProps, Form, Input,  Row, Tag, Typography } from 'antd';
import {SaveOutlined} from '@ant-design/icons';
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };


const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const { Text, Link } = Typography;
const FormStudent6_2: React.FC = () => (
    <Form 
        name="wrap"
        // labelCol={{ flex: '15px' }}
        // labelWrap
        // style={{ maxWidth: '120%' }}
        layout="vertical"
    >
      
      
        <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>2 歳</Tag><br /><br />
        <Tag color="magenta" style={{ fontSize: '14px'}}>ねらい</Tag>
        <Row >
            <Col  lg={{ span: 8, offset: 2 }}>
                <Form.Item label="養護" name="input3">
                <Input.TextArea />
                </Form.Item>
            </Col>

        </Row>
        <Row >
            <Col  lg={{ span: 8, offset: 2 }}>
                <Form.Item label="教育" name="input4">
                    <Input.TextArea />
                </Form.Item>
            </Col>
        </Row>

        {/* <div>教容</div> */}
        <Tag color="magenta" style={{ fontSize: '14px'}}>内容</Tag> <br /><br />
            <span className='ms-7'>教育</span><br /><br />
            <span className='ms-10'>身体的発達に関する視点 &nbsp;&nbsp;&nbsp;「社会的発達に関する視点 &nbsp;&nbsp;&nbsp;  精神的発達に関する視点</span><br /><br />
        <Row gutter={16}>
            <Col  lg={{ span: 8, offset: 2 }}>
                <Form.Item label="健康 " name="input5">
                    <Input.TextArea />
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col  lg={{ span: 8, offset: 2 }}>
                <Form.Item label="人間関係" name="input6" >
                    <Input.TextArea />
                </Form.Item>
            </Col>
        </Row>

    
        <Row gutter={16}>
            <Col  lg={{ span: 8, offset: 2 }}>
                <Form.Item label="環境" name="input7" >
                    <Input.TextArea />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col  lg={{ span: 8, offset: 2 }}>
                <Form.Item label="言葉" name="input8" >
                    <Input.TextArea />
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col  lg={{ span: 8, offset: 2 }}>
                <Form.Item label="表現" name="input9" >
                    <Input.TextArea />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col  lg={{ span: 8, offset: 2 }}>
                <Form.Item label="食育" name="input10" >
                    <Input.TextArea />
                </Form.Item>
            </Col>
        </Row>

        {/* <Row>
            <Col  lg={{ span: 6, offset: 1 }}>
                <Form.Item label="安全 健康及び " name="input11" >
                    <Input />
                </Form.Item>
            </Col>
            <Col  lg={{ span: 6, offset: 1 }}>
                <Form.Item label="子育て支援 " name="input12" >
                    <Input />
                </Form.Item>
            </Col>
            <Col  lg={{ span: 6, offset: 1 }}>
                <Form.Item label="連携小学校との " name="input13" >
                    <Input />
                </Form.Item>
            </Col>
        </Row>


        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />} style={{ backgroundColor: '#33c033', borderColor: '#33c033' }}>
                Save
            </Button>
        </div> */}
    </Form>
    
);
export default FormStudent6_2;

