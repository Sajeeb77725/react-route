import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;

  let navigate = useNavigate();
  const showFriendDetails = () => {
    const path = `/friends/${id}`;
    navigate(path);
  };
  return (
    <div>
      <h3>Name: {name}</h3>
      <button onClick={showFriendDetails}>
        {username}: {id}
      </button>
    </div>
  );
};

export default Friend;
