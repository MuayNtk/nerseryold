"use client";

import React, { useState } from 'react';
import {  Button, Col, DatePicker, DatePickerProps, Form, Input, Radio, RadioChangeEvent, Row, Select, Space, Table, Tag } from 'antd';
import { MinusCircleOutlined, PlusOutlined ,SaveOutlined} from '@ant-design/icons';
import FormEra from '../common/formera';
import axios from 'axios';

const layout = {
    labelCol: { span: 8 },
 
  };
  const { RangePicker } = DatePicker;
  
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

interface FormRegisterTeach1Props {
   
    value1: string;
}
const FormRegisterTeach1: React.FC<FormRegisterTeach1Props> = ({value1}) => {
    
    const [value, setValue] = useState(1);
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        try {
            console.log('Received values of form:', values);
            axios.post('http://localhost:5000/teacher', {
                address1: values.address1,
                address2: values.address2,
                age: values.age,
                gender: values.gender,
                remarks:  values.remarks,
                teacher_name1:  values.teacher_name1,
                teacher_name2:  values.teacher_name2,
                teacher_old_name:  values.teacher_old_name,
                transfer_date:  values.transfer_date,
                type_work:  values.type_work,
                access_token : "9e84ea39c4161dd342498b2a8b3dbf40ce5d0dfa45dcc6a986e4456c1d04db7e"
              })
              
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            // ดำเนินการต่อไปกับข้อมูลที่ได้รับหลังจากการตรวจสอบ
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    const onChangeRadio = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    
    const [dataSource, setDataSource] = useState<any[]>([{ key: '0', first: '', Era: '',hr1: '', hr2: '', hr3: '',}]);
    const handleDelete = (index: number) => {
        const newData = [...dataSource];
        newData.splice(index, 1);
        setDataSource(newData);
      };
    const handleAdd = () => {
        const newData = {
          key: dataSource.length.toString(),
          first: '',
          Era: '',
          hr1: '',
          hr2: '',
          hr3: '',
    
        };
        setDataSource([...dataSource, newData]);
      };
      
    return (
        
            <div>
                <Form form={form} onFinish={onFinish} {...layout} >     
                    <Row className='mt-3'>
                        <Col span={12} >
                            <Form.Item label="ふりがな" name="teacher_name1" style={{ marginTop: '1px' }}>
                                <Input    />
                            </Form.Item>
                        </Col>
                        <Col span={1} >
                            <Form.Item hidden name="type_work"initialValue={value1}>
                                <Input />
                            </Form.Item>   
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                        <Col span={12}>
                            <Form.Item label="氏名" name="teacher_name2"  >
                                <Input placeholder="" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                        <Col span={12}>
                            <Form.Item label="旧姓" name="teacher_old_name">
                                <Input placeholder=""/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row  style={{ marginTop: '-10px' }}>
                        <Col span={4} className="text-end pt-1 pe-2"><label>生 年 月 日 :</label></Col>
                        <FormEra/>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>

                        <Col span={2}></Col>
                        <Col span={6}>
                            <Form.Item label="性別" name="gender">
                                <Radio.Group onChange={onChangeRadio} value={value}>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="年齢" name="age">
                                <Input placeholder=""/>
                            </Form.Item>
                        </Col>
                    </Row>
                    
                    <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="現住所" name="address1">
                                    <Input.TextArea />
                                </Form.Item>
                            </Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="現住所 (住所変更)" name="address2">
                                    <Input.TextArea placeholder=""/>
                                </Form.Item>
                            </Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                        
                        <Col span={2}></Col>
                        <Col span={6}>
                            <Form.Item label="異動日" name="transfer_date">
                                <DatePicker />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="備考" name="remarks">
                                    <Input.TextArea placeholder=""/>
                                </Form.Item>
                            </Col>
                    </Row>
                    <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>学歴</Tag>
                    <br /> 
                        <Row className='mt-2'>
                            <Col span={12} >
                                <Form.Item label="学校名" name="school_name" >
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="学部・学科名" name="department_name">
                                    <Input placeholder=""/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="修学期間" name="study_period">
                                    <DatePicker placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="卒業・中退等" name="graduation_dropout">
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>
                </Form>
               
                <br />
                

                <div >
                    <Tag bordered={false} color="magenta"> <b>資格・免許等</b></Tag>
                    <br /><br />
                    <Form
                        form={form} onFinish={onFinish} 
                        style={{ maxWidth: 600 }}
                        autoComplete="off"
                        initialValues={{
                            users: [{ first: '保育士' }] // กำหนดให้มีเพียงชุดเดียวในเริ่มต้น
                        }}
                    >
                        <Form.List name="users">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item {...restField} name={[name, 'first']} label='名称'>
                                                <Input placeholder="ชื่อ" style={{ width: '200px' }}/>
                                            </Form.Item>
                                            <Form.Item {...restField} name={[name, 'last']} label='取得年月日'>
                                                <DatePicker onChange={onChange} style={{ width: '200px' }}/>
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <div className='text-end'>
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} style={{ background: '#91caff'}}>
                                                追加
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </>
                            )}
                        </Form.List>
                    </Form>
                </div>


                <div >
                <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>賞　罰</Tag>
                 
                    <br /><br />
                    <Form form={form} onFinish={onFinish}  {...layout}   style={{ maxWidth: 800 }}  >
                        
                       
                        <Row style={{ marginTop: '-10px' }}>
                            <Col span={12} >
                                <Form.Item label="年月" name="reward_punishment_date" >
                                    <DatePicker onChange={onChange} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="賞罰事項" name="reward_punishment">
                                    <Input.TextArea placeholder=""/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="授与者" name="conferrer">
                                    <Input placeholder=""/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div >
                
                    <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>履　歴</Tag>
                    <br /><br />
                    <Form  form={form} onFinish={onFinish} >
                        <Table
                            dataSource={dataSource}
                            columns={[
                                {
                                    title: '年　月　日',
                                    dataIndex: 'first',
                                    width: '225px',
                                    render: (text: any, record: any, index: number) => (
                                        <Form.Item name={['dataSource', index, 'dete']} >
                                            <RangePicker />
                                        </Form.Item>
                                    
                                    ),
                                },
                                {
                                    title: '勤務年数',
                                    dataIndex: 'Era',
                                    width: '120px',
                                    render: (text: any, record: any, index: number) => (
                                        <Form.Item name={['dataSource', index, 'service']} initialValue={'保育士 2年 0か月'} >
                                            <Input.TextArea  />
                                        </Form.Item>
                                    
                                    ),
                                },
                                {
                                    title: '任免その他',
                                    dataIndex: 'hr1',
                                    render: (text: any, record: any, index: number) => (
                                        <Form.Item name={['dataSource', index, 'contract']} initialValue={'たまプラーザのぞみ保育園神奈川県横浜市・認可'}>
                                            <Input.TextArea />
                                        </Form.Item>
                                    ),
                                },
                                {
                                    title: '職種',
                                    dataIndex: 'hr2',
                                    width: '130px',
                                    render: (text: any, record: any, index: number) => (
                                        <Form.Item name={['dataSource', index, 'occupation']} initialValue={'保育士（正）'}>
                                            <Input  />
                                        </Form.Item>
                                      
                                    ),
                                },
                                {
                                    title: '発令者',
                                    dataIndex: 'hr3',
                                    width: '100px',

                                    render: (text: any, record: any, index: number) => (
                                        
                                        <Form.Item name={['dataSource', index, 'hr3']} initialValue={'取締役'}>
                                            <Input  />
                                        </Form.Item>
                                    ),
                                },
                                {
                                    title: '',
                                    dataIndex: 'operation',
                                    render: (_: any, record: any, index: number) => (
                                        <MinusCircleOutlined onClick={() => handleDelete(index)} />
                                    ),
                                },
                            ]}
                                pagination={false}
                                rowClassName={() => 'editable-row'}
                        />
                        <Button onClick={handleAdd} type="dashed" style={{ marginTop: 16 , background: '#91caff'}} icon={<PlusOutlined />}>
                            追加
                        </Button>
                     </Form>
                </div>
                <br /><br />
                <div >
                
                    <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>基本給（特殊業務手当・処遇改善含まず）</Tag>
                    <br /><br />
                    <Form
                        form={form} onFinish={onFinish} 
                        style={{ maxWidth: 600 }}
                        autoComplete="off"
                        initialValues={{
                            users1: [{ first1: '', last1: '417000' }] // กำหนดให้มีเพียงชุดเดียวในเริ่มต้น
                        }}
                    >
                        <Form.List name="users1">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item {...restField} name={[name, 'first1']} label='年月'>
                                                <Input placeholder=""  />
                                            </Form.Item>
                                            <Form.Item {...restField} name={[name, 'last1']} label='本俸額'>
                                                <Input placeholder="" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <div className='text-end'>
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} style={{ background: '#91caff'}}>
                                                追加
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </>
                            )}
                        </Form.List>
                    </Form>
                    
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="primary"  onClick={() => form.submit()}  htmlType="submit" icon={<SaveOutlined />} style={{ backgroundColor: '#33c033', borderColor: '#33c033' }}>
                        Save
                    </Button>
                </div>
               
            </div>
         
    );
};

export default FormRegisterTeach1;
