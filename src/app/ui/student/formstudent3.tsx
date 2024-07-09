"use client";

import React  from 'react';
import { Button, Checkbox, Col, DatePicker, DatePickerProps, Form, Input, InputNumber, Row, Select, Tag, Typography } from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import FormEra from '../common/formera';
import { FormDay } from '../common/formdate';



const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};


const onChangeselect = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.value ?? '').toLowerCase().includes(input.toLowerCase());
  
const FormStudent3: React.FC = () => (
    <Form 
        name="wrap"
        // labelCol={{ flex: '110px' }}
        labelWrap
        // style={{ maxWidth: '100%' }}
    
    >
        <Row gutter={16}>
            <Col span={1}></Col>
            <Col span={6}>
                <Form.Item label="ふりがな" name="Furigana" rules={[{ required: true, message: 'ふりが' }]}>
                <Input />
                </Form.Item>
            </Col>
        
        </Row>
        <Row style={{ marginTop: '-15px' }}>
            <Col span={1}></Col>
            <Col span={5} className='ms-10'>
                <Form.Item label="氏名 " name="Full_Name" >
                    <Input />
                </Form.Item>
            </Col>
        </Row>

        <Row style={{ marginTop: '-15px' }}>
            <Col  offset={1} className='ms-10'></Col>
            <Col className="text-center pt-1 pe-2 ms-10"><label>性別 :</label></Col>
            <Col span={2}>
                <Select defaultValue="女"
                    options={[
                    { value: '男', label: '男' },
                    { value: '女', label: '女' }
                    ]}
                />
            </Col>
        </Row>
        <Row className="mt-2 ms-5">
            <Col  className="text-end pt-1 pe-2 ms-5"><label>生 年 月 日 :</label></Col>
            <FormEra />
        </Row>
        <Row gutter={16} className="mt-2">
            <Col span={1}></Col>
            <Col span={6} className='ms-7'>
                <Form.Item label="就学先" name="School">
                    <Input />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: '-15px' }}>
        <Col span={10}>
            <Form.Item label="保育所名及び所在地" name="School_Location">
            <Input.TextArea />
            </Form.Item>
        </Col>
        </Row>

        <Row style={{ marginTop: '-15px' }}>
        <Col span={1}></Col>
        <Col span={8} className='ms-8'>
            <Form.Item label="所在地" name="Location">
                <Input.TextArea />
            </Form.Item>
        </Col>
        </Row>
        <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>当該保育所における保育期間</Tag>
        {/* <div>当該保育所における保育期間</div> */}
        <br /> <br />
        <Row>
            <Col span={1}></Col>
            <Col span={2}>
                <Form.Item label="" name="Era1">
                    <Select
                        showSearch
                        optionFilterProp="children"
                        onChange={onChangeselect}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                            { value: 'Showa', label: '昭和' },
                            { value: 'Heisei', label: '平成' },
                            { value: 'Reiwa', label: '令和' }
                            ]}
                    />
                </Form.Item>
            </Col>
            <Col  span={2} className='ms-2'>
                <Input suffix='年' />
            </Col>&nbsp;&nbsp;
                <FormDay />
           
            <span className='ms-5'>～</span>
            <Col  className='ms-5' span={2}>
                <Form.Item label="" name="Era2">
                    <Select
                        showSearch
                        optionFilterProp="children"
                        onChange={onChangeselect}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                            { value: 'Showa', label: '昭和' },
                            { value: 'Heisei', label: '平成' },
                            { value: 'Reiwa', label: '令和' }
                            ]}
                    />
                </Form.Item>
            </Col>
            <Col   span={2} className='ms-2'>
                <Input suffix='年' />
            </Col>&nbsp;&nbsp;
            <FormDay />
        </Row> 

        <Row style={{ marginTop: '-15px' }}>
            <Col span={1}></Col>
            <Col span={2}>
                <Form.Item label="" name="Era22">
                    <Select
                        showSearch
                        optionFilterProp="children"
                        onChange={onChangeselect}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                            { value: 'Showa', label: '昭和' },
                            { value: 'Heisei', label: '平成' },
                            { value: 'Reiwa', label: '令和' }
                            ]}
                    />
                </Form.Item>
            </Col>
            <Col  span={2} className='ms-2'>
                <Input suffix='年' />
            </Col>&nbsp;&nbsp;
            <FormDay />
           
            <span className='ms-5'>～</span>
            <Col  className='ms-5' span={2}>
                <Form.Item label="" name="Era21">
                    <Select
                        showSearch
                        optionFilterProp="children"
                        onChange={onChangeselect}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                            { value: 'Showa', label: '昭和' },
                            { value: 'Heisei', label: '平成' },
                            { value: 'Reiwa', label: '令和' }
                            ]}
                    />
                </Form.Item>
            </Col>
            <Col   span={2} className='ms-2'>
                <Input suffix='年' />
            </Col>&nbsp;&nbsp;
            <FormDay />
        </Row> 

        <Row style={{ marginTop: '-15px' }}>
            <Col span={1}></Col>
            <Col span={2}>
                <Form.Item label="" name="Era3">
                    <Select
                        showSearch
                        optionFilterProp="children"
                        onChange={onChangeselect}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                            { value: 'Showa', label: '昭和' },
                            { value: 'Heisei', label: '平成' },
                            { value: 'Reiwa', label: '令和' }
                            ]}
                    />
                </Form.Item>
            </Col>
            <Col span={2} className='ms-2'>
                <Input suffix='年' />
            </Col>&nbsp;&nbsp;
                <FormDay />
            <span className='ms-5'>～</span>
            <Col   className='ms-5' span={2} >
                <Form.Item label="" name="Era23">
                    <Select
                        showSearch
                        optionFilterProp="children"
                        onChange={onChangeselect}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                            { value: 'Showa', label: '昭和' },
                            { value: 'Heisei', label: '平成' },
                            { value: 'Reiwa', label: '令和' }
                            ]}
                    />
                </Form.Item>
            </Col>
            <Col span={2} className='ms-2'>
                <Input suffix='年' />
            </Col>&nbsp;&nbsp;
            <FormDay />
        </Row> 

        <Row style={{ marginTop: '-15px' }}>
            <Col span={1}></Col>
            <Col span={2}>
                <Form.Item label="" name="Total_Era">
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={{ span: 6}} className='ms-2'>
                <Form.Item label="年/月" name="Year7">
                    <DatePicker onChange={onChange} picker="month" />
                </Form.Item>
            </Col>
        </Row>
       
        <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>保育の過程と子どもの育ちに関する事項</Tag>
        {/* <div>保育の過程と子どもの育ちに関する事項</div> */}
        <br /> <br />
        <Row gutter={16}>
            <Col span={10}>
                <Form.Item>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: 5 }}>【最終年度の重点】</label>
                        <Input.TextArea />
                    </div>
                </Form.Item>
                <Form.Item>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: 5 }}>【特に配慮すべき事項】</label>
                        <Input.TextArea />
                    </div>
                </Form.Item>
                <Form.Item>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ marginBottom: 5 }}>【個人の重点】</label>
                        <Input.TextArea />
                    </div>
                </Form.Item>
                
            </Col>
        </Row>
        

        <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>ね　　ら　　い（発達を捉える視点）</Tag>

        {/* <div>ね　　ら　　い（発達を捉える視点）</div> */}
        <br /><br />
            <div>健康</div>
                <Row gutter={16} >
                    <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>明るく伸び伸びと行動し、充実感を味わう。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>自分の体を十分に動かし、進んで運動しようとする。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>健康、安全な生活に必要な習慣や態度を身に付け、見通しをもって行動する。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row><br />
            <div>人間関係</div>
            
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>保育所生活を楽しみ、自分の力で行動することの充実感を味わう。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>身近な人と親しみ、関わりを深め、工夫したり、協力したりして一緒に活動する楽しさを味わい、愛情や信頼感をもつ。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>社会生活における望ましい習慣や態度を身に付ける</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                 <br />
            <div>環境</div>
           
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>身近な環境に親しみ、自然と触れ合う中で様々な事象に興味や関心を持つ。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>身近な環境に自分から関わり、発見を楽しんだり、考えたりし、それを生活に取り入れようとする。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>身近な事象を見たり、考えたり、扱ったりする中で、物の性質や数量、文字などに対する感覚を豊かにする。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <br />
            <div>言葉</div>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>自分の気持ちを言葉で表現する楽しさを味わう。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>人の言葉や話などをよく聞き、自分の経験したことや考えたことを話し、伝え合う喜びを味わう。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>日常生活に必要な言葉が分かるようになるとともに、絵本や物語などに親しみ、言葉に対する感覚を豊かにし，保育士等や友達と心を通わせる。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <br />
            <div>表現</div>
           
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>いろいろな物の美しさなどに対する豊かな感性をもつ。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>感じたことや考えたことを自分なりに表現して楽しむ。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
                <Row gutter={16} >
                     <Col span={24} className='ms-10'>
                        <Checkbox>
                            <Typography.Text>生活の中でイメージを豊かにし、様々な表現を楽しむ。</Typography.Text>
                        </Checkbox>
                    </Col>
                </Row>
            <br /><br />
            <Row gutter={16}>
                <Col span={10}>
                    <Form.Item>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label style={{ marginBottom: 5 }}>保育の展開と子どもの育ち</label>
                            <Input.TextArea />
                        </div>
                    </Form.Item>
                    <Form.Item >
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label style={{ marginBottom: 5 }}>最終年度に至るまでの育ちに関する事項</label>
                            <Input.TextArea />
                        </div>
                    </Form.Item>
                    <Form.Item >
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label style={{ marginBottom: 5 }}>最終年度に至るまでの育ちに関する事項</label>
                            <Input.TextArea />
                        </div>
                    </Form.Item>

                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="担当保育士名 "name='input1'>
                        <Input name='input1'/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="施設長名 "  name='input2'>
                        <Input name='input2'/>
                    </Form.Item>
                </Col>
            </Row>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />} style={{ backgroundColor: '#33c033', borderColor: '#33c033' }}>
                Save
            </Button>
        </div>
    </Form>
    
);
export default FormStudent3;

