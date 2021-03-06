import React, { useContext } from "react";
import { Row, Col, Avatar, Typography, Space } from "antd";
import {AuthContext} from "../context/AuthContextProvider"
const { Title } = Typography;

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <Row justify="center" align="middle">
      <Col xs={24} xl={12} className="custom-box">
        <Space direction="vertical">
          <Title level={3}>Profile</Title>
          <Avatar
            size="large"
            src={user.avatar.url}
          />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </Space>
      </Col>
    </Row>
  );
};

export default Profile;
