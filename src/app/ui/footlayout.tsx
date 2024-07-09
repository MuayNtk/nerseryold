import { Layout } from 'antd';
import t from "@/app/locales/jp/common.json";//import language

const { Content, Footer } = Layout;

const FootLayout: React.FC = () => {

    return (
        <Footer style={{ textAlign: 'center' }}>
        {t.footer}
        </Footer>
    );
};

export default FootLayout;