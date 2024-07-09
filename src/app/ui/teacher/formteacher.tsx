"use client";

import {  Button, Col, Form, Row } from 'antd';
import React from 'react';

import Link from 'next/link';
import FormCalendar from './formcalendar';



const Formteach: React.FC = () => {

 
          
    return (
      <div>
            <Form>
                  <Row gutter={26}  style={{ marginBottom: '16px' , display: 'flex', justifyContent: 'center' }}>
                        <Col xs={24} sm={12} md={8} lg={4} xl={4}>
                          <Link href={'../student/student_6'}>
                            <Button  size="large" block  style={{ background: '#d9d9d9', borderColor: '#d9d9d9', display: 'flex', justifyContent: 'center'}}>
                              全体計画
                            </Button>
                          </Link>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4} xl={4}>
                          <Link href={'../student/student_7'}>
                            <Button size="large" block style={{ background: '#d9d9d9', borderColor: '#d9d9d9', display: 'flex', justifyContent: 'center'}}>
                              年間指導計画
                            </Button>
                          </Link>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4} xl={4}>
                          <Link href={'../student/student_8'}>
                            <Button size="large" block style={{ background: '#d9d9d9', borderColor: '#d9d9d9', display: 'flex', justifyContent: 'center'}}>
                              月指導計画
                            </Button>
                          </Link>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4} xl={4}>
                          <Link href={'../student/student_9'}>
                            <Button size="large" block style={{ background: '#d9d9d9', borderColor: '#d9d9d9', display: 'flex', justifyContent: 'center'}}>
                              週案と保育日誌
                            </Button>
                          </Link>

                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4} xl={4}>
                          <Link href={'../student/student_10'}>
                            <Button size="large" block style={{ background: '#d9d9d9', borderColor: '#d9d9d9', display: 'flex', justifyContent: 'center'}}>
                              個別計画
                            </Button>
                            </Link>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4} xl={4}>
                              <Button size="large" block style={{ background: '#d9d9d9', borderColor: '#d9d9d9', display: 'flex', justifyContent: 'center'}}>
                                食育計画
                              </Button>
                        </Col>
                  </Row>
                  <Row gutter={4} justify="space-evenly">
                        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                              <Link href={'../setting/class'}><Button size="large" block style={{ background: '#78abe8', borderColor: '#78abe8' }}>クラス名 </Button></Link>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={4}> </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                              <Button size="large" block style={{ background: '#f90a0d', borderColor: '#f90a0d' }}>事故報告</Button>
                        </Col>
                  </Row>

            </Form>
            <br />
          
              <div style={{ width: '100%',height:'50%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: 'auto' }}>
                <FormCalendar/>
              </div>
      
      </div>
        
    );
  };

export default Formteach;

