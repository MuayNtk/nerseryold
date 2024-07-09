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
  
const FormAcc7_Tab1: React.FC = () => {

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
            <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>福岡市保育所等物価高騰対策支援金申請書兼請求書</Tag>
            <br /><br />
            <Row  style={{ width: '60%' , margin: '0 58%' }}>
                  <Col span={2} className='text-end ms-1'><label>令和 :</label></Col>
                  <Col className='ms-2'></Col>
                  <FormEra />
            </Row>
            <br />
            <div>（あて先）福岡市長</div>
                  <div>誓約・同意事項に誓約・同意の上、申請します。</div>
                  <br />
                  <Tag bordered={false} color="magenta" style={{ fontSize: '12px' }}> １　申請・請求者等情報</Tag>
                  <br /> <br />
                  <table  style={{ width: '70%' , margin: '0 auto' }}>
                        <tbody>
                              <tr>
                                    <td style={td} width={'5%'}><b>施設・事業所類型</b>
                                    </td> 
                                    <td style={td} width={'10%'} colSpan={2}> 
                                          <Select defaultValue="1" style={{ width:'35%' }}
                                                options={[
                                                      { value: '1', label: '私立保育所'},
                                                      { value: '2', label: '保育所型認定こども園'},
                                                      { value: '3', label: '幼保連携型型認定こども園'},
                                                      { value: '4', label: '地域型保育事業所'},
                                                      { value: '5', label: '認可外保育施設'},
                                                      { value: '6', label: '各種学校'},
                                                      { value: '7', label: 'その他施設'}
                                                ]}
                                          />
                                    </td>
                              </tr>
                              <tr>
                                    <td style={td} width={'5%'}><b>施設・事業所名</b></td> 
                                    <td style={td} width={'5%'} colSpan={2}>いちざきみんなの家</td>
                              </tr>

                              <tr>
                                    <td style={td} width={'5%'}><b>法人住所</b></td> 
                                    <td style={td} width={'5%'}><b>〒</b> 881-0032  </td>
                                    <td style={td} width={'10%'}>宮﨑県西都市白馬町3番地</td>
                              </tr>

                              <tr>
                                    <td style={td} width={'5%'}><b>法人名</b></td> 
                                    <td style={td} width={'5%'} colSpan={2}>社会福祉法人つばさ福祉会理事長　</td>
                              </tr>
                              <tr>
                                    <td style={td} width={'5%'}><b>代表者職・氏名</b> </td> 
                                    <td style={td} width={'5%'} colSpan={2}>渡部圭子</td>
                              </tr>
                              
                        </tbody>
                  </table>
                  <br />
                  <table style={{ width: '70%' , margin: '0 auto' }}>
                        <tbody>
                              <tr>
                                    <td style={td} width={'5%'}><b>申請に関する担当者氏名</b></td> 
                                    <td style={td} width={'5%'}>いちざきみんなの家　事務員　三宅</td>
                              </tr>
                              <tr>
                                    <td style={td} width={'5%'}><b>連絡先電話番号</b></td> 
                                    <td style={td} width={'5%'}>092-406-8215</td>
                              </tr>

                              <tr>
                                    <td style={td} width={'5%'}><b>連絡先　E-mail</b></td> 
                                    <td style={td} width={'5%'}>info-ichizaki@tsubasa-f.or.jp</td>
                              </tr>
                        </tbody>
                  </table>
                  <br />
                  <Tag bordered={false} color="magenta" style={{ fontSize: '12px' }}>  ２　申請内容（申請額・請求額）</Tag>
                  <br /><br />
                  <Form>
                        <table style={styles}>
                              <tbody>
                                    <tr>
                                          <td style={td} width={'25%'} rowSpan={6}>区分・単価 <br />※該当する区分に「○」を記入してください。</td>
                                          <td style={td} colSpan={3}>居宅訪問型保育事業以外の場合</td>
                                    </tr>
                                    <tr>
                                          <td style={td} width={'8%'} align='center'>
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="○"
                                                      options={[
                                                      { value: '1', label: '○' },
                                                      { value: '2', label: ' ' }
                                                      ]} />
                                          </td>
                                          <td style={td} align='left' width={'25%'}>高圧受電施設</td>
                                          <td style={td} width={'10%'}>2,900 円</td>
                                    </tr>
                                    <tr>
                                          <td style={td} align='center'>
                                                <Select style={{ width: "60px" }} onChange={handleChange} defaultValue="○"
                                                      options={[
                                                      { value: '1', label: '○' },
                                                      { value: '2', label: ' ' }
                                                      ]} />
                                          </td>
                                          <td style={td}>都市ガス使用施設</td>
                                          <td style={td}>500 円</td>
                                    </tr>
                                    <tr>
                                          <td style={td} align='center'>
                                                <Select style={{ width: "60px" }} onChange={handleChange} options={[
                                                      { value: '1', label: '○' },
                                                      { value: '2', label: ' ' }
                                                ]} />
                                          </td>
                                          <td style={td}>バス送迎実施施設</td>
                                          <td style={td}>400 円</td>
                                    </tr>
                                    <tr>
                                          <td style={td} colSpan={3}>居宅訪問型保育事業の場合</td>
                                    </tr>
                                    <tr>
                                          <td style={td} align='center'>
                                                <Select style={{ width: "60px" }} onChange={handleChange} options={[
                                                      { value: '1', label: '○' },
                                                      { value: '2', label: ' ' }
                                                ]} />
                                          </td>
                                          <td style={td}>居宅訪問型保育事業</td>
                                          <td style={td}>400 円</td>
                                    </tr>
                                    <tr>
                                          <td style={td} width={'5%'}>令和５年７月１日利用定員数</td>
                                          <td style={td} align='center'>
                                                <Input style={{ width: "60px" }} defaultValue="94 人" />
                                          </td>
                                    </tr>
                                    <tr >
                                          <td style={td} width={'5%'}>申請額・請求額</td>
                                          <td style={td} align='center'>319,600 円</td>
                                          
                                    </tr>
                              </tbody>
                        </table>
                        <div>
                              <Row >
                                    <Col lg={{ span: 24, offset: 4 }}>
                                          <span style={{ color: 'red' }}>※申請額・請求額は、単価に利用定員数を乗じた額になります。</span>
                                    </Col>
                              </Row>
                        </div>
                  </Form>
                  <Tag bordered={false} color="magenta" style={{ fontSize: '12px' }}> ３　振込口座情報</Tag>
                  <br /><br />
                  <table  style={{ width: '90%' , margin: '0 auto' }} >
                        <tbody>
                              <tr>
                                    <td style={td} width={'55%'}><b>福岡市から支給する教育・保育給付費の口座情報を使用する場合は、右欄に
「はい」を記入してください。</b>
                                    </td> 
                                    <td style={td} width={'10%'}>
                                          <Select defaultValue="1" style={{ width:'100%' }}
                                                options={[
                                                      { value: '1', label: 'はい'},
                                                      { value: '2', label: 'いいえ'}
                                                ]}
                                          />
                                    </td>
                              </tr>
                              
                        </tbody>
                  </table>
                  <span className='ms-10'>「いいえ」の場合は、振込口座を下記に記入してください。</span>

                  <table  style={{ width: '90%' , margin: '0 auto' }} >
                        <tbody>
                              <tr>
                                    <td style={td} width={'25%'}><b>金融機関名</b> </td> 
                                    <td style={td} width={'20%'}>
                                          <Input style={{ width: "100%" }} defaultValue="" />
                                    </td>
                                    <td style={td} width={'25%'}><b>金融機関コード</b> </td> 
                                    <td style={td} width={'15%'}>
                                          <Input style={{ width: "100%" }} defaultValue="" />
                                    </td>
                              </tr>
                              <tr>
                                    <td style={td}><b>支店名</b> </td> 
                                    <td style={td}>
                                          <Input style={{ width: "100%" }} defaultValue="" />
                                    </td>
                                    <td style={td}><b>支店コード</b> </td> 
                                    <td style={td}>
                                          <Input style={{ width: "100%" }} defaultValue="" />
                                    </td>
                              </tr>
                              <tr>
                                    <td style={td}><b>預金種別</b> </td> 
                                    <td style={td}>
                                          <Input style={{ width: "100%" }} defaultValue="" />
                                    </td>
                                    <td style={td}><b>口座番号(右詰め)</b> </td> 
                                    <td style={td}>
                                          <Input style={{ width: "100%" }} defaultValue="" />
                                    </td>
                              </tr>
                              <tr>
                                    <td style={td} colSpan={2}><b>口座名義人(カタカナ)</b> </td> 
                                    <td style={td} colSpan={2}>
                                          <Input style={{ width: "100%" }} defaultValue="" />
                                    </td> 
                              </tr>
                              
                        </tbody>
                  </table>
                  <span className='ms-10' style={{ color: 'red' }}>※口座情報を入力した場合は、併せて通帳の写しも提出してください。</span> <br /><br />
                  <Tag bordered={false} color="magenta" style={{ fontSize: '12px' }}>  ４　誓約・同意事項</Tag>
                  <br /><br />
                  <Form>
                        <Row>
                              <Col offset={1}>
                                    <span>
                                          ・給付要件を満たしています。また、給付要件を確認するため、関係部署（福岡県警察、税務担当課）に照会することに同意します。<br />
                                          ・申請した支援金は、物価高騰により影響を受けた施設等の運営費にあてます。<br />
                                          ・虚偽が判明した場合や支給要件に該当しないことが判明した場合は、支援金の返還に応じます。<br />
                                          ・代表者、役員⼜は使⽤⼈その他の従業員若しくは構成員等が、福岡市暴⼒団排除 条例（平成 22 年福岡市条例第 30 号）第２条第２号に規定する暴⼒団員⼜は同条第１号に規定する暴⼒団⼜は暴⼒団員若しくは暴⼒団と密接な関係を有する者には該当せず、かつ将来にわたっても該当しないことを誓約します。また、上記の暴⼒団、暴⼒団員等が経営に事実上参画していないことを誓約します。<br />
                                          ・この申請書は、福岡市において支給決定をした後は、支援金の請求書として取扱います。
                                    </span>
                              </Col>
                        </Row>
                  </Form>


          
     
      </>
    );
};
export default FormAcc7_Tab1;

