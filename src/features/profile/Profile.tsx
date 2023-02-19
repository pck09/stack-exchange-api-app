import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../app/api";
import useApiRequest from "../../hooks/useApi";

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { callRequest, isLoading, data } = useApiRequest({
    request: fetchUser,
  });

  useEffect(() => {
    if (typeof id === "string") {
      callRequest(id);
    }
  }, [callRequest, id]);

  return <div>Profile</div>;
};

export default Profile;
