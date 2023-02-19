import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../../app/api";
import useApiRequest from "../../hooks/useApi";
import ProfileBadges from "./components/ProfileBadges";
import ProfileInfo from "./components/ProfileInfo";
import ProfileStats from "./components/ProfileStats";

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { callRequest, isLoading, data, error } = useApiRequest({
    request: fetchUser,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof id === "string") {
      callRequest(id);
    }
  }, [callRequest, id, navigate]);

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error, navigate]);

  return (
    <>
      {data && (
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <ProfileInfo
              creationDate={data.creation_date}
              lastAccessDate={data.last_access_date}
              name={data.display_name}
              profileImage={data.profile_image}
              dataIsLoading={isLoading}
            />
          </Col>
          <Col md={12} span={24}>
            <ProfileStats
              reputation={data.reputation}
              reputationChangeDay={data.reputation_change_day}
              reputationChangeMonth={-5}
              reputationChangeQuarter={data.reputation_change_quarter}
              reputationChangeWeek={data.reputation_change_week}
              reputationChangeYear={data.reputation_change_year}
              dataIsLoading={isLoading}
            />
          </Col>
          <Col md={12} span={24}>
            <ProfileBadges
              bronze={data.badge_counts.bronze}
              gold={data.badge_counts.gold}
              silver={data.badge_counts.silver}
              dataIsLoading={isLoading}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Profile;
