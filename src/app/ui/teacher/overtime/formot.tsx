"use client"
import React from 'react';
import { Button, Col, Input, Row, Select, Table, Tag } from 'antd';
import { ColumnType } from 'antd/es/table';
import { SearchOutlined , PlusOutlined} from '@ant-design/icons';


const FormOtAdd: React.FC = () => {
  return (
      <>
            <Row className='mt-7'>
                  <Col span={6} offset={5}>
                        <Input  addonBefore="氏名"  />
                  </Col>
                  <Col span={6} offset={2}>
                        <Input  addonBefore="クラス名"   />
                  </Col> 
                 
            </Row>
            <Row className='mt-5'>
                  <Col span={6} offset={5}>
                        <Input  addonBefore="日付"  />
                  </Col>
            </Row>
            <Row className='mt-5'>
                  <Col span={6} offset={5}>
                        <Input  addonBefore="開始時間"   />
                        
                  </Col>
                  <Col span={2}>~</Col>
                  <Col span={6} >
                        <Input  addonBefore="終了日時"    />
                        
                  </Col>
            </Row>
            
            <div className='text-center' style={{ marginTop: '100px' }}>
                  <Button type="primary" >戻る</Button> 
                  <Button type="primary" className='ms-5'>修正</Button>
            </div>
           
      
      </>
  );
}

export default FormOtAdd;
