import { Button, Dropdown } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

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

const items: MenuItem[] = [
  getItem('Menu 1', 'menu1', <TeamOutlined />),
  getItem('Menu 2', 'menu2', <TeamOutlined />),
  getItem('Menu 3', 'menu3', <TeamOutlined />),
  getItem('ログアウト', 'logout', <TeamOutlined />, true),
];

const UsersMenu: React.FC = () => {

    return (
        <Dropdown menu={{ items }} placement="bottomRight">
            <Button type="primary">管理者</Button>
        </Dropdown>
    )
}

export default UsersMenu;