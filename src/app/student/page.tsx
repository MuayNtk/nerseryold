"use client";

import React from 'react';
import {
  UserOutlined,
  HomeOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
  PlusOutlined,
  CloseOutlined,
  BarChartOutlined,
  FormOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Col, Input, Layout,  Pagination,  Row,  Select,  theme } from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import Link from 'next/link';
import FormClass from '../ui/common/formclass';


const { Content } = Layout;

const bcList = [
  {
    href: '',
    title: <HomeOutlined />,
  },
  {
    href: '',
    title: (
      <>
        <UserOutlined />
        <span>ユーザー</span>
      </>
    ),
  },
  {title: 'List'},
];


const StudentPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const styles = {
    border: '1px solid #dddddd',
    width: '90%',
    margin: '0 auto',
  };
  const td = {
      border: '1px solid #dddddd',
      height: '30px',
      padding: '3px'
  };
  return (
    <>
      <SideLayout />
      <Layout>
        <NavBar />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb items={bcList} style={{ margin: '16px 0' }} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              textAlign: 'center'
            }}
          >
            <Row>
              <Col span={1}></Col>
                <Col span={2} className='mt-1'>氏名</Col>
                  <Col span={4}>
                    <Input/>
                </Col>
                <Col span={2} className='mt-1'>歳児</Col>
                  <Col span={2}>
                    <Select defaultValue="1"
                          options={[
                                { value: '0', label: '0'},
                                { value: '1', label: '1'},
                                { value: '2', label: '2'},
                                { value: '3', label: '3'},
                                { value: '4', label: '4'},
                                { value: '5', label: '5'},
                                { value: '6', label: '6'},
                          ]}
                    />
                </Col>
                <Col span={2} className='mt-1'>クラス名</Col>
                <Col span={3} className='text-start'> <FormClass/> </Col>
                <Col span={1}></Col>
                <Col className="text-end">
                    <Button type="primary" icon={<SearchOutlined />}>
                      Search
                    </Button>
                </Col>
            </Row>
            <br />
            <div className='text-end' style={{ width: '95%' }} >
                <Col className="text-end pt-1">
                    <a href="../student/student_1" >
                        <Button type="primary" icon={<PlusOutlined />} size="small">
                            ADD
                        </Button>
                    </a>
                </Col>
            </div>
            <br />
            <table style={styles}>
                <tbody>
                    <tr>
                        <td style={td} align='left' width={'15%'} >氏名</td>
                        <td style={td} align='center' width={'15%'}>歳児</td>
                        <td style={td} align='center' width={'15%'} >クラス名</td>
                        <td style={td} align='center' width={'20%'}>歳児保育経過記録</td>
                        <td style={td} align='center' width={'20%'}>保育所児童保育要録</td>
                        <td style={td} align='center' width={'20%'}></td>
                    </tr>
                    <tr>
                        <td style={td} align='left' >濱千代　智宏</td>
                        <td style={td}>1 歳児</td>
                        <td style={td}>くま</td> 
                        <td style={td}>
                            <Link href={'/student/student_2_1'}>
                                <Button  style={{ backgroundColor: '#ff7875' }} type="primary" size="small" icon={<BarChartOutlined />}></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                             <Link href={'/student/student_3'}>
                                <Button style={{ backgroundColor: '#73b5e9' }} type="primary" size="small" icon={<FormOutlined />} ></Button>
                            </Link>
                        </td> 

                        <td style={td}>
                            <div >  
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/liststudent'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={td} align='left'>濱千代　定</td>
                        <td style={td}>1 歳児</td>
                        <td style={td}>ぱんだ</td>
                        <td style={td}>
                            <Link href={'/student/student_2_1'}>
                                <Button  style={{ backgroundColor: '#ff7875' }} type="primary" size="small" icon={<BarChartOutlined />}></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                            <Link href={'/student/student_3'}>
                                <Button style={{ backgroundColor: '#73b5e9' }} type="primary" size="small" icon={<FormOutlined />} ></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                            <div >
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>

                    </tr>

                    <tr>
                        <td style={td} align='left'>立石　太平</td>
                        <td style={td}>1 歳児</td>
                        <td style={td}>ぱんだ</td>
                        <td style={td}>
                            <Link href={'/student/student_2_1'}>
                                <Button  style={{ backgroundColor: '#ff7875' }} type="primary" size="small" icon={<BarChartOutlined />}></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                             <Link href={'/student/student_3'}>
                                <Button style={{ backgroundColor: '#73b5e9' }} type="primary" size="small" icon={<FormOutlined />} ></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                            <div >
                            
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={td} align='left'>勝俣　悠生</td>
                        <td style={td}>1 歳児</td>
                        <td style={td}>ぱんだ</td>
                        <td style={td}>
                            <Link href={'/student/student_2_1'}>
                                <Button  style={{ backgroundColor: '#ff7875' }} type="primary" size="small" icon={<BarChartOutlined />}></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                             <Link href={'/student/student_3'}>
                                <Button style={{ backgroundColor: '#73b5e9' }} type="primary" size="small" icon={<FormOutlined />} ></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                            <div >
                            
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style={td} align='left'>勝俣　松代</td>
                        <td style={td}>1 歳児</td>
                        <td style={td}>かめ</td>
                        <td style={td}>
                            <Link href={'/student/student_2_1'}>
                                <Button  style={{ backgroundColor: '#ff7875' }} type="primary" size="small" icon={<BarChartOutlined />}></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                             <Link href={'/student/student_3'}>
                                <Button style={{ backgroundColor: '#73b5e9' }} type="primary" size="small" icon={<FormOutlined />} ></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                            <div >
                            
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style={td} align='left'>広田　木太郎</td>
                        <td style={td}>1 歳児</td>
                        <td style={td}>かめ</td>
                        <td style={td}>
                            <Link href={'/student/student_2_1'}>
                                <Button  style={{ backgroundColor: '#ff7875' }} type="primary" size="small" icon={<BarChartOutlined />}></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                             <Link href={'/student/student_3'}>
                                <Button style={{ backgroundColor: '#73b5e9' }} type="primary" size="small" icon={<FormOutlined />} ></Button>
                            </Link>
                        </td> 
                        <td style={td}>
                            <div >
                            
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_1'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table> 
            <div className='mt-3 text-end ' style={{ width: '96%' }} >
              <Pagination defaultCurrent={1} total={10} />
            </div>
            
          </div>
         
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default StudentPage;
