"use client";

import React , {useState} from 'react';
import { Button, Col, Row } from 'antd';
import Link from 'next/link';

const Buttonacc7: React.FC = () => {

  return (
        <Row gutter={[100, 42]} style={{ marginBottom: '16px' , display: 'flex', justifyContent: 'center' }}>
            <Col className="gutter-row" span={5}>
                  <Link href={'../accounting/acc_7/acc_list7_1'}><Button type="primary"  style={{fontSize: '14px' }}>地域活動適用申請</Button></Link>
            </Col>
            <Col className="gutter-row" span={5}>
                  <Link href={'../accounting/acc_7/acc_list7_2'}><Button type="primary"  style={{fontSize: '14px'}}>保育体制強化事業</Button></Link>
            </Col>
            <Col className="gutter-row" span={5}>
                  <Link href={'../accounting/acc_7/acc_list7_3'}><Button type="primary"  style={{fontSize: '14px'}}>保育体制強化事業</Button></Link>
            </Col>
        </Row>
          
    );
};
export default Buttonacc7;

