import React from "react";
import { Drawer, Row, Col, Divider } from "antd";

const Details = ({ person, visible, onClose, dataSingle }) => {
  console.log(dataSingle);
  return (
    <div>
      <Drawer
        destroyOnClose
        title={person}
        visible={visible}
        width={640}
        onClose={onClose}
      >
        <Row>
          <Col span={12}>
            <p>Full name: {dataSingle.name}</p>
          </Col>
          <Col span={12}>
            <p>E-mail: {dataSingle.email}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <p>Username: {dataSingle.username}</p>
          </Col>
          <Col span={12}>
            <p>Phone: {dataSingle.phone}</p>
          </Col>
        </Row>

        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
          <p>Website: {dataSingle.website}</p>
        </Row>

        <Divider />
      </Drawer>
    </div>
  );
};

export default Details;
