"use client";

import React, { useState } from 'react';
import { Button, Col, ConfigProviderProps, Divider, Form, Input, Row, Tabs} from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  SaveOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout,  theme} from 'antd';
import SideLayout from '@/app/ui/sidelayout';
import NavBar from '@/app/ui/navbar';
import FootLayout from '@/app/ui/footlayout';
import FormStudent6 from '@/app/ui/student/formstudent6';
import FormStudent6_1 from '@/app/ui/student/formstudent6_1';
import FormStudent6_2 from '@/app/ui/student/formstudent6_2';
import FormStudent6_3 from '@/app/ui/student/formstudent6_3';
import FormStudent6_4 from '@/app/ui/student/formstudent6_4';
import FormStudent6_5 from '@/app/ui/student/formstudent6_5';



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
  {title: 'List1'},
];

type SizeType = ConfigProviderProps['componentSize'];
const StudentApp: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
 
  const [size] = useState<SizeType>('small');
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
            }}
          >
             <b>全体的な計画</b>
                <Row className='mt-2'>
                    <Col span={3} className='ms-10 ' ><label>保育の目標</label></Col>
                    <Col span={6}>
                        <Input.TextArea />
                    </Col>
                    <Col span={4} className='ms-10'><label>家庭・地域 との連携</label></Col>
                    <Col span={6}>
                        <Input.TextArea />
                    </Col>
                </Row>
        
            <br />
            <Tabs defaultActiveKey="1" type="card" size={size}>

                <Tabs.TabPane tab="0 歳" key="1">
                  <FormStudent6/>
                    {/* <div className="flex justify-end">
                      
                    </div> */}
                </Tabs.TabPane>

                <Tabs.TabPane tab="1 歳" key="2">
                  <FormStudent6_1/>
                </Tabs.TabPane>

                <Tabs.TabPane tab="2 歳" key="3">
                  <FormStudent6_2/>
                </Tabs.TabPane>

                <Tabs.TabPane tab="3 歳" key="4">
                  <FormStudent6_3/>
                </Tabs.TabPane>

                <Tabs.TabPane tab="4 歳" key="5">
                  <FormStudent6_4/>
                </Tabs.TabPane>

                <Tabs.TabPane tab="5 歳" key="6">
                  <FormStudent6_5/>
                </Tabs.TabPane>

              </Tabs>
              <Divider />
              <Form name="wrap"  layout="vertical">
                <Row>
                    <Col  lg={{ span: 6, offset: 1 }}>
                        <Form.Item label="安全 健康及び " name="input11" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col  lg={{ span: 6, offset: 1 }}>
                        <Form.Item label="子育て支援 " name="input12" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col  lg={{ span: 6, offset: 1 }}>
                        <Form.Item label="連携小学校との " name="input13" >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>


                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button type="primary" htmlType="submit" icon={<SaveOutlined />} style={{ backgroundColor: '#33c033', borderColor: '#33c033' }}>
                        Save
                    </Button>
                </div>
              </Form>
             
          </div>
        </Content>
        <FootLayout />
      </Layout>
    </>
  );
};

export default StudentApp;
