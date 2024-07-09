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
  
const FormAcc7_3 : React.FC = () => {

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
                                          
                                          <Form.Item label="電気料金" name="Electric_Bill">
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
                                          <td style={td} width={'5%'} align='center'>4 月</td>
                                          <td style={td} width={'5%'} align='center'>5 月</td>
                                          <td style={td} width={'5%'} align='center'>6 月</td>
                                          <td style={td} width={'5%'} align='center'>7 月</td>
                                          <td style={td} width={'5%'} align='center'>8 月</td>
                                          <td style={td} width={'5%'} align='center'>9 月</td>
                                          <td style={td} width={'5%'} align='center'>10 月</td>
                                          <td style={td} width={'5%'} align='center'>11 月</td>
                                          <td style={td} width={'5%'} align='center'>12 月</td>
                                          <td style={td} width={'5%'} align='center'>1 月</td>
                                          <td style={td} width={'5%'} align='center'>2 月</td>
                                          <td style={td} width={'5%'} align='center'>3 月</td>
                                          <td style={td} width={'5%'} align='center'>合計</td>
                                          <td style={td} width={'5%'} align='center'>平均</td>
                                    </tr>
                                    <tr>
                                          <td style={td}  rowSpan={3} align='center'>R３年度</td>
                                          <td style={td}  align='center'>金額（円）</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'>150,209</td>
                                          <td style={td} align='right'>150,466</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>300,675</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>150,338</td>
                                          
                                    </tr>
                                    <tr>
                                          
                                          <td style={td}  align='center'>使用量（kwh）</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>10,632</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>5,316</td>
                                    </tr>

                                    <tr>
                                          
                                          <td style={td}  align='center'>単価（円/kwh）</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>28</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>28</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>57</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>28</td>
                                          
                                    </tr>


                                    <tr>
                                          <td style={td}  rowSpan={3} align='center'>R４年度</td>
                                          <td style={td}  align='center'>金額（円）</td>
                                          <td style={td} align='right'>120,112</td>
                                          <td style={td} align='right'>120,750</td>
                                          <td style={td} align='right'>126,054</td>
                                          <td style={td} align='right'>188,556</td>
                                          <td style={td} align='right'>211,024</td>
                                          <td style={td} align='right'>178,500</td>
                                          <td style={td} align='right'>133,310</td>
                                          <td style={td} align='right'>133,111</td>
                                          <td style={td} align='right'>215,440</td>
                                          <td style={td} align='right'>208,329</td>
                                          <td style={td} align='right'>166,625</td>
                                          <td style={td} align='right'>139,845</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>1,941,656</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>161,805</td>
                                          
                                    </tr>
                                    <tr>
                                          
                                          <td style={td}  align='center'>使用量（kwh）</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>63,792</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>5,316</td>
                                    </tr>

                                    <tr>
                                          
                                          <td style={td} align='center'>単価（円/kwh）</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>23</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>23</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>24</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>35</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>40</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>34</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>25</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>25</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>41</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>39</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>31</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>26</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>365</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>30</td>
                                          
                                    </tr>

                                    <tr>
                                          <td style={td}  rowSpan={3} align='center'>R５年度</td>
                                          <td style={td}  align='center'>金額（円）</td>
                                          <td style={td} align='right'>115,506</td>
                                          <td style={td} align='right'>120,086</td>
                                          <td style={td} align='right'>130,608</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>366,200</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>122,067</td>
                                          
                                    </tr>
                                    <tr>
                                          
                                          <td style={td}  align='center'>使用量（kwh）</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>15,948</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>5,316</td>
                                    </tr>

                                    <tr>
                                          
                                          <td style={td} align='center'>単価（円/kwh）</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>23</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>23</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>24</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>365</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>30</td>
                                          
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
                                          <td style={td} width={'25%'} colSpan={2} align='center'>役職名</td>
                                          <td style={td} width={'5%'} align='center'>4 月</td>
                                          <td style={td} width={'5%'} align='center'>5 月</td>
                                          <td style={td} width={'5%'} align='center'>6 月</td>
                                          <td style={td} width={'5%'} align='center'>7 月</td>
                                          <td style={td} width={'5%'} align='center'>8 月</td>
                                          <td style={td} width={'5%'} align='center'>9 月</td>
                                          <td style={td} width={'5%'} align='center'>10 月</td>
                                          <td style={td} width={'5%'} align='center'>11 月</td>
                                          <td style={td} width={'5%'} align='center'>12 月</td>
                                          <td style={td} width={'5%'} align='center'>1 月</td>
                                          <td style={td} width={'5%'} align='center'>2 月</td>
                                          <td style={td} width={'5%'} align='center'>3 月</td>
                                          <td style={td} width={'5%'} align='center'>合計</td>
                                          <td style={td} width={'5%'} align='center'>平均</td>
                                    </tr>
                                    <tr>
                                          <td style={td}  rowSpan={3} align='center'>R３年度</td>
                                          <td style={td}  align='center'>金額（円）</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'>150,209</td>
                                          <td style={td} align='right'>150,466</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>300,675</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>150,338</td>
                                          
                                    </tr>
                                    <tr>
                                          
                                          <td style={td}  align='center'>使用量（m3）</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>10,632</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>5,316</td>
                                    </tr>

                                    <tr>
                                          
                                          <td style={td}  align='center'>単価（円/m3）</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>28</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>28</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>57</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>28</td>
                                          
                                    </tr>


                                    <tr>
                                          <td style={td}  rowSpan={3} align='center'>R４年度</td>
                                          <td style={td}  align='center'>金額（円）</td>
                                          <td style={td} align='right'>120,112</td>
                                          <td style={td} align='right'>120,750</td>
                                          <td style={td} align='right'>126,054</td>
                                          <td style={td} align='right'>188,556</td>
                                          <td style={td} align='right'>211,024</td>
                                          <td style={td} align='right'>178,500</td>
                                          <td style={td} align='right'>133,310</td>
                                          <td style={td} align='right'>133,111</td>
                                          <td style={td} align='right'>215,440</td>
                                          <td style={td} align='right'>208,329</td>
                                          <td style={td} align='right'>166,625</td>
                                          <td style={td} align='right'>139,845</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>1,941,656</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>161,805</td>
                                          
                                    </tr>
                                    <tr>
                                          
                                          <td style={td}  align='center'>使用量（m3）</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>63,792</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>5,316</td>
                                    </tr>

                                    <tr>
                                          
                                          <td style={td} align='center'>単価（円/m3）</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>23</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>23</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>24</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>35</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>40</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>34</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>25</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>25</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>41</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>39</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>31</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>26</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>365</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>30</td>
                                          
                                    </tr>

                                    <tr>
                                          <td style={td}  rowSpan={3} align='center'>R５年度</td>
                                          <td style={td}  align='center'>金額（円）</td>
                                          <td style={td} align='right'>115,506</td>
                                          <td style={td} align='right'>120,086</td>
                                          <td style={td} align='right'>130,608</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>366,200</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>122,067</td>
                                          
                                    </tr>
                                    <tr>
                                          
                                          <td style={td}  align='center'>使用量（m3）</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'>5,316</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>15,948</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }}  align='right'>5,316</td>
                                    </tr>

                                    <tr>
                                          
                                          <td style={td} align='center'>単価（円/m3）</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>23</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>23</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>24</td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={td} align='right'></td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>365</td>
                                          <td style={{ ...td, backgroundColor: '#fff293' }} align='right'>30</td>
                                          
                                    </tr>
                              </tbody>
                        </table>
                  </Form>
       
 
                 

          
     
      </>
    );
};
export default FormAcc7_3;

