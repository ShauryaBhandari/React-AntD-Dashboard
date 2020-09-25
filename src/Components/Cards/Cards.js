import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { Card, Col, Row } from "antd";
import "./Cards.css";
import { Button } from "antd";
import Details from "../Details/Details";

const Cards = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [bool, setBool] = useState(false);
  const [dataSingle, setDataSingle] = useState([]);

  const onSelect = (name, id) => {
    setDataSingle(data[id - 1]);
    setValue(name);
    setBool(true);
  };

  const onClose = () => {
    setBool(false);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      // console.log(result.data);
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Row gutter={16}>
        {data.map((item) => (
          <Col key={item.id} span={8}>
            <Card className="card" title={item.name} bordered={true}>
              <ul>
                <li>Email: {item.email}</li>
                <li>Phone: {item.phone}</li>
              </ul>
              <div style={{ textAlign: "center" }}>
                <Button
                  type="primary"
                  onClick={() => {
                    onSelect(item.name, item.id);
                  }}
                  ghost
                >
                  More Details
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Details
        person={value}
        visible={bool}
        onClose={onClose}
        dataSingle={dataSingle}
      />
    </div>
  );
};

export default Cards;
