"use client";

import React from 'react';
import { Col, Row, Select, Input } from 'antd';

const FormClass: React.FC = () => {
    return (
      <>
           
            <Select defaultValue="1" style={{ width:'90%' }}
                  options={[
                        { value: '0', label: 'うさぎ'},
                        { value: '1', label: 'くま'},
                        { value: '2', label: 'ぱんだ'},
                        { value: '3', label: 'かめ'},
                        { value: '4', label: 'りす'},
                        { value: '5', label: 'とり'}
                  ]}
            />
                  
      </>
    );
};

export default FormClass;


