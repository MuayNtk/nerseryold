"use client";

import React from 'react';
import { Checkbox, CheckboxProps, Col, Form, Input,  Row, Tag } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
      console.log(`checked = ${e.target.checked}`);
    };
    

const FormAcc8_Tab5: React.FC = () => {

      const styles = {
            width: '70%',
            margin: '0 auto',
      };
      const td = {
            border: '1px solid #000000',
            padding: '5px'
      };

      
  return (
    
      <>
             <div><b style={{ fontSize: '14px'}}>請　求　書</b></div><br />
            <Form  labelCol={{ span: 12 }} style={{ maxWidth: 1200 }} >
                  <Row >
                        <Col span={8}>
                              <Form.Item label="金　　額" name="show1" >
                                    <span  style={{ backgroundColor: '#FFF7A7', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '30px' }}>￥1,157,100</span>
                              </Form.Item>
                        </Col>
                  </Row>
                  <Row >
                        <Col span={8}>
                                    <span >件　　名</span><br />
                                    <span >福岡市保育所等給食支援費補助金（概算払）</span>
                        </Col>
                  </Row>

                  <Row >
                        <Col span={8} offset={1}>
                                    <span >希望する支払方法に✔️を記入してください。</span>
                        </Col>
                  </Row>
                  <br />
                  <Row >
                        <Col span={8} offset={1}>
                              <Checkbox onChange={onChange}><span >口座振込を希望します。</span></Checkbox>
                        </Col>
                  </Row>
            </Form>
                  
            <br />
            <Form>
                  <Row >
                        <Col span={18} offset={3}>
                              <span className='ms-10'>（本市に２つ以上口座を登録されている方等は、以下に振込を希望する口座をご記入ください。）</span>
                        </Col>
                  </Row>
                  
                  <table style={styles}>
                        <tbody>
                              <tr>
                                    <td style={td} width={'15%'}>金融機関名</td>
                                    <td style={td} width={'5%'} align='center'colSpan={14}>銀行</td>
                                    <td style={td} width={'5%'} align='center'>本店　支店　</td>

                              </tr>
                              <tr>
                                    <td style={td} width={'5%'} >預金種別</td>
                                    <td style={td} width={'5%'} align='center' colSpan={5}>普通　・　当座</td>
                                    <td style={td} width={'5%'} align='center' colSpan={3}>口座番号</td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                              </tr>

                              <tr>
                                    <td style={td} width={'5%'} rowSpan={2}>口座名義（カナ）</td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>


                              </tr>

                              <tr>
                                    
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                                    <td style={td} width={'5%'} align='center'></td>
                              </tr>
                        </tbody>
                  </table>
                  <Row >
                        <Col span={20} offset={3}>
                              <span className='ms-10'>（記入する口座は請求者名義のものに限ります。また、口座名義等の記入にあたっては、必ず 預金通帳を確認のうえ、記載のとおり正確に記入してください。）</span>
                        </Col>
                  </Row>
            </Form>
                  <br />
            <Form>
                  <Row >
                        <Col span={8} offset={1}>
                              <Checkbox onChange={onChange}><span >現金受領を希望します。</span></Checkbox>
                        </Col>
                  </Row>

                  <Row>
                        <Col span={8} offset={1}>
                                    <Checkbox onChange={onChange}><span >隔地払（外国送金等）を希望します。</span></Checkbox>
                              </Col>
                        </Row>
            </Form>
            <br />
            <Form>
                  <Row >
                        <Col span={8}  offset={2}>
                            <span >上記の金額を請求します。</span>
                        </Col>

                        <Col span={8} >
                              <Form.Item label="令和" name="show31" >
                                    <span>5 年&nbsp;&nbsp;&nbsp;	月&nbsp;&nbsp;&nbsp;  日</span>
                              </Form.Item>
                        </Col>
                  </Row>

                  <Row>
                        <Col span={8}  offset={2}>
                              <Form.Item label="住所" name="show3" >
                                    <span>宮崎県西都市白馬町3番地</span>
                              </Form.Item>
                        </Col>
                  </Row>
                  <Row>
                        <Col span={8}  offset={2}>
                              <Form.Item label="氏名" name="show4" >
                                    <span>社会福祉法人つばさ福祉会理事長　渡部　圭子</span>
                              </Form.Item>
                        </Col>
                  </Row>
            </Form>
                
                
         
      </>
    );
};
export default FormAcc8_Tab5;

