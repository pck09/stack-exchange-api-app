import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Space, Typography } from "antd";
import React from "react";
import { timeFromNow, timeToNow } from "../../../utils/dateUtils";

interface ProfileInfoProps {
  profileImage: string;
  name: string;
  creationDate: number;
  lastAccessDate: number;
  dataIsLoading: boolean;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  creationDate,
  lastAccessDate,
  name,
  profileImage,
  dataIsLoading,
}) => {
  return (
    <Card loading={dataIsLoading}>
      <Space size="large">
        <Avatar size={128} src={profileImage} />
        <div>
          <Typography.Title>{name}</Typography.Title>
          <Row gutter={[8, 8]}>
            <Col>
              <CalendarOutlined /> Member for {timeToNow(creationDate)}
            </Col>
            <Col>
              <ClockCircleOutlined /> Last login {timeFromNow(lastAccessDate)}
            </Col>
          </Row>
        </div>
      </Space>
    </Card>
  );
};

export default ProfileInfo;
