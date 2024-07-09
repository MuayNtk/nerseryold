"use client";

import React  from 'react';
import {  Col, Form, Input,  Row, Tag } from 'antd';


const FormStudent6: React.FC = () => (
    <Form name="wrap"  layout="vertical">
       
        <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>0 歳</Tag> <br /><br />
        
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

    </Form>
    
);
export default FormStudent6;

