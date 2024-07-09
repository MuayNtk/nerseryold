"use client";

import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import Link from "next/link";

const AccButtons5: React.FC = () => {
  return (
    <Row gutter={[16, 42]}>
      <Col className="gutter-row" span={10}>
        <Link href={"acc_5/acc5_listbtn1"}>
          <Button type="primary" style={{ width: "90%", height: "140%" }}>
            【提出様式】R5_加算申請書（仮）保育所用
          </Button>
        </Link>
      </Col>
      <Col className="gutter-row" span={10}>
        <Link href={"acc_5/acc5_listbtn2"}>
          <Button type="primary" style={{ width: "90%", height: "140%" }}>
            【いちざき】R5_加算適用申請書（保育所）
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
export default AccButtons5;
