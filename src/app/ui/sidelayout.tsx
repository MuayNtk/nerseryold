"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Layout, Menu, Flex } from "antd";
import type { MenuProps } from "antd";
import {
  ApartmentOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  SettingFilled,
  UserAddOutlined,
  BookOutlined
} from "@ant-design/icons";
import t from "@/app/locales/jp/common.json"; //import language



const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

const boxStyle: React.CSSProperties = {
  width: "90%",
  margin: "10px auto",
  borderRadius: 6,
  border: "0px",
  backgroundColor: "#FFF",
};

const items: MenuItem[] = [
  getItem(t.menu.home, '', <PieChartOutlined />),
  getItem(t.menu.teacher, 'teacher', <TeamOutlined />, [
    getItem(t.menu.todolist, 'teacher/todolist', <ApartmentOutlined />),
    getItem(t.menu.leave, 'teacher/leave', <ApartmentOutlined />),
    // getItem(t.menu.overtime, 'overtime', <ApartmentOutlined />),
  ]),
  getItem(t.menu.student, 'student', <TeamOutlined />),
  getItem(t.menu.accounting, 'accounting', <DesktopOutlined />),
  getItem(t.menu.class, 'class', <ApartmentOutlined />),
  getItem(t.menu.listteacher, 'listteacher',  <UserAddOutlined />),
  getItem(t.menu.report, 'report',  <BookOutlined />),
  getItem(t.menu.setting, 'setting', <SettingFilled />, [
    getItem(t.menu.nurseryinfo, 'setting/nurseryinfo', <ApartmentOutlined />),
    getItem(t.menu.organizer, 'setting/organizer', <ApartmentOutlined />),
  ]),
];


const SideLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const menuClick = (key: string) => {
    console.log("key : " + key);
    router.push("/" + key); // Use Next.js router to navigate to the specified route
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Flex style={boxStyle} justify={"center"} align={"center"}>
        <Image src="/asset/images/logo.png" width={60} height={33} alt="Logo" />
      </Flex>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={(e) => {
          menuClick(e.key);
        }}
      />
    </Sider>
  );
};

export default SideLayout;
