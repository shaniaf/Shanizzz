import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: "shaniaf",
        avatar: "https://avatars0.githubusercontent.com/u/12611838?v=4",
      },
      {
        id: 2,
        login: "mojombo",
        avatar: "https://avatars0.githubusercontent.com/u/1?v=4",
      },
      {
        id: 3,
        login: "oferRounds",
        avatar: "https://avatars3.githubusercontent.com/u/1477963?v=4",
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default Users;
