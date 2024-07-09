import { Row, Col, Table } from 'antd';

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  position: string;
  bothname: {
    furigana:string,
    fullname:string,
  };
  gender: string;
  era: string;
  year: string;
  month: string;
  day: string;
}

const data: DataType[] = [
  {
    key: '1',
    position: '理事長',
    bothname: {
      furigana:"ワタナベ　ケイコ",
      fullname:"渡部　圭子",
    },
    gender: '女',
    era: '昭和',
    year: '11',
    month: '2',
    day: '21',
  },
  {
    key: '2',
    position: '常務理事',
    bothname: {
      furigana:"ワタナベ　シロウ",
      fullname:"渡部　史朗",
    },
    gender: '男',
    era: '昭和',
    year: '43',
    month: '5',
    day: '22',
  },
  {
    key: '3',
    position: '理事',
    bothname: {
      furigana:"ナカガワ　ヤスヨシ",
      fullname:"中川　康嘉",
    },
    gender: '男',
    era: '昭和',
    year: '33',
    month: '10',
    day: '1',
  },
];

const OrganizerInfo: React.FC = () => {

  return (
    <>
    <Row>
      <Col span='col-18'>
        <Table 
        dataSource={data} 
        pagination={false}
        >
          <Column title="役職名" dataIndex="position" key="position" align='center' />
          <ColumnGroup title="フリガナ" align='center'>
            <Column title="氏名" dataIndex="bothname" key="bothname" align='center'
            render={(bothname: any) => 
            <div>
              <div>{bothname.furigana}</div>
              <div>{bothname.fullname}</div>
            </div>
          } />
          </ColumnGroup>
          <Column title="性別" dataIndex="gender" key="gender" align='center' />
          <Column title="生年月日" align='center'
              render={(data:DataType) => 
              <div>{data.era+data.year}月{data.month}日{data.day}</div>
            } />
        </Table>
      </Col>
    </Row>
    </>
  );
}

export default OrganizerInfo;