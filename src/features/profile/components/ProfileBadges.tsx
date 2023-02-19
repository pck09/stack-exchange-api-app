import { StarOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";
import { formatNumber } from "../../../utils/numberUtils";
import styles from "./ProfileBadges.module.scss";

interface ProfileBadgesProps {
  bronze: number;
  gold: number;
  silver: number;
  dataIsLoading: boolean;
}

const ProfileBadges: React.FC<ProfileBadgesProps> = ({
  bronze,
  gold,
  silver,
  dataIsLoading,
}) => {
  return (
    <Card title="Badges" loading={dataIsLoading}>
      <Row gutter={16}>
        <Col span={8} className={styles.badgeCol}>
          <StarOutlined className={`${styles.star} ${styles.gold}`} />
          <div className={styles.badgeCount}>{formatNumber(gold)}</div>
        </Col>
        <Col span={8} className={styles.badgeCol}>
          <StarOutlined className={`${styles.star} ${styles.silver}`} />
          <div className={styles.badgeCount}>{formatNumber(silver)}</div>
        </Col>
        <Col span={8} className={styles.badgeCol}>
          <StarOutlined className={`${styles.star} ${styles.bronze}`} />
          <div className={styles.badgeCount}>{formatNumber(bronze)}</div>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileBadges;
