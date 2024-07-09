"use client";

import React , {useState} from 'react';
import { Col, ConfigProviderProps, Form, Input, Row, Select, Table, TableColumnsType } from 'antd';
import FormEra from '../common/formera';



const layout = {
    labelCol: { span: 6 },
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
  
  
  
  interface DataType {
    key: React.Key;
    name: string;
    low: string;
    much: string;
  }
  
  
  const columns: TableColumnsType<DataType> = [
  
    {
      title: '該  当  に',
      dataIndex: 'name',
      width: 300,
    },
    {
      title: '事   業   費',
      colSpan: 2,
      align: 'center',
      dataIndex: 'low',
      width: 150,
    },
    {
      title: 'much',
      colSpan: 0,
      align: 'center',
      dataIndex: 'much',
      width: 150,
     
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: '世代間交流等事業',
      low: '250千円以内',
      much: '100千円以内',
    },
    {
      key: '2',
      name: '異年齢児交流等事業',
      low: '250千円以内',
      much: '100千円以内',
    },
    {
      key: '3',
      name: '育児講座・育児と仕事両立支援',
      low: '250千円以内',
      much: '100千円以内',
    },
    {
      key: '4',
      name: '地域の特性に応じた保育需要への対応',
      low: '250千円以内',
      much: '100千円以内',
    },
  ];
  
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  };
  
const FormTab1: React.FC = () => {
const [selectionType] = useState<'checkbox' >('checkbox');

  return (
    
    <div>
            <Row>
              <Col span={2}></Col>
              <Col span={4} className="text-end pt-1 pe-2 ">あて先:</Col>
              <Col span={4} className=" pt-1 "> <b >福岡市</b> <span className='ms-5'>長</span></Col>
            </Row>

            <Row className="mt-5">
              <Col span={2}></Col>
              <Col span={4} className="text-end pt-1 pe-2 "><label>日時:</label></Col>
              <Col > <FormEra/></Col>
             
            </Row>

            <Row className='mt-5'>
              <Col span={2}></Col>
              <Col span={4} className="text-end pt-1 pe-2 ">保育所（園）名:</Col>
              <Col span={4} className=" pt-1 "> <b>渡部　圭子</b></Col>
            </Row>

            <Row className='mt-5'>
              <Col span={2}></Col>
              <Col span={4} className="text-end pt-1 pe-2 ">保育所番号:</Col>
              <Col span={4} className=" pt-1 "><b>渡部　史朗</b></Col>
            </Row>


            <Row className="mt-5">
              <Col span={2}></Col>
              <Col span={4} className="text-end pt-1 pe-2 ">法人名 代表者氏名</Col>
              <Col span={4} className=" pt-1 "><b>中川　康嘉</b></Col>
            </Row>


         
          <div >1. 事業実施の選定</div>
          <br/>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
               
                columns={columns}
                dataSource={data}
                bordered
                pagination={false}
                size="small"
                style={{ width: '80%' }}
                
            />


       
      
    </div>
    );
};
export default FormTab1;

