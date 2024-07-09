import React from "react";
import { Col, Row, Table } from "antd";

interface DataItem {
  定員区分A: string;
  定員区分B: string;
  加算単価: number;
  処遇改善等加算単価: number;
}

const DataTable: React.FC = () => {
  const dataSource: DataItem[] = [
    {
      定員区分A: "20,20",
      定員区分B: "20",
      加算単価: 21890,
      処遇改善等加算単価: 210,
    },
    {
      定員区分A: "21-30",
      定員区分B: "30",
      加算単価: 14590,
      処遇改善等加算単価: 140,
    },
    {
      定員区分A: "31-40",
      定員区分B: "40",
      加算単価: 10940,
      処遇改善等加算単価: 100,
    },
    {
      定員区分A: "41-50",
      定員区分B: "45",
      加算単価: 8750,
      処遇改善等加算単価: 80,
    },
    {
      定員区分A: "51-60",
      定員区分B: "60",
      加算単価: 7290,
      処遇改善等加算単価: 70,
    },
    {
      定員区分A: "61-70",
      定員区分B: "70",
      加算単価: 6250,
      処遇改善等加算単価: 60,
    },
    {
      定員区分A: "71-80",
      定員区分B: "80",
      加算単価: 5470,
      処遇改善等加算単価: 50,
    },
    {
      定員区分A: "81-90",
      定員区分B: "90",
      加算単価: 4860,
      処遇改善等加算単価: 40,
    },
    {
      定員区分A: "91-100",
      定員区分B: "100",
      加算単価: 4370,
      処遇改善等加算単価: 40,
    },
    {
      定員区分A: "101-110",
      定員区分B: "110",
      加算単価: 3980,
      処遇改善等加算単価: 30,
    },
    {
      定員区分A: "111-120",
      定員区分B: "120",
      加算単価: 3640,
      処遇改善等加算単価: 30,
    },
    {
      定員区分A: "121-130",
      定員区分B: "130",
      加算単価: 3360,
      処遇改善等加算単価: 30,
    },
    {
      定員区分A: "131-140",
      定員区分B: "140",
      加算単価: 3120,
      処遇改善等加算単価: 30,
    },
    {
      定員区分A: "141-150",
      定員区分B: "150",
      加算単価: 2910,
      処遇改善等加算単価: 20,
    },
    {
      定員区分A: "151-160",
      定員区分B: "160",
      加算単価: 2730,
      処遇改善等加算単価: 20,
    },
    {
      定員区分A: "161-170",
      定員区分B: "170",
      加算単価: 2570,
      処遇改善等加算単価: 20,
    },
    {
      定員区分A: "171-",
      定員区分B: "171",
      加算単価: 2430,
      処遇改善等加算単価: 20,
    },
  ];

  const columns = [
    {
      title: "定員区分A",
      dataIndex: "定員区分A",
      key: "capacityA",
      width: 100,
    },
    {
      title: "定員区分B",
      dataIndex: "定員区分B",
      key: "capacityB",
      width: 100,
    },
    {
      title: "加算単価",
      dataIndex: "加算単価",
      key: "additionalPrice",
      width: 100,
    },
    {
      title: "処遇改善等加算単価",
      dataIndex: "処遇改善等加算単価",
      key: "improvementPrice",
      width: 100,
    },
  ];

  return (
    <div>
      <p style={{ fontSize: "17px", fontWeight: "bold", marginBottom: "10px" }}>
        チーム保育推進加算（R5当初）
      </p>

      <Row>
        <Col xs={24} sm={12} lg={16} xl={20}>
          <Table<DataItem> columns={columns} dataSource={dataSource} />
        </Col>
      </Row>
    </div>
  );
};

export default DataTable;