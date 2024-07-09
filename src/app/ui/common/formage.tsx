"use client";

import React from 'react';
import { Col, Row, Select, Input } from 'antd';

const FormAge: React.FC = () => {
    return (
      <>
            <Row>
                  <Col span={5} className="text-end ms-2">
                        <Select defaultValue="6"
                              options={[
                                    { value: '0', label: '0'},
                                    { value: '1', label: '1'},
                                    { value: '2', label: '2'},
                                    { value: '3', label: '3'},
                                    { value: '4', label: '4'},
                                    { value: '5', label: '5'},
                                    { value: '6', label: '6'},
                              ]}
                        />
                  </Col>
                  <Col span={2} className=" pt-1 ms-3"><label>歳</label></Col>
                  <Col span={5} className="text-end ms-5">
                        <Select defaultValue="0"
                              options={[
                                    { value: '0', label: '0' },
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                    { value: '4', label: '4' },
                                    { value: '5', label: '5' },
                                    { value: '6', label: '6' },
                                    { value: '7', label: '7' },
                                    { value: '8', label: '8' },
                                    { value: '9', label: '9' },
                                    { value: '10', label: '10 ' },
                                    { value: '11', label: '11 ' },
                                    { value: '12', label: '12 ' },
                              ]}
                        />
                  </Col>
                  <Col span={4} className="pt-1 ms-3"><span>か月</span></Col>
            </Row>
      </>
    );
};

export default FormAge;


