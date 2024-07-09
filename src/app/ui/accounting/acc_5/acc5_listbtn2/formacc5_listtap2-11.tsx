import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  DatePicker,
  Divider,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { SubmitCancelButtons } from "@/app/ui/sub-canbtn";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY/MM/DD";

const { Option } = Select;
const { RangePicker } = DatePicker;

const NutritionistSelection: React.FC<{
  selectedValue: string;
  otherText: string;
  onChange: (value: string) => void;
  onOtherTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Accept the function as a prop
  onSubmit: () => void;
}> = ({
  selectedValue,
  otherText,
  onChange,
  onOtherTextChange, // Receive the function as a prop
  onSubmit,
}) => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "25px" }}>
      <p style={{ display: "inline-block", marginRight: "8px" }}></p>
      <Select
        defaultValue="該当する項目を記入（プルダウンで選択）"
        style={{ width: 450 }}
        onChange={onChange}
        value={selectedValue}
      >
        <Option value="直接雇用（人材派遣を含む）（A）">
          直接雇用（人材派遣を含む）（A）
        </Option>
        <Option value="直接雇用（人材派遣を含む）（B）">
          直接雇用（人材派遣を含む）（B）
        </Option>
        <Option value="嘱託 （外部委託）（C）">嘱託 （外部委託）（C）</Option>
        <Option value="法人本部で雇用（同一法人内の他施設勤務を含む）（A）">
          法人本部で雇用（同一法人内の他施設勤務を含む）（A）
        </Option>
        <Option value="その他 （具体的に記入↓）">
          その他 （具体的に記入↓）
        </Option>
      </Select>
      {selectedValue === "その他 （具体的に記入↓）" && (
        <div>
          <Input
            placeholder="具体的な項目を入力してください"
            value={otherText}
            onChange={onOtherTextChange}
            style={{ marginTop: "10px", width: 390, marginLeft: "10px" }}
          />
          <Button
            type="primary"
            onClick={onSubmit}
            style={{ marginTop: "10px", marginLeft: "8px" }}
          >
            OK
          </Button>
        </div>
      )}
    </div>
  );
};

const BusinessContentSelection: React.FC<{
  selectedValue: string;
  otherText: string;
  onChange: (value: string) => void;
  onOtherTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Accept the function as a prop
  onSubmit: () => void;
}> = ({
  selectedValue,
  otherText,
  onChange,
  onOtherTextChange, // Receive the function as a prop
  onSubmit,
}) => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "25px" }}>
      <p style={{ display: "inline-block", marginRight: "8px" }}></p>
      <Select
        defaultValue="該当する項目を記入（プルダウンで選択）（複数選択可）"
        style={{ width: 450 }}
        onChange={onChange}
        value={selectedValue}
      >
        <Option value="献立作成 （施設・事業所職員への指導・助言を含む。）">
          献立作成 （施設・事業所職員への指導・助言を含む。）
        </Option>
        <Option value="アレルギー・アトピー等への対応（施設・事業所職員への指導・助言を含む。）">
          アレルギー・アトピー等への対応
          （施設・事業所職員への指導・助言を含む。）
        </Option>
        <Option value="食育活動の実施等 （活動内容を具体的に記入↓）">
          食育活動の実施等 （活動内容を具体的に記入↓）
        </Option>
      </Select>
      {selectedValue === "食育活動の実施等 （活動内容を具体的に記入↓）" && (
        <div>
          <Input
            placeholder="具体的な項目を入力してください"
            value={otherText}
            onChange={onOtherTextChange} // Use the function here
            style={{ marginTop: "10px", width: 390, marginLeft: "10px" }}
          />
          <Button
            type="primary"
            onClick={onSubmit}
            style={{ marginTop: "10px", marginLeft: "8px" }}
          >
            OK
          </Button>
        </div>
      )}
    </div>
  );
};

const FormTap9: React.FC = () => {
  const [selectedValueNutritionist, setSelectedValueNutritionist] = useState(
    "↓ 該当する項目を記入（プルダウンで選択）"
  );
  const [otherTextNutritionist, setOtherTextNutritionist] = useState("");
  const [selectedValueBusiness, setSelectedValueBusiness] = useState(
    "↓ 該当する項目を記入（プルダウンで選択）（複数選択可）"
  );
  const [otherTextBusiness, setOtherTextBusiness] = useState("");

  const handleNutritionistChange = (value: string) => {
    setSelectedValueNutritionist(value);
  };

  const handleNutritionistOtherTextChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOtherTextNutritionist(e.target.value);
  };

  const handleNutritionistSubmit = () => {
    // Handle submission logic here
    console.log("Selected Value (Nutritionist):", selectedValueNutritionist);
    console.log("Other Text (Nutritionist):", otherTextNutritionist);
  };

  const handleBusinessChange = (value: string) => {
    setSelectedValueBusiness(value);
  };

  const handleBusinessOtherTextChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOtherTextBusiness(e.target.value);
  };

  const handleBusinessSubmit = () => {
    console.log("Selected Value (Business):", selectedValueBusiness);
    console.log("Other Text (Business):", otherTextBusiness);
  };

  const [forms, setForms] = useState([0]); // Initialize with one form
  const addForm = () => {
    setForms((prevForms) => [...prevForms, prevForms.length]);
  };

  return (
    <div>
      {forms.map((formIndex) => (
        <div key={formIndex}>
          <Row justify="start">
            <Col xs={24} sm={12} lg={18} xl={22}>
              <Form.Item style={{ gap: "10px" }}>
                <ol>
                  <li
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    <p>個票 9</p>
                  </li>
                  <br />
                  <li>14　栄養管理加算</li>

                  <div style={{ whiteSpace: "nowrap", marginBottom: "10px" }}>
                    <li
                      style={{
                        display: "inline-block",
                        marginTop: "15px",
                        marginRight: "20px",
                      }}
                    >
                      <p
                        style={{
                          display: "inline-block",
                          marginRight: "10px",
                          marginTop: "15px",
                        }}
                      >
                        ■ 加配保育士数
                      </p>
                      <Input.Search
                        placeholder=""
                        style={{
                          width: 250,
                          marginTop: "10px",
                          display: "inline-block",
                        }}
                      />
                    </li>
                  </div>

                  <div style={{ marginTop: "20px" }}>
                    <ol>
                      <li>
                        A：【配置】栄養士を直接雇用（派遣を含む。）している場合
                      </li>
                      <li style={{ fontSize: "14px", color: "red" }}>
                        ※（Ｂ：【兼務】に該当する場合を除く。）
                      </li>
                      <li style={{ fontSize: "14px", color: "red" }}>
                        ※　法人本部で雇用する（同一法人内の他施設に勤務する場合を含む。）栄養士が、各施設に赴き、指導する場合も「配置」となります。
                      </li>
                      <li style={{ marginTop: "10px" }}>
                        B：【兼務】栄養士を直接雇用（派遣を含む。）している場合
                      </li>
                      <li style={{ fontSize: "14px", color: "red" }}>
                        ※（基本分単価や他の加算により配置する調理員等が兼務している場合）
                      </li>
                      <li style={{ marginTop: "10px" }}>
                        C：【嘱託】上記以外の場合（嘱託、外部委託等）
                      </li>
                    </ol>
                  </div>
                  <li>
                    <div style={{ marginTop: "20px" }}>
                      <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                        【対象栄養士について記入してください】
                      </span>
                    </div>

                    <p
                      style={{
                        marginLeft: "30px",
                        marginTop: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      対象栄養士氏名 :
                    </p>

                    <div style={{ marginTop: "10px", marginLeft: "30px" }}>
                      <Input
                        placeholder="栄養士氏名を入力してください"
                        style={{ width: 450 }}
                      />
                    </div>

                    <div>
                      <p
                        style={{
                          marginLeft: "30px",
                          marginTop: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        栄養士配置区分 :　
                      </p>

                      <NutritionistSelection
                        selectedValue={selectedValueNutritionist}
                        otherText={otherTextNutritionist}
                        onChange={handleNutritionistChange}
                        onOtherTextChange={handleNutritionistOtherTextChange}
                        onSubmit={handleNutritionistSubmit}
                      />
                    </div>

                    <div style={{ marginLeft: "30px", marginTop: "20px" }}>
                      <p
                        style={{
                          marginBottom: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        当該栄養士による指導期間（予定） :
                      </p>
                      <RangePicker
                        style={{ width: 460 }}
                        defaultValue={[
                          dayjs("2015/01/01", dateFormat),
                          dayjs("2015/01/01", dateFormat),
                        ]}
                        format={dateFormat}
                      />
                    </div>

                    <p
                      style={{
                        marginLeft: "30px",
                        marginTop: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      業務内容 :　
                    </p>

                    <BusinessContentSelection
                      selectedValue={selectedValueBusiness}
                      otherText={otherTextBusiness}
                      onChange={handleBusinessChange}
                      onOtherTextChange={handleBusinessOtherTextChange}
                      onSubmit={handleBusinessSubmit}
                    />
                  </li>
                </ol>
                <Divider />
              </Form.Item>
            </Col>
          </Row>
        </div>
      ))}
      {/* Button to add more forms */}
      <div style={{ marginBottom: "20px", marginLeft: "25px" }}>
        <Button
          type="primary"
          onClick={addForm}
          style={{
            background: "#A9CCE3 ",
            fontWeight: "bold",
            color: "gray",
          }}
        >
          Add Form
        </Button>
        <br />
        <SubmitCancelButtons
          onSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
          onCancel={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};
export default FormTap9;
