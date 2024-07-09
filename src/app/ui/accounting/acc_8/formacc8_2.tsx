"use client";

import React from 'react';
import { Col, Form, Input,  Row, Tag } from 'antd';



const FormAcc8_Tab2: React.FC = () => {

      const styles = {
            width: '75%',
            margin: '0 auto',
      };
      const td = {
            border: '1px solid #000000',
            padding: '5px'
      };

      
  return (
    
      <>
             <div><b style={{ fontSize: '14px'}}>福岡市保育所等給食支援費補助金　積算資料</b></div><br />
            <Form  labelCol={{ span: 12 }} style={{ maxWidth: 1200 }} >
                  <Row >
                        <Col span={8}>
                              <Form.Item label="施設・事業所名" name="Name_Location" >
                                    <span> いちざきみんなの家</span>
                              </Form.Item>
                        </Col>
                  </Row>
            </Form>
                  
                  <Tag bordered={false} color="magenta" style={{ fontSize: '12px' }}>１．令和５年度の各月初日の利用児童数（見込）</Tag>
                        <br /><br />
            <Form>
                  <table style={styles}>
                        <tbody>
                              <tr>
                                    <td style={td} width={'12%'}></td>
                                    <td style={td} width={'6%'} align='center'>4 月</td>
                                    <td style={td} width={'6%'} align='center'>5 月</td>
                                    <td style={td} width={'6%'} align='center'>6 月</td>
                                    <td style={td} width={'6%'} align='center'>7 月</td>
                                    <td style={td} width={'6%'} align='center'>8 月</td>
                                    <td style={td} width={'6%'} align='center'>9 月</td>
                                    <td style={td} width={'7%'} align='center'>10 月</td>
                                    <td style={td} width={'7%'} align='center'>11 月</td>
                                    <td style={td} width={'7%'} align='center'>12 月</td>
                                    <td style={td} width={'7%'} align='center'>1 月</td>
                                    <td style={td} width={'7%'} align='center'>2 月</td>
                                    <td style={td} width={'7%'} align='center'>3 月</td>
                                    <td style={td} width={'7%'} align='center'>合計</td>
                                    <td style={td} width={'15%'} align='center'>月平均</td>

                              </tr>
                              <tr>
                                    <td style={td} width={'20%'} align='center'>給食 (主食+副食)</td>
                                    <td style={td} width={'5%'} align='center'>89</td>
                                    <td style={td} width={'5%'} align='center'>90</td>
                                    <td style={td} width={'5%'} align='center'>93</td>
                                    <td style={td} width={'5%'} align='center'>94</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>1,102</td>
                                    <td style={td} width={'5%'} align='center'>92</td>

                              </tr>

                              <tr>
                                    <td style={td} width={'5%'} align='center'>給食 (副食のみ)</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>
                                    <td style={td} width={'5%'} align='center'>0</td>

                              </tr>

                              <tr>
                                    <td style={td} width={'5%'} align='right'>計</td>
                                    <td style={td} width={'5%'} align='center'>89</td>
                                    <td style={td} width={'5%'} align='center'>90</td>
                                    <td style={td} width={'5%'} align='center'>93</td>
                                    <td style={td} width={'5%'} align='center'>94</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>92</td>
                                    <td style={td} width={'5%'} align='center'>1,102</td>
                                    <td style={td} width={'5%'} align='center'>92</td>

                              </tr>
                        </tbody>
                  </table>
            </Form>
                  <br />
            <Form>
                  <Row>
                        <Col offset={2}>
                              <span>
                                    （記入上の注意） 
                              </span>
                        </Col>
                  </Row>

                  <Row>
                        <Col offset={3}>
                              <span>
                                    ・給食には外部委託、外部搬入による給食提供を含む。<br />
                                    ・利用児童数が未確定の月は、利用児童数の見込みを記載すること。
                              </span>
                        </Col>
                  </Row>
            </Form>
                  <br />
                  <Tag bordered={false} color="magenta" style={{ fontSize: '12px' }}>２．補助金の額（基本単価 × 令和5年度の各月初日の利用児童数の合計）</Tag>
                  <br /><br />
            <Form  style={{ maxWidth: 1000 }} >
                  <Row >
                        <Col span={4}></Col>
                        <Col span={3} >
                              <span>基本単価</span>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={4}>
                              <span>利用児童数合計</span>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={6}>
                              <span>補助金の額</span>
                        </Col>
                  </Row>
                  <Row>
                        <Col span={2}>
                              <span style={{ display: 'flex',  justifyContent: 'center' , alignItems: 'center', width: '120px', height: '30px' }}>給食  (主食+副食)</span>
                        </Col>
                        <Col span={3} offset={2}>
                              <span style={{ display: 'flex',  alignItems: 'center', width: '120px', height: '30px' }}>1,050 円</span>
                  
                        </Col>
                        <Col span={1}>
                              <span>X</span>
                        </Col>
                        <Col span={3} offset={1}>
                              <span style={{ backgroundColor: '#FFF7A7', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '30px' }}>1,102</span>

                        </Col>
                        <Col span={2} offset={1}>
                              <span >=</span>
                        </Col>
                        <Col span={4}>
                              
                              <span style={{ backgroundColor: '#FFF7A7', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '30px' }}>1,157,100</span>
                        </Col>

                        
                  </Row>

                  <br />
                  <Row >
                        <Col span={2}>
                              <span style={{ display: 'flex',  justifyContent: 'center' , alignItems: 'center', width: '120px', height: '30px' }}> 給食 （副食のみ）</span>
                        </Col>
                        <Col span={3} offset={2}>
                              <span style={{ display: 'flex',  alignItems: 'center', width: '120px', height: '30px' }}>630 円</span>
                  
                        </Col>
                        <Col span={1}>
                              <span>X</span>
                        </Col>
                        <Col span={3} offset={1}>
                              <span style={{ backgroundColor: '#FFF7A7', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '30px' }}>0</span>

                        </Col>
                        <Col span={2} offset={1}>
                              <span >=</span>
                        </Col>
                        <Col span={4}>
                              
                              <span style={{ backgroundColor: '#FFF7A7', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '30px' }}>0</span>
                        </Col>
                  </Row>
                  <br />
                  <Row >
                        <Col span={2}>
                              <span></span>
                        </Col>
                        <Col span={3} offset={2}>
                              <span style={{ display: 'flex',  alignItems: 'center', width: '120px', height: '30px' }}></span>
                  
                        </Col>
                        <Col span={1}>
                              <span></span>
                        </Col>
                        <Col span={3} offset={1}>
                              <span></span>

                        </Col>
                        <Col span={2} offset={1}>
                              <span >計</span>
                        </Col>
                        <Col span={3}>
                              
                              <span style={{ backgroundColor: '#FFF7A7', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '30px' }}>1,157,100</span>
                              
                        </Col>
                        <Col span={6}>
                              <span>←申請書の交付申請額と同額</span>
                        </Col>

                        
                  </Row>
                  
                  
            </Form>
      </>
    );
};
export default FormAcc8_Tab2;

