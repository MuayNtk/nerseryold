"use client";

import React, { useState }  from 'react';
import { Col, DatePicker, DatePickerProps, Form, Input,  Row, Select, Table, TableColumnsType, Tag } from 'antd';
import FormEra from '../../common/formera';



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
  
const FormAcc8_Tab1: React.FC = () => {

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
            <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>福岡市保育所等物価高騰対策支援金申請書兼請求書</Tag>
            <br /><br />
            <table  style={{ width: '15%' , margin: '0 85%' }} className='text-end'>
                  <tbody>
                        <tr>
                              <td style={td} width={'5%'}><b>園番号</b>
                              </td> 
                              <td style={td} width={'5%'}>566</td>
                        </tr>
                        
                  </tbody>
            </table>
            <br />
            <Row  style={{ width: '60%' , margin: '0 58% ' }}>
                  <Col span={2} className='text-end ms-1 mt-1'><label>令和 :</label></Col>
                  <Col className='ms-2'></Col>
                  <FormEra />
            </Row>
            <Form>
                  <Row className=' mt-5'>
                        <Col offset={2}>
                              <span>
                                    ・令和５年度福岡市保育所等給食支援費補助金について、補助金の交付を下記のとおり申請します。<br />
                                    ・福岡市保育所等給食支援費補助金交付要綱第14条第４項の確認にあたり、福岡県警察に照会がなされることに同意します。<br />
                                    ・福岡市保育所等給食支援費補助金交付要綱第５条（２）の確認にあたり、税務担当課に「福岡市保育所等給食支援費補助金交付申請書」が開示され、市税等の課税状況及び納付状況についての照会がなされることに同意します。
                              </span>
                        </Col>
                  </Row>
            </Form>

           
                  <br />
                  <Tag bordered={false} color="magenta" style={{ fontSize: '12px' }}> １　下記のいずれかに該当していること（○を記載すること）。</Tag>
                        <br /><br />
                  <Form>
                        <table style={styles}>
                              <tbody>
                                    <tr>
                                          <td style={td} width={'25%'}>物価上昇に起因する給食費の値上げを行っていない。</td>
                                          <td style={td} width={'5%'} align='center'>
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue=""
                                                      options={[
                                                      { value: '1', label: '○' },
                                                      { value: '2', label: ' ' }
                                                      ]} />
                                          </td>
                                    </tr>
                                    <tr>
                                          <td style={td} width={'25%'}>既に徴収した物価上昇に起因する値上げ相当分について、保護者へ返還を行っている又は今年度中に行う予定である。</td>
                                          <td style={td} width={'5%'} align='center'>
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="○"
                                                      options={[
                                                      { value: '1', label: '○' },
                                                      { value: '2', label: ' ' }
                                                      ]} />
                                          </td>
                                    </tr>
                              </tbody>
                        </table>
                  </Form>
        
                  <Tag bordered={false} color="magenta" style={{ fontSize: '12px' }}>  ２　交付申請額</Tag>
                  <br /><br />
                  <Form  labelCol={{ span: 12 }} style={{ maxWidth: 1200 }} >
                        <Row >
                              <Col span={8}>
                                    <Form.Item label="交付申請額" name="id" initialValue={'1,157,100'} >
                                          <Input placeholder="" suffix=" 円"/>
                                    </Form.Item>
                              </Col>
                        </Row>
                      
                  </Form>
                 
                  <Tag bordered={false} color="magenta" style={{ fontSize: '12px' }}> ３　補助金の交付方法</Tag>
                  <br /><br />
                  <Form  labelCol={{ span: 12 }} style={{ maxWidth: 1200 }} >
                        <Row >
                              <Col span={8}>
                                    <Form.Item label="補助金の交付方法" >
                                          <Select style={{ width: "100px" }} onChange={handleChange} defaultValue="精算払"
                                                options={[
                                                { value: '1', label: '精算払' },
                                                { value: '2', label: '概算払 ' }
                                                ]} 
                                          />
                                    </Form.Item>
                              </Col>
                        </Row>
                  </Form>
                 
                  <Tag bordered={false} color="magenta" style={{ fontSize: '12px' }}> ４　補助事業の執行に関する収支計画</Tag>
                  <br /><br />
                  <Form>
                        <Row>
                              <Col offset={1}>
                                    <span>
                                          ※収入・支出の部の計は一致
                                    </span>
                              </Col>
                        </Row>
                  </Form>
                  <Form>
                        <table style={styles}>
                              <tbody>
                                    <tr>
                                          <td style={td} width={'25%'} colSpan={2}>区　　分</td>
                                          <td style={td} width={'5%'} align='center'>金　　額</td>
                                          <td style={td} width={'5%'} align='center'>説　　明 </td>
                                    </tr>
                                    <tr>
                                          <td style={td} width={'1%'} align='center' rowSpan={4}>収入の部</td>
                                    </tr>
                                    <tr>
                                          <td style={td}width={'20%'} >福岡市補助金収入</td>
                                          <td style={td} width={'10%'} align='right'>1,157,100 円</td>
                                          <td style={td} width={'10%'} align='center'></td>
                                    </tr>
                                    <tr>
                                          <td style={td} width={'20%'}>自　己　資　金</td>
                                          <td style={td} width={'10%'} align='right'>0 円</td>
                                          <td style={td} width={'10%'} align='center'></td>
                                    </tr>
                                    <tr>
                                          <td style={td} align='right'>計</td>
                                          <td style={td} width={'10%'} align='right'>1,157,100 円</td>
                                          <td style={td} width={'10%'} align='center'></td>
                                    </tr>

                              
                                    <tr>
                                          <td style={td} width={'1%'} align='center' rowSpan={3}>支出の部</td>
                                    </tr>
                                    <tr>
                                          <td style={td}  width={'20%'}>保育所等給食支援費補助金の対象事業に要する費用（物価上昇影響額相当）</td>
                                          <td style={td} width={'10%'} align='right'>1,157,100 円</td>
                                          <td style={td} width={'10%'} align='center'></td>
                                    </tr>
                                    <tr>
                                          <td style={td} align='right'>計</td>
                                          <td style={td} width={'10%'} align='right'>1,157,100 円</td>
                                          <td style={td} width={'10%'} align='center'></td>
                                    </tr>
                              </tbody>
                        </table>
                  </Form>


          
     
      </>
    );
};
export default FormAcc8_Tab1;

