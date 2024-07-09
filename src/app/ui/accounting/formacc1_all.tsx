"use client";

import React , {useState} from 'react';
import {  Col, DatePicker, DatePickerProps, Form, Input, Row, Select } from 'antd';


const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };

 /* eslint-disable no-template-curly-in-string */
 const validateMessages = {
    required: '${label} is required!',
    types: {
      date: '${label} is not a valid date!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  

const onFinish = (values: any) => {
    console.log(values);    
};

  
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  
const FormTaball: React.FC = () => {
    const styles = {
        border: '1px solid black',
        width: '50%',
        margin: '50px 100px'
       
        
    };
    const td = {
        border: '1px solid black',
        height: '40px',
        
    };

  return (
            <div>
                <Form  onFinish={onFinish}   validateMessages={validateMessages} >
                    <Row style={{ marginTop: '-40px' }}>
                        <Col span={2}></Col>
                        <Col span={3} >
                            <Form.Item  label="毎日">
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={3} className='ms-10'>
                            <Form.Item  label="毎週">
                                <Input suffix='回'/>
                            </Form.Item>
                        </Col>
                        <Col span={3} className='ms-3'>
                            <Form.Item  label="毎月">
                                <Input suffix='回' />
                            </Form.Item>
                        </Col>
                        <Col span={3} className='ms-3'>
                            <Form.Item  label="年間">
                                <Input suffix='回'/>
                            </Form.Item>
                        </Col>
                        <Col span={3} className='ms-3'>
                            <Form.Item  label="他">
                                <Input suffix='回'/>
                            </Form.Item>
                        </Col>
                        <Col span={3} className='ms-3'>
                            <Form.Item  label="延回数">
                                <Input suffix='回'/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={2} ></Col>
                        <Col span={2} className='text-end mt-1'><label>延回数:</label></Col>
                        <Col span={6} className='ms-1'><Input /> </Col>
                    </Row>

                    <Row className='mt-2'>
                        <Col span={2}></Col>
                        <Col span={2} className='text-end mt-1'><label>場所:</label></Col>
                        <Col span={6} className='ms-1'><Input /> </Col>
                    </Row>

                    <Row className='mt-2'>
                        <Col span={2} ></Col>
                        <Col span={2} className='text-end mt-1'><label>日時:</label></Col>
                        <Col span={6} className='ms-1'><Input placeholder='8月, 9月, 10月, 11月, 12月, 1月'/> </Col>
                    </Row>


                    <Row className='mt-2'>
                        <Col span={2}></Col>
                        <Col span={2} className='text-end mt-1'><label>参加者:</label></Col>
                        <Col span={6} className='ms-1'><Input /> </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col span={2}></Col>
                        <Col span={2} className='text-end mt-1'><label>内容:</label></Col>
                        <Col span={6} className='ms-1'><Input.TextArea  /></Col>
                    </Row>
                </Form>
                <div>
                    <table style={styles}>
                        <tr>
                            <td style={td} width={ 100 } >&nbsp;&nbsp;賃　金</td>
                            <td style={td} width={ 100 } align='right'>0&nbsp;&nbsp;</td>
                            <td style={td} width={ 20 } align='center'>円</td>
                            <td style={td} width={ 100 } >&nbsp;&nbsp;備品購入費</td>
                            <td style={td} width={ 100 } align='right'>0&nbsp;&nbsp;</td>
                            <td style={td} width={ 20 } align='center'>円</td>
                        </tr>
                        <tr>
                            <td style={td} width={ 100 } >&nbsp;&nbsp;謝　金</td>
                            <td style={td} width={ 100 } align='right'>1&nbsp;&nbsp;</td>
                            <td style={td} width={ 20 } align='center'>円</td>
                            <td style={td} width={ 100 } >&nbsp;&nbsp;使用料及び賃借料</td>
                            <td style={td} width={ 100 } align='right'>0&nbsp;&nbsp;</td>
                            <td style={td} width={ 20 } align='center'>円</td>
                        </tr>
                        <tr>
                            <td style={td} width={ 100 }>&nbsp;&nbsp;旅　費</td>
                            <td style={td} width={ 100 } align='right'>1&nbsp;&nbsp;</td>
                            <td style={td} width={ 20 } align='center'>円</td>
                            <td style={td} width={ 100 } >&nbsp;&nbsp;委託料</td>
                            <td style={td} width={ 100 } align='right'>0&nbsp;&nbsp;</td>
                            <td style={td} width={ 20 } align='center'>円</td>
                        </tr>
                        <tr>
                            <td style={td} width={ 100 } >役務費</td>
                            <td style={td} width={ 100 } align='right'>1&nbsp;&nbsp;</td>
                            <td style={td} width={ 20 } align='center'>円</td>
                            <td style={td} width={ 100 } >需用費</td>
                            <td style={td} width={ 100 } align='right'>0&nbsp;&nbsp;</td>
                            <td style={td} width={ 20 } align='center'>円</td>
                        </tr>
                        <tr>
                            <td style={td} width={ 100 } >&nbsp;&nbsp;原材料費</td>
                            <td style={td} width={ 100 } align='right'>1&nbsp;&nbsp;</td>
                            <td style={td} width={ 20 } align='center'>円</td>
                            <td style={td} width={ 100 } >&nbsp;&nbsp;執行予定額の合計</td>
                            <td style={td} width={ 100 } align='right'>250,000&nbsp;&nbsp;</td>
                            <td style={td} width={ 20 } align='center'>円</td>
                        </tr>
                    </table>
                </div>
            </div>
               
           
    
    );
};
export default FormTaball;



