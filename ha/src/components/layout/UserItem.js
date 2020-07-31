import React from "react";

const UserItem = (props) => {
  const { id, login, avatar } = props.user;
  return (
    <div>
      <h2>{login}</h2>
      <img src={avatar} className="round-img" style={{ width: "60px" }}></img>
    </div>
  );
};

export default UserItem;
