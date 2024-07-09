"use client";

import React from 'react';
import { Col, Form, Input,  Row, Tag } from 'antd';



const FormAcc8_Tab3: React.FC = () => {

      const styles = {
            width: '100%',
            margin: '0 auto',
      };
      const td = {
            border: '1px solid #000000',
            padding: '5px'
      };

      
  return (
    
      <>
             <div><b style={{ fontSize: '14px'}}>資金計画書</b></div><br />
            <Form  labelCol={{ span: 12 }} style={{ maxWidth: 1200 }} >
                  <Row >
                        <Col span={8}>
                              <Form.Item label="施設・事業所名" name="Name_Location" >
                                    <span>いちざきみんなの家</span>
                              </Form.Item>
                        </Col>
                  </Row>
            </Form>
                 
                       
            <Form>
                  <table style={styles}>
                        <tbody>
                              <tr>
                                    <td style={td} width={'25%'}></td>
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
                       

                              </tr>
                              <tr>
                                    <td style={td} width={'25%'} align='left'>補助金</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>1,157,100</td>

                              </tr>

                              <tr>
                                    <td style={td} width={'25%'} align='left'>自己資金</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>

                              </tr>

                              <tr>
                                    <td style={td} width={'25%'} align='left'>収入計</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>1,157,100</td>

                              </tr>

                              <tr>
                                    <td style={td} width={'25%'} align='left'>保育所等給食支援費補助金の対象事業に要する費用</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>1,157,100</td>
                              </tr>

                              <tr>
                                    <td style={td} width={'5%'} align='left'>支出計</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>96,425</td>
                                    <td style={td} width={'5%'} align='right'>1,157,100</td>
                              </tr>

                              <tr>
                                    <td style={td} width={'5%'} align='left'>差引収支</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                              </tr>
                              <tr>
                                    <td style={td} width={'5%'} align='left'>累計</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                                    <td style={td} width={'5%'} align='right'>0</td>
                              </tr>
                        </tbody>
                  </table>
            </Form>
      </>
    );
};
export default FormAcc8_Tab3;

