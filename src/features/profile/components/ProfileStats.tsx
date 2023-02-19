import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Descriptions } from "antd";
import React, { useCallback } from "react";
import { formatNumber } from "../../../utils/numberUtils";

interface ProfileStatsProps {
  reputation: number;
  reputationChangeDay: number;
  reputationChangeMonth: number;
  reputationChangeQuarter: number;
  reputationChangeWeek: number;
  reputationChangeYear: number;
  dataIsLoading: boolean;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({
  reputation,
  reputationChangeDay,
  reputationChangeMonth,
  reputationChangeQuarter,
  reputationChangeWeek,
  reputationChangeYear,
  dataIsLoading,
}) => {
  const getChangeSuffix = useCallback((value: number) => {
    return value > 0 ? (
      <ArrowUpOutlined />
    ) : value < 0 ? (
      <ArrowDownOutlined />
    ) : undefined;
  }, []);

  return (
    <Card title="Stats" loading={dataIsLoading}>
      <Descriptions column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
        <Descriptions.Item label="Reputation">{reputation}</Descriptions.Item>
        <Descriptions.Item label="Reputation change day">
          {formatNumber(Math.abs(reputationChangeDay))}
          {getChangeSuffix(reputationChangeDay)}
        </Descriptions.Item>
        <Descriptions.Item label="Reputation change month">
          {formatNumber(Math.abs(reputationChangeMonth))}
          {getChangeSuffix(reputationChangeMonth)}
        </Descriptions.Item>
        <Descriptions.Item label="Reputation change quarter">
          {formatNumber(Math.abs(reputationChangeQuarter))}
          {getChangeSuffix(reputationChangeQuarter)}
        </Descriptions.Item>
        <Descriptions.Item label="Reputation change week">
          {formatNumber(Math.abs(reputationChangeWeek))}
          {getChangeSuffix(reputationChangeWeek)}
        </Descriptions.Item>
        <Descriptions.Item label="Reputation change year">
          {formatNumber(Math.abs(reputationChangeYear))}
          {getChangeSuffix(reputationChangeYear)}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ProfileStats;
