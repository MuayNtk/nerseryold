"use client";

import React from 'react';
import {
  UserOutlined,
  HomeOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
  PlusOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Col, Input, Layout,  Pagination,  Row,  Select,  theme } from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import Link from 'next/link';
import FormClass from '@/app/ui/common/formclass';
import { FormMonth } from '@/app/ui/common/formdate';
import FormAge from '@/app/ui/common/formage';


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


const WeeklyPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const styles = {
    border: '1px solid #dddddd',
    width: '65%',
    margin: '0 auto',
  };
  const td = {
      border: '1px solid #dddddd',
      height: '30px',
      padding: '4px'
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
            <Row >
              <Col span={4}></Col>
              <Col span={1}  className="text-end"></Col>
                <Col span={1} className='mt-1'>全</Col>
                  <Col span={2}>
                    <Input/>
                </Col>
                <Col span={1} className='mt-1'>年</Col>
                  <Col span={2}>
                    <Input/>
                </Col>
                <Col span={1} className='mt-1'></Col>
                  <FormMonth/>
                <Col span={2} className='text-end mt-1' >週</Col>
                <Col span={2}>
                  <Select defaultValue="6"
                        options={[
                              { value: '1', label: '1'},
                              { value: '2', label: '2'},
                              { value: '3', label: '3'},
                              { value: '4', label: '4'},
                              { value: '5', label: '5'}
                        ]}
                  />
                </Col>
                <Col span={1}></Col>
                <Col className="text-end">
                    <Button type="primary" icon={<SearchOutlined />}>
                      Search
                    </Button>
                </Col>
            </Row>
            <br />
            <div className='text-end' style={{ width: '83%' }} >
                <Col className="text-end pt-5">
                    <a href="../student/student_9" >
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
                        <td style={td} align='center' width={'2%'} >全</td>
                        <td style={td} align='left' width={'15%'} ></td>
                        <td style={td} align='center' width={'5%'}></td>
                    </tr>
                    <tr>
                        <td style={td} align='center' >2024</td>
                        <td style={td} align='left' >( 週案と保育日誌(未満児))</td>
                        <td style={td}>
                            <div >  
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={td} align='center' >2024</td>
                        <td style={td} align='left' >( 週案と保育日誌(未満児))</td>
                        <td style={td}>
                            <div >
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>

                    </tr>

                    <tr>
                        <td style={td} align='center' >2023</td>
                        <td style={td} align='left' >( 週案と保育日誌(未満児))</td>
                        <td style={td}>
                            <div >
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={td} align='center' >2023</td>
                        <td style={td} align='left' >( 週案と保育日誌(未満児))</td>
                        <td style={td}>
                            <div >
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style={td} align='center' >2023</td>
                        <td style={td} align='left' >( 週案と保育日誌(未満児))</td>
                        <td style={td}>
                            <div >
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style={td} align='center' >2023</td>
                        <td style={td} align='left' >( 週案と保育日誌(未満児))</td>
                        <td style={td}>
                            <div >
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={  <EditOutlined /> } size="small" ></Button>
                                </Link>
                                    &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button>
                                </Link>

                                &nbsp;
                                <Link href={'/student/student_9'}>
                                    <Button  type="primary" icon={<CloseOutlined />} size="small" danger></Button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table> 
            <div className='mt-3 text-end ' style={{ width: '83%' }} >
              <Pagination defaultCurrent={1} total={10} size="small"/>
            </div>
            
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default WeeklyPage;
