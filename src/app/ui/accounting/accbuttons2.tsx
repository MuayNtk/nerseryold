"use client";

import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import Link from "next/link";

const AccButtons2: React.FC = () => {
  return (
    <Row gutter={[16, 42]}>
      <Col className="gutter-row" span={8}>
        <Link href={"../accounting/acc_2/acc2_listbtn1"}>
          <Button type="primary" style={{ width: "100%", height: "140%" }}>
            [R4] 保育体制強化事業補助金交付申請書
          </Button>
        </Link>
      </Col>
      <Col className="gutter-row" span={8}>
        <Link href={"../accounting/acc_2/acc2_listbtn2"}>
          <Button type="primary" style={{ width: "100%", height: "140%" }}>
            保育体制強化事業補助金交付申請書
          </Button>
        </Link>
      </Col>
      <Col className="gutter-row" span={8}>
        <Link href={"../accounting/acc_2/acc2_listbtn3"}>
          <Button type="primary" style={{ width: "100%", height: "140%" }}>
            変更交付申請一式（保育体制強化事業）
          </Button>
        </Link>
      </Col>
      <Col className="gutter-row" span={8}>
        <Link href={"../accounting/acc_2/acc2_listbtn4"}>
          <Button type="primary" style={{ width: "100%", height: "140%" }}>
            様式第４号
          </Button>
        </Link>
      </Col>
      <Col className="gutter-row" span={8}>
        <Link href={"../accounting/acc_2/acc2_listbtn5"}>
          <Button type="primary" style={{ width: "100%", height: "140%" }}>
            申請書一式（保育体制強化事業）
          </Button>
        </Link>
      </Col>
      <Col className="gutter-row" span={8}>
        <Link href={"../accounting/acc_2/acc2_listbtn6"}>
          <Button type="primary" style={{ width: "100%", height: "140%" }}>
            [R5] 保育体制強化事業補助金交付申請書
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
export default AccButtons2;
