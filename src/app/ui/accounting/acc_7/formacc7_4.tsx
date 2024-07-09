"use client";

import React, { useState }  from 'react';
import { Col, DatePicker, DatePickerProps, Form, Input,  Row, Select, Table, TableColumnsType, Tag } from 'antd';



const layout = {
      labelCol: { span: 12 },
      // wrapperCol: { span: 14},
  };



const onChange: DatePickerProps['onChange'] = (date, dateString) => {
      console.log(date, dateString);
  };
  
const handleChange = (value: string) => {
      console.log(`selected ${value}`);
};
  
const FormAcc7_4 : React.FC = () => {

      const styles = {
      
            margin: '0 auto',
      };
      const td = {
            border: '1px solid #000000',
            padding: '5px'
      };

      
  return (
    
      <>
                  <Form  labelCol={{ span: 10 }} style={{ maxWidth: 1200 }} >
                        <Row >
                              <Col span={10}>
                                    <Form.Item label="園番号" name="id" initialValue={'566'} >
                                          <Input />
                                    </Form.Item>
                              </Col>
                        </Row>
                        <Row >
                              <Col span={10}>
                                    <Form.Item label="保育所名" name="Nursery_Name"  initialValue={'いちざきみんなの家'}>
                                          <Input />
                                    </Form.Item>
                              </Col>
                        </Row>
                  </Form>

                  <Form  labelCol={{ span: 10 }}  >
                        <Tag color="geekblue" style={{ border: '1px ', padding: '6px', width: '100%' , height: '45px' }}>
                              
                              <Row >
                                    <Col span={10}>
                                          
                                          <Form.Item label="電気料金" name="Electric_Bill" rules={[{ required: true}]}>
                                                <div>
                                                      <Select
                                                      style={{ width: "70px" }}
                                                      onChange={handleChange}
                                                      defaultValue="高圧"
                                                      options={[
                                                            { value: '1', label: '高圧' },
                                                            { value: '2', label: '低圧' }
                                                      ]}
                                                />
                                                      <span className='ms-5'>種別（高圧/低圧）</span>
                                                </div>
                                          </Form.Item>
                                          
                                    </Col>
                              </Row>
                        </Tag>
                  </Form>
                  <br />
                  <Form>
                        <table style={styles}>
                              <tbody> 
                                    <tr>
                                          <td style={td} width={'25%'} colSpan={2} align='center'>区分</td>
                                          <td style={td} width={'5%'} align='center'>7 月</td>
                                          <td style={td} width={'5%'} align='center'>8 月</td>
                                          <td style={td} width={'5%'} align='center'>9 月</td>
                                          <td style={td} width={'5%'} align='center'>10 月</td>
                                          <td style={td} width={'5%'} align='center'>合計</td>
                                          <td style={td} width={'5%'} align='center'>平均</td>
                                    </tr>
                                    <tr>
                                          <td style={td} rowSpan={3} align='center'>R５年度</td>
                                          <td style={td} width={'10%'} align='center'>金額（円）</td>
                                          <td style={td} width={'5%'} align='right'>169,095</td>
                                          <td style={td} width={'5%'} align='right'>177,150</td>
                                          <td style={td} width={'5%'} align='right'>135,769</td>
                                          <td style={td} width={'5%'} align='right'>109,261</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>591,275</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>147,819</td>
                                          
                                    </tr>
                                    <tr>
                                          
                                          <td style={td} width={'10%'} align='center'>使用量（kwh）</td>
                                          <td style={td} width={'5%'}  align='right'>5,671</td>
                                          <td style={td} width={'5%'}  align='right'>5,671</td>
                                          <td style={td} width={'5%'}  align='right'>5,671</td>
                                          <td style={td} width={'5%'}  align='right'>5,671</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>22,684</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>5,671</td>
                                    </tr>

                                    <tr>
                                          
                                          <td style={td}  align='center'>単価（円/kwh）</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>30</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>31</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>24</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>19</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>104</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>26</td>
                                    </tr>
                                   
                              </tbody>
                        </table>
                  </Form>
                  <br />
                  <span className='ms-10' style={{ color: 'red' }}>■契約種別が２つあるなど、上記入力欄で不足する場合は、下記に入力してください。</span> <br /><br />
                  <Form  labelCol={{ span: 10 }}  >
                        <Tag color="geekblue" style={{ border: '1px ', padding: '6px', width: '100%' , height: '45px' }}>
                              
                              <Row >
                                    <Col span={10}>
                                          
                                          <Form.Item label="電気料金" name="Electric_Bill" >
                                                <div>
                                                      <Select
                                                      style={{ width: "70px" }}
                                                      onChange={handleChange}
                                                      defaultValue="高圧"
                                                      options={[
                                                            { value: '1', label: '高圧' },
                                                            { value: '2', label: '低圧' }
                                                      ]}
                                                />
                                                      <span className='ms-5'>種別（高圧/低圧）</span>
                                                </div>
                                          </Form.Item>
                                          
                                    </Col>
                              </Row>
                        </Tag>
                  </Form>
                  <br />
                  <Form>
                        <table style={styles}>
                              <tbody> 
                                    <tr>
                                          <td style={td} width={'25%'} colSpan={2} align='center'>区分</td>
                                          <td style={td} width={'5%'} align='center'>7 月</td>
                                          <td style={td} width={'5%'} align='center'>8 月</td>
                                          <td style={td} width={'5%'} align='center'>9 月</td>
                                          <td style={td} width={'5%'} align='center'>10 月</td>
                                          <td style={td} width={'5%'} align='center'>合計</td>
                                          <td style={td} width={'5%'} align='center'>平均</td>
                                    </tr>
                                    <tr>
                                          <td style={td}  rowSpan={3} align='center'>R５年度</td>
                                          <td style={td} width={'10%'}   align='center'>金額（円）</td>
                                          <td style={td} width={'5%'}  align='right'></td>
                                          <td style={td} width={'5%'}  align='right'></td>
                                          <td style={td} width={'5%'}  align='right'></td>
                                          <td style={td} width={'5%'}  align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>0</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'></td>
                                          
                                    </tr>
                                    <tr>
                                          
                                          <td style={td}  align='center'>使用量（kwh）</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>0</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'></td>
                                    </tr>

                                    <tr>
                                          
                                          <td style={td}  align='center'>単価（円/kwh）</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>0</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                    </tr>
                                   
                              </tbody>
                        </table>
                  </Form>


                  <br />
                  <Form  labelCol={{ span: 10 }}  >
                        <Tag color="geekblue" style={{ border: '1px ', padding: '6px', width: '100%' , height: '45px' }}>
                              
                              <Row >
                                    <Col span={10}>
                                          
                                                <Form.Item label="ガス料金" name="Gas_Fee">
                                                      <div>
                                                            <Select
                                                            style={{ width: "100px" }}
                                                            onChange={handleChange}
                                                            defaultValue="都市ガス"
                                                            options={[
                                                                  { value: '1', label: '都市ガス' },
                                                                  { value: '2', label: 'LPガス' }
                                                            ]}
                                                      />
                                                            <span className='ms-5'>種別（都市ガス/LPガス）</span>
                                                      </div>
                                                </Form.Item>
                                    
                                    </Col>
                              </Row>
                        </Tag>
                  </Form>
                  <br />
                  <Form>
                  <table style={styles}>
                              <tbody> 
                                    <tr>
                                          <td style={td} width={'25%'} colSpan={2} align='center'>区分</td>
                                          <td style={td} width={'5%'} align='center'>7 月</td>
                                          <td style={td} width={'5%'} align='center'>8 月</td>
                                          <td style={td} width={'5%'} align='center'>9 月</td>
                                          <td style={td} width={'5%'} align='center'>10 月</td>
                                          <td style={td} width={'5%'} align='center'>合計</td>
                                          <td style={td} width={'5%'} align='center'>平均</td>
                                    </tr>
                                    <tr>
                                          <td style={td}  rowSpan={3} align='center'>R５年度</td>
                                          <td style={td}  align='center'>金額（円）</td>
                                          <td style={td} align='right'>38,604</td>
                                          <td style={td} align='right'>33,701</td>
                                          <td style={td} align='right'>29,479</td>
                                          <td style={td} align='right'>34,808</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>136,592</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>34,148</td>
                                          
                                    </tr>
                                    <tr>
                                          
                                          <td style={td}  align='center'>使用量（kwh）</td>
                                          <td style={td} align='right'>252</td>
                                          <td style={td} align='right'>232</td>
                                          <td style={td} align='right'>209</td>
                                          <td style={td} align='right'>227</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>920</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>230</td>
                                    </tr>

                                    <tr>
                                          
                                          <td style={td}  align='center'>単価（円/kwh）</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>153</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>145</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>141</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>153</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>593</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>148</td>
                                    </tr>
                                   
                              </tbody>
                        </table>
                  </Form>
       
 
                 

          
     
      </>
    );
};
export default FormAcc7_4;

