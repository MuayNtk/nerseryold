
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Skeleton, Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Login',
    dataIndex: 'login_at',
    key: 'login_at',
  },
];

const UsersTable: React.FC = () => {
  const [userDataA, setUserDataA] = useState([])
  const [loading, setloading] = useState(true)
  
  const preloadData = {
    name:<Skeleton.Input active />,
    email:<Skeleton.Input active />,
    login_at:<Skeleton.Input active />,
  };
  const preloadDataList:any = [
    preloadData,
    preloadData,
    preloadData,
    preloadData,
    preloadData
  ];

  useEffect(() => {
    setUserDataA(preloadDataList);
    getData(); 
  }
  , []);

  const getData = async () =>{
    try{
      const res = await axios.get('http://localhost:5000/users/')
      setloading(false)
      setUserDataA(  res.data.data.map((row:any) =>({name:row.name,email:row.email,login_at:row.login_at })) );
      console.log(userDataA);
     }catch(error){
      console.log("getData error : "+error);
    }           
  }

  return (
    <Table dataSource={userDataA} columns={columns} />
  )
} 

export default UsersTable;
