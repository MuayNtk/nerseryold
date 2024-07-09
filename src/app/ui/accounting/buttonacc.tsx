"use client";

import React , {useState} from 'react';
import { Button, Col, Row } from 'antd';
import Link from 'next/link';

const Buttonacc: React.FC = () => {

  return (
    <>

        <Row style={{ marginBottom: '16px' , display: 'flex', justifyContent: 'center' }}>
            <Col className="gutter-row ms-10" span={5} >
                <Link href={'../accounting/acc_1'}><Button type="primary"  style={{ width: '100%', height: '140%' }}>地域活動適用申請</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../accounting/acc_2/acc2_listbtn6'}><Button type="primary"  style={{ width: '100%', height: '140%' }}>保育体制強化事業</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../accounting/acc_3'}><Button type="primary"  style={{ width: '100%', height: '140%' }}>処遇改善</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../accounting/acc_4'}><Button type="primary"  style={{ width: '100%', height: '140%' }}>加算（調整）実績報告</Button></Link>
            </Col>
           
        </Row>

        <Row style={{ marginBottom: '16px' , display: 'flex', justifyContent: 'center' }} className='mt-10'>
            <Col className="gutter-row ms-10" span={5}>
            <Link href={'../accounting/acc_5'}><Button type="primary"  style={{ width: '100%', height: '140%' }}>加算適用（仮）申請</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../accounting/acc_6'}><Button type="primary"  style={{ width: '100%', height: '140%' }}>委託費</Button></Link>
            </Col>
            <Col className="gutter-row ms-8" span={5}>
                <Link href={'../accounting/acc_7'}><Button type="primary"  style={{ width: '100%', height: '140%' }}>物価高騰対策支援金</Button></Link>
            </Col>
            <Col className="gutter-row ms-8 " span={5}>
                <Link href={'../accounting/acc_8'}><Button type="primary"  style={{ width: '100%', height: '140%' }}>給食支援費補助金</Button></Link>
            </Col>
        </Row>
    </>      
    );
};
export default Buttonacc;

