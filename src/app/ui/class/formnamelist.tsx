"use client";

import React  from 'react';
import { Button, Tag } from 'antd';
import Link from 'next/link';
import { EyeOutlined } from '@ant-design/icons';


const FormNameList: React.FC = () => {
      const styles = {
            border: '1px solid #dddddd',
            width: '50%',
            margin: '0 auto',
            
          };
          const td = {
              border: '1px solid #dddddd',
              height: '40px',
            };
  return (
    
            <>
                  <Tag color="blue" style={{ fontSize: '14px', border: '1px ', padding: '6px', width: '100%' }}>うさぎ</Tag>
                  <br/><br />
                  <table style={styles}>
                        <tbody> 
                              <tr>
                                    <td style={td}>No</td>
                                    <td style={td} align='left'>氏名</td>
                                    <td style={td} align='center'>生 年 月 日</td>
                                    <td style={td} align='center'>出席日</td>
                              </tr>
                              <tr>
                                    <td style={td}>1</td>
                                    <td style={td} align='left'>濱千代　智宏</td>
                                    <td style={td}>2021年11月5日</td>
                                    <td style={td}>
                                          <Link href={'/student/student_1'}><Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button></Link>
                                    </td>
                              </tr>
                              <tr>
                                    <td style={td}>2</td>
                                    <td style={td} align='left'>濱千代　定</td>
                                    <td style={td}>2021年10月15日</td>
                               
                                    <td style={td}>
                                          <Link href={'/student/student_1'}><Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button></Link>
                                    </td>
                              </tr>
                              <tr>
                                    <td style={td}>3</td>
                                    <td style={td} align='left'>立石　太平</td>
                                    <td style={td}>2021年12月10日</td>
                        
                                    <td style={td}>
                                          <Link href={'/student/student_1'}><Button  type="primary" icon={<EyeOutlined />} size="small" style={{ backgroundColor: '#faad14' }}></Button></Link>
                                    </td>
                              </tr>
                        </tbody>
                  </table>
            </>
    );
};
export default FormNameList;

