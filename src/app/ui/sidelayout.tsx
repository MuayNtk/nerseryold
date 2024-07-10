import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Layout, Menu, Flex } from 'antd';
import type { MenuProps } from 'antd';
import {
  ApartmentOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  SettingFilled,
  UserAddOutlined,
  BookOutlined
} from '@ant-design/icons';
import t from "@/app/locales/jp/common.json";//import language

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

const boxStyle: React.CSSProperties = {
  width: '90%',
  margin: '10px auto',
  borderRadius: 6,
  border: '0px',
  backgroundColor:'#FFF',
};

const items: MenuItem[] = [
  getItem(t.menu.home, '', <PieChartOutlined />),
  getItem(t.menu.teacher, 'teacher', <TeamOutlined />, [
    getItem(t.menu.todolist, 'todolist', <ApartmentOutlined />),
    getItem(t.menu.leave, 'leave', <ApartmentOutlined />),
    // getItem(t.menu.overtime, 'overtime', <ApartmentOutlined />),
  ]),
  getItem(t.menu.student, 'student', <TeamOutlined />),
  getItem(t.menu.accounting, 'accounting', <DesktopOutlined />),
  getItem(t.menu.class, 'class', <ApartmentOutlined />),
  getItem(t.menu.listteacher, 'listteacher',  <UserAddOutlined />),
  getItem(t.menu.report, 'report',  <BookOutlined />),
  getItem(t.menu.setting, 'setting', <SettingFilled />, [
    getItem(t.menu.nurseryinfo, 'nurseryinfo', <ApartmentOutlined />),
    getItem(t.menu.organizer, 'organizer', <ApartmentOutlined />),
  ]),
];

const SideLayout: React.FC = () => {
  const path = usePathname();
  const paths = path.split('/');
  const selectedKey = paths[paths.length - 1];
  let openKey = "setting";
  
  if(paths.length > 2){
    openKey = paths[paths.length - 2]
  }
    const [collapsed, setCollapsed] = useState(false);

    function menuClick(key:string[]){
      let path = "";
      for(let val in key){
        if(path != ""){
          path = "/"+path;
        }
        path = key[val]+path;
      }
      
      const isLocalhost = window.location.hostname === 'localhost';
      const baseUrl = isLocalhost ? 'http://localhost:3000' : window.location.origin;
      
      window.location.assign(`${baseUrl}/${path}`);
      return false;
    }
    

    return (
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
        <Flex style={boxStyle} justify={'center'} align={'center'}>
          <Image
            src="/asset/images/logo.png"
            width={60}
            height={33}
            alt="Logo"
          />
        </Flex>
        <Menu theme="dark" defaultOpenKeys={[openKey]} selectedKeys={[selectedKey]} mode="inline" items={items} onClick={(e) => {menuClick(e.keyPath)}} />
      </Sider>
    )
}
export default SideLayout;