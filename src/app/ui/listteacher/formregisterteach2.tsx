"use client";

import React, { useState } from 'react';
import {  Button, Col, DatePicker, DatePickerProps, Form, Input, Radio, RadioChangeEvent, Row, Select, Space, Table, Tag } from 'antd';
import { MinusCircleOutlined, PlusOutlined,SaveOutlined } from '@ant-design/icons';
import FormEra from '../common/formera';

const layout = {
    labelCol: { span: 8 },
    // wrapperCol: { span: 16 },
  };

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

interface FormRegisterTeach2Props {
    value2: string;
}
const FormRegisterTeach2: React.FC<FormRegisterTeach2Props> = ({value2}) => {

    const [value, setValue] = useState(1);

    const onChangeRadio = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
      };

      const [dataSource, setDataSource] = useState<any[]>([{ key: '0', first: '', Era: '',hr1: '', hr2: '', hr3: '', hr4: '', hr5: '' }]);
      const [dataSource2, setDataSource2] = useState<any[]>([{ key: '0', first1: '', first2: '', first3: '', first4: '', first5: '', first6: '' }]);
    
      const handleDelete = (index: number) => {
        const newData = [...dataSource];
        newData.splice(index, 1);
        setDataSource(newData);
      };
    
      const handleDelete2 = (index: number) => {
        const newData2 = [...dataSource2];
        newData2.splice(index, 1);
        setDataSource2(newData2);
      };
    
      const handleAdd = () => {
        const newData = {
          key: dataSource.length.toString(),
          first: '',
          Era: '',
          hr1: '',
          hr2: '',
          hr3: '',
          hr4: '',
          hr5: '',
        };
        setDataSource([...dataSource, newData]);
      };
    
      const handleAdd2 = () => {
        const newData2 = {
          key: dataSource.length.toString(),
          first1: '',
          first2: '',
          first3: '',
          first4: '',
          first5: '',
          first6: '',
        };
        setDataSource2([...dataSource2, newData2]);
      };


   
      
    return (
        
            <div>
                <Form  {...layout}   style={{ maxWidth: 800 }} 
                    initialValues={{
                        input1: 'やました　りえ',
                        input2: '山下　理恵',
                        input2_3: ' 33 ',
                        input3: '福岡県太宰府市坂本2-4-32-B305'

                    }}
                
                
                >
                
                    
                    <br /> 
                 
                    <Row style={{ marginTop: '-10px' }}>
                        <Col span={12} >
                            <Form.Item label="ふりがな" name="input1" >
                                <Input placeholder=""/>
                            </Form.Item>
                        </Col>
                        <Col span={1} >
                            <Form.Item hidden name="Parttime"initialValue={value2}>
                                <Input  />
                            </Form.Item>   
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                        <Col span={12}>
                            <Form.Item label="氏名" name="input2">
                                <Input placeholder=""/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                        <Col span={12}>
                            <Form.Item label="旧姓" name="input2_1">
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
                            <Form.Item label="性別" name="gender ">
                                <Radio.Group onChange={onChangeRadio} value={value}>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="年齢" name="input2_3">
                                <Input placeholder=""/>
                            </Form.Item>
                        </Col>
                    </Row>
                    
                    
                    <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="現住所" name="input3">
                                    <Input.TextArea  placeholder=""/>
                                </Form.Item>
                            </Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="現住所 (住所変更)" name="input4">
                                    <Input.TextArea placeholder=""/>
                                </Form.Item>
                            </Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                        
                        <Col span={2}></Col>
                        <Col span={6}>
                            <Form.Item label="異動日" name="input5">
                                <DatePicker onChange={onChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="備考" name="input">
                                    <Input.TextArea placeholder=""/>
                                </Form.Item>
                            </Col>
                    </Row>
                   
                </Form>
                <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>学歴</Tag>
                <br />
                <div>
                    <Form  {...layout}   style={{ maxWidth: 800 }} 
                        initialValues={{
                            input6: '中村学園大学',
                            input7: '短期大学部幼児保育学科',
                            input8: ' H19年4月～H21年3月 '
    
                        }}
                    
                    >
                        
                        <br /> 
                        <Row style={{ marginTop: '-10px' }}>
                            <Col span={12} >
                                <Form.Item label="学校名" name="input6" >
                                    <Input placeholder=""/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="学部・学科名" name="input7">
                                    <Input placeholder=""/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '-10px' }}>
                            <Col span={12}>
                                <Form.Item label="修学期間" name="input8">
                                    <Input placeholder=""/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    
                </div>

                <div >
                    <Tag bordered={false} color="magenta"> <b>資格・免許等</b></Tag>
                    <br /><br />
                    <Form
                       
                        name="dynamic_form_nest_item1"
                        onFinish={onFinish}
                        style={{ maxWidth: 600 }}
                        autoComplete="off"
                        initialValues={{
                            users: [{ first: '', last: '' }] // กำหนดให้มีเพียงชุดเดียวในเริ่มต้น
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
                
                <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>現施設での勤務履歴</Tag>
                <div style={{ padding: 10}}>
                     <Table
                        dataSource={dataSource}
                       
                        columns={[
                            {
                                title: '年月',
                                dataIndex: 'first',
                                width: '225px',
                                render: (text: any, record: any, index: number) => (
                                    <>
                                        {/* <RangePicker /> */}
                                        <DatePicker />
                                        <DatePicker />
                                    </>
                                   
                                ),
                            },
                            {
                                title: '年月',
                                dataIndex: 'Era',
                                render: (text: any, record: any, index: number) => (
                                    <>
                                      
                                        <Select
                                            defaultValue="Showa"
                                            style={{ width: 60 }}
                                            onChange={handleChange}
                                            options={[
                                            { value: 'Showa', label: '昭' },
                                            { value: 'Heisei', label: '平' },
                                            { value: 'Reiwa', label: '令' },
                                        
                                            ]}
                                        />

                                       
                                    </>
                                   
                                ),
                            },
                            {
                                title: '勤務時間',
                                dataIndex: 'hr1',
                                render: (text: any, record: any, index: number) => (

                                    <Select
                                        defaultValue="3"
                                        onChange={handleChange}
                                        options={[
                                        { value: '1', label: '①４時間未満' },
                                        { value: '2', label: '①４時間未満' },
                                        { value: '3', label: '③６時間以上' },
                                    
                                        ]}
                                    />
                                ),
                            },
                            {
                                title: '１か月の勤務日',
                                dataIndex: 'hr2',
                                render: (text: any, record: any, index: number) => (
                                    <Select
                                        defaultValue="3"
                                        style={{ width: '135px'  }}
                                        onChange={handleChange}
                                        options={[
                                        { value: '1', label: '①１０日未満' },
                                        { value: '2', label: '②１０～１９日' },
                                        { value: '3', label: '③２０日以上' },
                                    
                                        ]}
                                    />
                                ),
                            },
                            {
                                title: '資格',
                                dataIndex: 'hr3',
                                render: (text: any, record: any, index: number) => (
                                    
                                    <Select
                                        defaultValue="Y"
                                        style={{ width: 58 }}
                                        onChange={handleChange}
                                        options={[
                                        { value: 'Y', label: '有' },
                                        { value: 'N', label: '無' },
                                    
                                        ]}
                                    />
                                ),
                            },
                            {
                                title: '職種の内容',
                                dataIndex: 'hr4',
                                width: '120px',
                                render: (text: any, record: any, index: number) => (
                                    <Input   placeholder="職種の内容"  value={'保育士'}/>
                                ),
                            },
                            {
                                title: '任免・発令者等',
                                dataIndex: 'hr5',
                                width: '120px',
                                render: (text: any, record: any, index: number) => (
                                    <Input placeholder="任免・発令者等"   value={'理事長'}/>
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
                </div>

                <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>その他の勤務履歴</Tag>
                <div style={{ padding: 10, minHeight: 100 }}>
                    <Table
                        dataSource={dataSource2}
                        columns={[
                            {
                                title: '年月',
                                dataIndex: 'first1',
                                render: (text: any, record: any, index: number) => (
                                    <DatePicker onChange={(date, dateString) => onChange(date, dateString)} picker="month" />
                                ),
                            },
                            {
                                title: '勤務時間',
                                dataIndex: 'first2',
                                render: (text: any, record: any, index: number) => (
                                    <Input placeholder="勤務時間" />
                                ),
                            },
                            {
                                title: '１か月の勤務日',
                                dataIndex: 'first3',
                                render: (text: any, record: any, index: number) => (
                                    <Input placeholder="１か月の勤務日" />
                                ),
                            },
                            {
                                title: '資格',
                                dataIndex: 'first4',
                                render: (text: any, record: any, index: number) => (
                                    <Input placeholder="資格" />
                                ),
                            },
                            {
                                title: '法人・施設名',
                                dataIndex: 'first5',
                                render: (text: any, record: any, index: number) => (
                                    <Input placeholder="法人・施設名" />
                                ),
                            },
                            {
                                title: '備　考',
                                dataIndex: 'first6',
                                render: (text: any, record: any, index: number) => (
                                    <Input placeholder="備　考" />
                                ),
                            },
                            {
                                title: 'Action',
                                dataIndex: 'operation',
                                render: (_: any, record: any, index: number) => (
                                    <MinusCircleOutlined onClick={() => handleDelete2(index)} />
                                ),
                            },
                        ]}
                        pagination={false}
                        rowClassName={() => 'editable-row'}
                    />
                        <Button onClick={handleAdd2} type="dashed" style={{ marginTop: 16 , background: '#91caff'}} icon={<PlusOutlined />}>
                        追加
                        </Button>
                </div>
               
            </div>
            
         
    );
};

export default FormRegisterTeach2;
