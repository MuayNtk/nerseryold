"use client"
import React from 'react';
import { Button, Col, Input, Row, Select, Table, Tag } from 'antd';
import { ColumnType } from 'antd/es/table';
import { SearchOutlined , PlusOutlined} from '@ant-design/icons';

interface DataItem {
  key: React.Key;
  name: string;
  class: string;
  date: string;
  starttime: string;
  endtime: string;
}

const columns: ColumnType<DataItem>[] = [
      {
            title: 'No',
            dataIndex: 'key', // ใช้ key เพื่อแสดงลำดับของแถว
            key: 'no',
            render: (_text, _record, index) => `${index + 1}`, // ฟังก์ชัน render เพื่อแสดงลำดับของแถว
      },
      {
            title: '氏名',
            dataIndex: 'name',
            key: 'name',
      },
      {
            title: 'クラス名',
            dataIndex: 'class',
            key: 'class',
      },
      {
            title: '日付',
            dataIndex: 'date',
            key: 'date',
      },
      {
            title: '開始時間',
            dataIndex: 'starttime',
            key: 'starttime',
      },
      {
            title: '終了日時',
            dataIndex: 'endtime',
            key: 'endtime',
      },
];

const data: DataItem[] = [

      { key: '1', name: '羽矢　友子', class: 'うさぎ', date: '2024/01/03' , starttime: '11:00 am ' ,endtime: '4:00 pm' },
      { key: '2', name: '宮葉　惟洸', class: 'ぱんだ', date: '2023/12/25' , starttime: '12:00 pm ',endtime: '4:00 pm' },
      { key: '3', name: '橋本　温彦', class: 'かめ', date: '2023/12/15' , starttime: '1:00 pm ',endtime: '4:00 pm' },
      { key: '4', name: '橋本　百香', class: 'りす', date: '2023/11/10' , starttime: '11:00 am ' ,endtime: '2:00 pm' },
      { key: '5', name: '豊田　有子', class: 'くま', date: '2023/10/06' , starttime: '6:00 pm ',endtime: '11:00 pm' },
      { key: '6', name: '杉本　弓子', class: 'とり', date: '2023/10/02' , starttime: '11:00 pm ',endtime: '2:00 am' },
]; // ไม่มีข้อมูล

const FormLeaveList: React.FC = () => {
  return (
      <>
      <Row>
                  <Col span={1}></Col>
                  <Col span={2} className='mt-1'>氏名</Col>
                        <Col span={4}>
                        <Input/>
                  </Col>
                  <Col span={3} className='mt-1'>クラス名</Col>
                        <Col span={3}>
                        <Select defaultValue="" style={{ width: '100%' }}
                              options={[
                                    { value: '', label: ''},
                                    { value: '0', label: 'うさぎ'},
                                    { value: '1', label: 'くま'},
                                    { value: '2', label: 'ぱんだ'},
                                    { value: '3', label: 'かめ'},
                                    { value: '4', label: 'りす'},
                                    { value: '5', label: 'とり'},

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
            <div className='text-end  ' style={{ width: '95%' }} >
                <Col className="text-end pt-1">
                    <a href="../teacher/leave/holiday" >
                        <Button type="primary" icon={<PlusOutlined />}  size="small">
                            Add
                        </Button>
                    </a>
                </Col>
            </div>
            <br />
            <Table<DataItem>
                  columns={columns}
                  dataSource={data}
            
            />
      </>
  );
}

export default FormLeaveList;
