import { Layout, theme, Button, Dropdown } from "antd";
import { 
  TeamOutlined, 
  PoweroffOutlined, 
  SettingFilled,
  EditOutlined,
  BellOutlined 
 } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import t from "@/app/locales/jp/common.json";//import language

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  danger?: boolean,
  children?: MenuItem[],
): MenuItem {
  return {
    label,
    key,
    icon,
    danger,
    children,
  } as MenuItem;
}

const username:string = "管理者123";

const items: MenuItem[] = [
  getItem(t.navbar.usermenu.profile, 'profile', <TeamOutlined />),
  getItem(t.navbar.usermenu.chgpwd, 'chgpwd', <EditOutlined />),
  getItem(t.navbar.setting, 'setting', <SettingFilled />),
  getItem(t.navbar.logout, 'logout', <PoweroffOutlined />),
];

const { Header, } = Layout;
const NavBar: React.FC = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    
  return (
    <Header style={{ padding: '0 20px', textAlign: 'right', background: colorBgContainer }}>
        <Dropdown menu={{ items }} placement="bottomRight">
            <Button type="primary">{ username }</Button>
        </Dropdown>&nbsp;
        <Button style={{ backgroundColor: '#fde83f' }} shape="circle" title={t.navbar.noti} icon={<BellOutlined  />}></Button>&nbsp;
        
    </Header>
  )
}
export default NavBar;