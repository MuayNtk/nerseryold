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
  
const FormAcc7_Tab2: React.FC = () => {

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
                  <Form  labelCol={{ span: 10 }} style={{ maxWidth: 1200 }} >
                        <Row >
                              <Col span={10}>
                                    <Form.Item label="【法人名：" name="id" >
                                          <span>社会福祉法人つばさ福祉会理事長 】</span>
                                    </Form.Item>
                              </Col>
                        </Row>
                  </Form>
       
                  <Form>
                        <table style={styles}>
                              <tbody> 
                                    <tr>
                                          <td style={td} width={'25%'} rowSpan={2} align='center'>役職名</td>
                                          <td style={td} align='center'>フリガナ</td>
                                          <td style={td} width={'5%'} rowSpan={2} align='center'>性別</td>
                                          <td style={td} width={'25%'} colSpan={4} align='center'>生年月日</td>
                                    </tr>
                                    <tr>
                                          <td style={td} width={'25%'} align='center'>氏　　名。</td>
                                          <td style={td} align='center'>元号</td>
                                          <td style={td} align='center'>年</td>
                                          <td style={td} align='center'>月</td>
                                          <td style={td} align='center'>日</td>
                                    </tr>

                                   
                                    <tr>
                                          <td style={td} rowSpan={2}>理 事 長</td>
                                          <td style={td} align='center'>ワタナベ　ケイコ</td>
                                          <td style={td}  rowSpan={2}>  
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="女"
                                                      options={[
                                                      { value: '1', label: '男' },
                                                      { value: '2', label: '女 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2}  width={'5%'} align='center'>
                                                <Select style={{ width: "70px" }} onChange={handleChange} defaultValue="昭和"
                                                      options={[
                                                      { value: '1', label: '昭和' },
                                                      { value: '2', label: '平成 ' },
                                                      { value: '3', label: '大正 ' },
                                                      { value: '4', label: '明治 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2} align='center'>11</td>
                                          <td style={td}  rowSpan={2} align='center'>2</td>
                                          <td style={td}  rowSpan={2} align='center'>21</td>

                                    </tr>
                                    <tr>
                                          <td style={td} align='center' >渡部　圭子</td>
                                    </tr>

                                    <tr>
                                          <td style={td} rowSpan={2}>常務理事</td>
                                          <td style={td} align='center'>ワタナベ　シロウ</td>
                                          <td style={td}  rowSpan={2}>  
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="男"
                                                      options={[
                                                      { value: '1', label: '男' },
                                                      { value: '2', label: '女 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2}  width={'5%'} align='center'>
                                                <Select style={{ width: "70px" }} onChange={handleChange} defaultValue="昭和"
                                                      options={[
                                                      { value: '1', label: '昭和' },
                                                      { value: '2', label: '平成 ' },
                                                      { value: '3', label: '大正 ' },
                                                      { value: '4', label: '明治 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2} align='center'>43</td>
                                          <td style={td}  rowSpan={2} align='center'>5</td>
                                          <td style={td}  rowSpan={2} align='center'>22</td>

                                    </tr>
                                    <tr>
                                          <td style={td} align='center' >渡部　史朗</td>
                                    </tr>


                                    <tr>
                                          <td style={td} rowSpan={2}> 理　　事</td>
                                          <td style={td} align='center'>ナカガワ　ヤスヨシ</td>
                                          <td style={td}  rowSpan={2}>  
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="男"
                                                      options={[
                                                      { value: '1', label: '男' },
                                                      { value: '2', label: '女 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2}  width={'5%'} align='center'>
                                                <Select style={{ width: "70px" }} onChange={handleChange} defaultValue="昭和"
                                                      options={[
                                                      { value: '1', label: '昭和' },
                                                      { value: '2', label: '平成 ' },
                                                      { value: '3', label: '大正 ' },
                                                      { value: '4', label: '明治 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2} align='center'>33</td>
                                          <td style={td}  rowSpan={2} align='center'>10</td>
                                          <td style={td}  rowSpan={2} align='center'>1</td>

                                    </tr>
                                    <tr>
                                          <td style={td} align='center' >中川　康嘉</td>
                                    </tr>


                                    <tr>
                                          <td style={td} rowSpan={2}> 理　　事</td>
                                          <td style={td} align='center'>マツウラ　エミ</td>
                                          <td style={td}  rowSpan={2}>  
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="女"
                                                      options={[
                                                      { value: '1', label: '男' },
                                                      { value: '2', label: '女 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2}  width={'5%'} align='center'>
                                                <Select style={{ width: "70px" }} onChange={handleChange} defaultValue="昭和"
                                                      options={[
                                                      { value: '1', label: '昭和' },
                                                      { value: '2', label: '平成 ' },
                                                      { value: '3', label: '大正 ' },
                                                      { value: '4', label: '明治 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2} align='center'>46</td>
                                          <td style={td}  rowSpan={2} align='center'>4</td>
                                          <td style={td}  rowSpan={2} align='center'>20</td>

                                    </tr>
                                    <tr>
                                          <td style={td} align='center' >松浦　恵美</td>
                                    </tr>


                                    <tr>
                                          <td style={td} rowSpan={2}> 理　　事</td>
                                          <td style={td} align='center'>サカキバラ　ヒサコ</td>
                                          <td style={td}  rowSpan={2}>  
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="女"
                                                      options={[
                                                      { value: '1', label: '男' },
                                                      { value: '2', label: '女 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2}  width={'5%'} align='center'>
                                                <Select style={{ width: "70px" }} onChange={handleChange} defaultValue="昭和"
                                                      options={[
                                                      { value: '1', label: '昭和' },
                                                      { value: '2', label: '平成 ' },
                                                      { value: '3', label: '大正 ' },
                                                      { value: '4', label: '明治 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2} align='center'>45</td>
                                          <td style={td}  rowSpan={2} align='center'>8</td>
                                          <td style={td}  rowSpan={2} align='center'>1</td>

                                    </tr>
                                    <tr>
                                          <td style={td} align='center' >榊原　久子</td>
                                    </tr>

                                    <tr>
                                          <td style={td} rowSpan={2}> 理　　事</td>
                                          <td style={td} align='center'>カワサキ　ケイ</td>
                                          <td style={td}  rowSpan={2}>  
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="女"
                                                      options={[
                                                      { value: '1', label: '男' },
                                                      { value: '2', label: '女 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2}  width={'5%'} align='center'>
                                                <Select style={{ width: "70px" }} onChange={handleChange} defaultValue="昭和"
                                                      options={[
                                                      { value: '1', label: '昭和' },
                                                      { value: '2', label: '平成 ' },
                                                      { value: '3', label: '大正 ' },
                                                      { value: '4', label: '明治 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2} align='center'>43</td>
                                          <td style={td}  rowSpan={2} align='center'>4</td>
                                          <td style={td}  rowSpan={2} align='center'>9</td>

                                    </tr>
                                    <tr>
                                          <td style={td} align='center' >川﨑　桂</td>
                                    </tr>
                                    <tr>
                                          <td style={td} rowSpan={2}>監　　事</td>
                                          <td style={td} align='center'>ハセガワ　ユタカ</td>
                                          <td style={td}  rowSpan={2}>  
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="男"
                                                      options={[
                                                      { value: '1', label: '男' },
                                                      { value: '2', label: '女 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2}  width={'5%'} align='center'>
                                                <Select style={{ width: "70px" }} onChange={handleChange} defaultValue="昭和"
                                                      options={[
                                                      { value: '1', label: '昭和' },
                                                      { value: '2', label: '平成 ' },
                                                      { value: '3', label: '大正 ' },
                                                      { value: '4', label: '明治 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2} align='center'>46</td>
                                          <td style={td}  rowSpan={2} align='center'>7</td>
                                          <td style={td}  rowSpan={2} align='center'>9</td>

                                    </tr>
                                    <tr>
                                          <td style={td} align='center' >長谷川　裕</td>
                                    </tr>

                                    <tr>
                                          <td style={td} rowSpan={2}>監　　事</td>
                                          <td style={td} align='center'>シオミツ　カツヤ</td>
                                          <td style={td}  rowSpan={2}>  
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="男"
                                                      options={[
                                                      { value: '1', label: '男' },
                                                      { value: '2', label: '女 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2}  width={'5%'} align='center'>
                                                <Select style={{ width: "70px" }} onChange={handleChange} defaultValue="昭和"
                                                      options={[
                                                      { value: '1', label: '昭和' },
                                                      { value: '2', label: '平成 ' },
                                                      { value: '3', label: '大正 ' },
                                                      { value: '4', label: '明治 ' }
                                                      ]} 
                                                />
                                          </td>
                                          <td style={td}  rowSpan={2} align='center'>35</td>
                                          <td style={td}  rowSpan={2} align='center'>7</td>
                                          <td style={td}  rowSpan={2} align='center'>31</td>

                                    </tr>
                                    <tr>
                                          <td style={td} align='center' >塩満　克也</td>
                                    </tr>
                              
                              </tbody>
                        </table>
                  </Form>
 
                 

          
     
      </>
    );
};
export default FormAcc7_Tab2;

