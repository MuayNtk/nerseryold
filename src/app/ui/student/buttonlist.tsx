"use client";

import React , {useState} from 'react';
import { Button, Col, Form, Row } from 'antd';
import Link from 'next/link';

const Buttonlist: React.FC = () => {

  return (
    <>
        <Row style={{ marginBottom: '16px' , display: 'flex', justifyContent: 'center' }}>
            <Col className="gutter-row" span={5}>
                <Link href={'../student/student_1'}><Button type="primary"  size="large" block>児童票</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={"../student/student_2_1"}><Button type="primary" size="large" block>歳児保育経過記録</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../student/student_3'}><Button type="primary" size="large" block>保育所児童保育要録</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../student/student_4'}><Button type="primary" size="large" block>児童出席簿</Button></Link>
            </Col>
        </Row>
        <br />
        <Row style={{ marginBottom: '16px' , display: 'flex', justifyContent: 'center' }} >
            <Col span={5}>
                <Link href={'../student/student_5'}> <Button type="primary"size="large" block>月 児童出席簿 組</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../student/student_6'}><Button type="primary" size="large" block>全体計画</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../student/student_7'}><Button type="primary" size="large" block>年間指導計画</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../student/student_8'}><Button type="primary"  size="large" block>月指導計画</Button></Link>
            </Col>
        </Row>
        <br />
        <Row style={{ marginBottom: '16px' , display: 'flex', justifyContent: 'center' }} >
            <Col span={5}>
                <Link href={'../student/student_9'}><Button type="primary" size="large"  block  style={{ fontSize: '15px' }}>週案と保育日誌(未満児)</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../student/student_10'}><Button type="primary" size="large" block  style={{ fontSize: '15px' }}>個人カリキュラム・記録 </Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}></Col>
            <Col className="gutter-row ms-8" span={5}></Col>
            
        </Row>
    </>
          
    );
};
export default Buttonlist;

