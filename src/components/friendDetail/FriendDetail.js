import React from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const params = useParams();
  return (
    <div>
      <h3>Information Of a Bondhu: {params.FriendId}</h3>
    </div>
  );
};

export default FriendDetail;
