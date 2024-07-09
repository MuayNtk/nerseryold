"use client";

import React, { useState } from 'react';
import {Radio, RadioChangeEvent } from 'antd';
import Link from 'next/link';
import { PlusOutlined ,EditOutlined ,EyeOutlined ,CloseOutlined ,SearchOutlined} from '@ant-design/icons';
import FormRegisterTeach1 from './formregisterteach1';
import FormRegisterTeach2 from './formregisterteach2';

const Formradio: React.FC = () => {
      const [selectedOption, setSelectedOption] = useState('1');

      const handleOptionChange = (e: RadioChangeEvent) => {
            setSelectedOption(e.target.value);
        };
      
    return (
        <>
            <div className='text-start'>
          
                  <Radio.Group onChange={handleOptionChange} value={selectedOption}>
                        <Radio value="1">履歴書 (正規職員用)</Radio>
                        <Radio value="2">履歴書 (賃金職員用)</Radio>
                  </Radio.Group>

                  <div>
                        {selectedOption === '1' && <FormRegisterTeach1  value1="1"/>} 
                        {selectedOption === '2' && <FormRegisterTeach2   value2="2"/>}
                  </div>
                  {selectedOption === '' && <FormRegisterTeach1   value1="1"/>} 
            </div>
            
        </>
    );
};

export default Formradio;
