"use client";

import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import {  Col, DatePicker, Form, Input, Row, Select,  Tag, message, Upload } from 'antd';
import type { UploadProps } from 'antd';
import FormEra from '../../common/formera';

const layout = {
      labelCol: { span: 12 },
};

const { Dragger } = Upload; 
const props: UploadProps = {
      name: 'file',
      multiple: true,
      action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
      },
    };

const FormAcc4: React.FC = () => {
      const styles = {
            border: '1px solid #dddddd',
            width: '82%',
            margin: '0 auto',
        };
        const td = {
            border: '1px solid #dddddd',
            height: '40px',
            padding: '5px'
        };
  
    return (
      
            <div>
                  <Form {...layout}>
                        <Row>
                              <Col span={2}></Col>
                              <Col span={2} className='text-end mt-1' ><label>日付 : </label></Col>
                              <Col className='ms-2'></Col>
                              <FormEra/>
                        </Row>
                        <Row className='mt-2'>
                              <Col span={2}></Col>
                              <Col span={2} className='text-end mt-1' ><label>事業者名 : </label></Col>
                              <Col className='ms-2'></Col>
                              <Col className='mt-1'><b>社会福祉法人　つばさ福祉会</b></Col>
                        </Row>
                        <Row className='mt-2'>
                              <Col span={2}></Col>
                              <Col span={2} className='text-end mt-1' ><label>代表者名 : </label></Col>
                              <Col className='ms-2'></Col>
                              <Col className='mt-1'><b>理事長　渡部　圭子</b></Col>
                        </Row>
                  </Form>    
                  <div>
                        <br />
                        <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>Ⅰ　総括表</Tag>
                              <br /><br />
                        <Form>
                              <Row className='mt-2 ms-4'>
                                    <Col span={1}></Col>
                                    <Col span={2} className='text-end mt-1' ><label>施設名 : </label></Col>
                                    <Col className='ms-2'></Col>
                                    <Col className='mt-1'><b>いちざきみんなの家</b></Col>
                              </Row>
                              <Row className='mt-2 ms-4'>
                                    <Col span={1}></Col>
                                    <Col span={2} className='text-end mt-1' ><label>所在地 : </label></Col>
                                    <Col className='ms-2'></Col>
                                    <Col className='mt-1'><b>福岡市南区市崎1丁目15番11号</b></Col>
                              </Row>
                        </Form>    
                  </div>
                  <br />
                  <div>
                        <table style={styles}>
                              <tbody> {/* เพิ่ม tbody เพื่อให้โค้ดของคุณถูกต้องตามมาตรฐาน HTML */}
                                    <tr>
                                          <td style={td} width={'3%'}></td>
                                          <td style={td} align='center' width={'6%'}>申請の有無</td>
                                          <td style={td} align='center' width={'20%'}>加算・調整項目</td>
                                          <td style={td} align='center' width={'10%'} >適用年月 又は適用年度</td>
                                          <td style={td} align='center' width={'8%'}>備考</td>
                                    </tr>
                                    <tr>
                                          <td style={td} width={'5%'} colSpan={5}  align='left'>基本加算部分</td>
                                          
                                    </tr>
                                    <tr>
                                          <td style={td} >1</td>
                                          <td style={td} align='center' >○</td>
                                          <td style={td} align='left'>休日保育加算</td>
                                          <td style={td}>
                                                <Input  className='text-center' value={'R3.4～R4.3'}></Input>
                                          </td>
                                          <td style={td}>
                                                <Input ></Input>
                                          </td>
                                    </tr>
                                    <tr>
                                          <td style={td} >1</td>
                                          <td style={td} align='center' >○</td>
                                          <td style={td} align='left'>チーム保育推進加算</td>
                                          <td style={td}>
                                                <Input  className='text-center' value={'R3.4～R4.3'}></Input>
                                          </td>
                                          <td style={td}>
                                                <Input  className='text-center' ></Input>
                                          </td>
                                    </tr>
                                    <tr>
                                          <td style={td} width={'5%'} colSpan={5}  align='left'>特定加算部分</td>
                                    </tr>
                                    <tr>
                                          <td style={td} >1</td>
                                          <td style={td} align='center' >○</td>
                                          <td style={td} align='left'>高齢者等活躍促進加算</td>
                                          <td style={td} >
                                                <Input className='text-center' value={'Ｒ３年度'}></Input>
                                          </td>
                                          <td style={td}>
                                                <Input className='text-center'></Input>
                                          </td>
                                    </tr>
                                    <tr>
                                          <td style={td} >1</td>
                                          <td style={td} align='center' >○</td>
                                          <td style={td} align='left'>施設機能強化推進費加算</td>
                                          <td style={td}>
                                                <Input  className='text-center' value={'Ｒ３年度'}></Input>
                                          </td>
                                          <td style={td}>
                                                <Input className='text-center'></Input>
                                          </td>
                                    </tr>
                              </tbody>
                        </table>
                        <div className='text-left'>
                              <Row>
                                    <Col lg={{ span: 24, offset: 2 }}>
                                          <span style={{ color: 'red' }}>※　加算・調整項目のうち申請した項目について、「申請の有無」欄に〇印を記載すること。</span>
                                    </Col>
                              </Row>
                        </div>
                  </div>
                  <br />
                  <div>
                        <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>Ⅱ　個票</Tag>
                        <br /><br />
                        <Form {...layout}>
                              <Row>
                                    <Col lg={{ offset: 2 }}>
                                          <Tag bordered={false} color="magenta"> <b>1　休日保育加算</b></Tag>
                                          
                                    </Col>
                              </Row>
                              <Row>
                                    <Col span={7}>
                                          <span>【実績報告書】</span>
                                    </Col>
                              </Row>
                        </Form>
                       
                        <br />
                        <table style={styles}>
                              <tbody> {/* เพิ่ม tbody เพื่อให้โค้ดของคุณถูกต้องตามมาตรฐาน HTML */}
                                    <tr>
                                          <td style={td} width={'6%'}>申請時の年間延べ利用子ども数 (見込)※1</td>
                                          <td style={td} align='center' width={'6%'}>年間延べ利用子ども数 (実績)※2</td>
                                          <td style={td} align='center' width={'6%'}>年間実利用児童数※3</td>
                                          <td style={td} align='center' width={'7%'} >うち平日は他の施設・事業所を利用する実利用児童数※4</td>
                                          <td style={td} align='center' width={'6%'}>加算実施月数</td>
                                    </tr>
                                   
                                    <tr>
                                          <td style={td} >
                                                <Input style={{textAlign: 'right'}} value={'1,100  人'}  />
                                          </td>
                                          <td style={td} align='center' >
                                                <Input style={{textAlign: 'right'}} value={'1,138  人'}  />
                                          </td>
                                          <td style={td} align='left'>
                                                <Input style={{textAlign: 'right'}} value={'52  人'}  />
                                          </td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}} value={'52  人'}  />
                                          </td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}} value={'12  人'}  />
                                          </td>
                                    </tr>
                                    
                              </tbody>
                        </table>
                        <div className='text-left'>
                              <Row >
                                    <Col lg={{ span: 22, offset:2 }}>
                                    <span>※1 認定を受けた年間延べ利用子ども数（見込）を記入すること。延べ利用子ども数は１人の子どもが年に30日利用した場合は30人と計算すること。</span><br />
                                    <span>※2 実際の年間延べ利用子ども数の実績を記入すること。</span><br />
                                    <span>※3 年度中に休日保育を利用した実利用子ども数を記入すること。毎週利用している子どもも、年に１度しか利用しない子どももそれぞれ１人と記入する。</span><br />
                                    <span>※4 ※3のうち、平日は他の施設・事業所を利用する子どもの数を記入すること。</span>
                                    </Col>
                              </Row>
                        </div>
                  </div>


                  <div>
                        <br />
                        <Row>
                              <Col lg={{ offset: 2 }}>
                                    <Tag bordered={false} color="magenta"> <b>2　チーム保育推進加算</b></Tag>
                                    
                              </Col>
                        </Row>

                        <br />
                        <div>
                              <Form {...layout}>
                                    <Row>
                                          <Col span={6} lg={{ offset: 1 }}>
                                                <Form.Item label='加算額(実績)Ａ'>
                                                      <Input  className='text-right' value={'6,578,000 円'} ></Input>
                                                </Form.Item>
                                          </Col>
                                          <Col span={6} >
                                                <Form.Item label='実支出額Ｂ'>
                                                      <Input  className='text-right' value={'6,476,000 円'}></Input>
                                                </Form.Item>
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col span={6} lg={{ offset: 1 }}>
                                                <Form.Item label='加算額の残額(Ａ－Ｂ)'>
                                                      <Input className='text-right' value={'102,000 円'}></Input>
                                                </Form.Item>
                                          </Col>
                                          <Col span={1}></Col>
                                          <Col span={6}>
                                                <Form.Item label='(残額が生じた理由)'>
                                                      <Input   className='text-right' ></Input>
                                                </Form.Item>
                                          </Col>
                                    </Row>
                              </Form>
                        </div>
                        <div>
                              <Form >
                                    <Row>
                                          <Col span={3} className='text-end ms-5'>
                                                <span>(残額の使途)</span>
                                          </Col>
                                          <Col span={11} >
                                                <span style={{ color: 'red' }}>（記載例）・○年○月に全ての職員に対し、一時金として支給など</span>
                                                
                                          </Col>
                                    </Row>
                                    <Row>
                                          <Col span={4}></Col>
                                          <Col span={10} >
                                                <Input value={'令和４年３月に全ての職員に対し、一時金として支給'}></Input>
                                          </Col>
                                    </Row>
                              </Form>
                        </div>
                  </div>
                  <div>
                        <Row className='mt-2'>
                              <Col lg={{ offset: 2 }}>
                                    <Tag bordered={false} color="magenta"> <b>3　高齢者等活躍促進加算</b></Tag>
                                    
                              </Col>
                        </Row>
                        <Row>
                              <Col lg={{ offset: 3 }}>
                                    <span>【高齢者等活躍促進加算職員】</span>
                              </Col>
                        </Row>
                              <br />
                        <table style={styles}>
                              <tbody> {/* เพิ่ม tbody เพื่อให้โค้ดของคุณถูกต้องตามมาตรฐาน HTML */}
                                    <tr>
                                          <td style={td} width={'5%'}>氏名</td>
                                          <td style={td} align='center' width={'5%'}>年齢</td>
                                          <td style={td} align='center' width={'6%'}>雇用契約期間</td>
                                          <td style={td} align='center' width={'6%'}>年間総雇用時間数</td>
                                          <td style={td} align='center'  colSpan={2}>備考<span style={{ color: 'red' }}>※1</span></td>
                                    </tr>
                                   
                                    <tr>
                                          <td style={td} >
                                                <Input style={{textAlign: 'right'}} value={'天神　一郎'} />
                                          </td>
                                          <td style={td} align='center' >
                                                <Input style={{textAlign: 'right'}} value={'６７歳'}  />
                                          </td>
                                          <td style={td} align='left'>
                                                <Input style={{textAlign: 'right'}} value={'R3.4～R4.3'}  />
                                          </td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}} value={'580 時間'}  />
                                          </td>
                                          <td style={td}  width={'6%'}>
                                                <Select defaultValue="高齢者" style={{ width: '100%' }}
                                                      options={[
                                                            { value: '1', label: '高齢者' },
                                                            { value: '2', label: '身体障害者' },
                                                            { value: '3', label: '知的障害者' },
                                                            { value: '4', label: '精神障害者' },
                                                            { value: '5', label: '母子家庭の母' },
                                                            { value: '6', label: '父子家庭の父' },
                                                            { value: '7', label: '寡婦' },
                                                      ]}
                                                />
                                          </td>
                                          <td style={td}  width={'5%'}>
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                    </tr>
                                    <tr>
                                          <td style={td} >
                                                <Input style={{textAlign: 'right'}} />
                                          </td>
                                          <td style={td} align='center' >
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                          <td style={td} align='left'>
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                          <td style={td}  width={'6%'}>
                                                <Select defaultValue="" style={{ width: '100%' }}
                                                      options={[
                                                            { value: '1', label: '高齢者' },
                                                            { value: '2', label: '身体障害者' },
                                                            { value: '3', label: '知的障害者' },
                                                            { value: '4', label: '精神障害者' },
                                                            { value: '5', label: '母子家庭の母' },
                                                            { value: '6', label: '父子家庭の父' },
                                                            { value: '7', label: '寡婦' },
                                                      ]}
                                                />
                                          </td>
                                          <td style={td}  width={'5%'}>
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                    </tr>
                                    <tr>
                                          <td style={td} >
                                                <Input style={{textAlign: 'right'}} />
                                          </td>
                                          <td style={td} align='center' >
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                          <td style={td} align='left'>
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                          <td style={td}  width={'6%'}>
                                                <Select defaultValue="" style={{ width: '100%' }}
                                                      options={[
                                                            { value: '1', label: '高齢者' },
                                                            { value: '2', label: '身体障害者' },
                                                            { value: '3', label: '知的障害者' },
                                                            { value: '4', label: '精神障害者' },
                                                            { value: '5', label: '母子家庭の母' },
                                                            { value: '6', label: '父子家庭の父' },
                                                            { value: '7', label: '寡婦' },
                                                      ]}
                                                />
                                          </td>
                                          <td style={td}  width={'5%'}>
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                    </tr>
                                    <tr>
                                          <td style={td} >
                                                <Input style={{textAlign: 'right'}} />
                                          </td>
                                          <td style={td} align='center' >
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                          <td style={td} align='left'>
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                          <td style={td}  width={'6%'}>
                                                <Select defaultValue="" style={{ width: '100%' }}
                                                      options={[
                                                            { value: '1', label: '高齢者' },
                                                            { value: '2', label: '身体障害者' },
                                                            { value: '3', label: '知的障害者' },
                                                            { value: '4', label: '精神障害者' },
                                                            { value: '5', label: '母子家庭の母' },
                                                            { value: '6', label: '父子家庭の父' },
                                                            { value: '7', label: '寡婦' },
                                                      ]}
                                                />
                                          </td>
                                          <td style={td}  width={'5%'}>
                                                <Input style={{textAlign: 'right'}}  />
                                          </td>
                                    </tr>
                                    <tr>
                                          <td style={td} >計 </td>
                                          <td style={td} align='center'>―</td>
                                          <td style={td} align='center'>―</td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}} value={'580 時間'}  />
                                          </td>
                                          <td style={td}  width={'6%'}>―</td>
                                          <td style={td}  width={'5%'}>―</td>
                                    </tr>
                                    
                                    
                              </tbody>
                        </table>
                        


                  </div>

                  <div>
                        <br />
                        <Row>
                              <Col lg={{ offset: 2 }}>
                                    <Tag bordered={false} color="magenta"> <b>4　施設機能強化推進費加算</b></Tag>
                                    
                              </Col>
                        </Row>
                        <Row>
                              <Col lg={{ offset: 3 }}>
                                    <span>【事業実施実績額】    （円）</span>
                              </Col>
                        </Row>
                              <br />
                        <table style={styles}>
                              <tbody> {/* เพิ่ม tbody เพื่อให้โค้ดของคุณถูกต้องตามมาตรฐาน HTML */}
                                    <tr>
                                          <td style={td} width={'15%'} colSpan={3}>事業内容</td>
                                          <td style={td} align='center' width={'15%'} colSpan={3}>支出済額</td>
                                       
                                    </tr>
                                    <tr>
                                          <td style={td} width={'15%'} >実施時期</td>
                                          <td style={td} align='center' width={'20%'} >内容</td>
                                          <td style={td} align='center' width={'15%'} >総事業費</td>
                                          <td style={td} align='center' width={'15%'} >科目</td>
                                          <td style={td} align='center' width={'15%'} >金額</td>
                                          <td style={td} align='center' width={'15%'} >積算内訳</td>
                                       
                                    </tr>
                                   
                                    <tr>
                                          <td style={td} >
                                                <Input style={{textAlign: 'right'}} value={'R4年2月～R4年3月'} />
                                          </td>
                                          <td style={td} align='center' >
                                                <Input style={{textAlign: 'right'}} value={'災害時における避難器具等の充実'}  />
                                          </td>
                                          <td style={td} align='left'>
                                                <Input style={{textAlign: 'right'}} value={'186,000円'}  />
                                          </td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}} value={'保育材料費'}  />
                                          </td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}} value={'186,000円'}  />
                                          </td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}}  value={'186,000円'} />
                                          </td>
                                    </tr>

                                    <tr>
                                          <td style={td} >―</td>
                                          <td style={td} align='center' >―</td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}} value={'計  186,000'}  />
                                          </td>
                                          <td style={td} align='center'>―</td>
                                          <td style={td}>―</td>
                                          <td style={td}>
                                                <Input style={{textAlign: 'right'}}  value={'計  186,000'} />
                                          </td>
                                    </tr>
                              </tbody>
                        </table>
                  </div>
                  <br /><br />
                  <div  style={{ width: '450px', height: '200px' }} >
                        <Form>
                              <Row>
                                    <Col lg={{ offset: 5 }}>
                                          <Dragger {...props} >
                                                <p className="ant-upload-drag-icon">
                                                      <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                <p className="ant-upload-hint">ここに領収書の写しを張り付ける</p>
                                          </Dragger>
                                    </Col>
                              </Row>
                        </Form>
                        
                  </div>
            </div>
        

    );
  };               
export default FormAcc4;

