import React, { useState } from "react";
import { Input, Typography } from "antd";

const SalaryCalculator: React.FC = () => {
  const [months, setMonths] = useState<number>(0);
  const [salary, setSalary] = useState<number>(0);

  const calculateTotalSalary = () => {
    const totalSalary = months * salary;
    return isNaN(totalSalary)
      ? ""
      : `${salary}円 * ${months}月 = ${totalSalary}円`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "semi-bold",
      }}
    >
      <Input
        type="number"
        placeholder="月数"
        onChange={(e) => setMonths(parseInt(e.target.value, 10))}
        style={{ width: "300px", marginBottom: "8px" }}
      />
      <Input
        type="number"
        placeholder="給与（円）"
        onChange={(e) => setSalary(parseInt(e.target.value, 10))}
        style={{ width: "300px", marginBottom: "16px" }}
      />
      <Typography.Text style={{ fontSize: "14px" }}>
        {calculateTotalSalary()}
      </Typography.Text>
    </div>
  );
};

export default SalaryCalculator;
