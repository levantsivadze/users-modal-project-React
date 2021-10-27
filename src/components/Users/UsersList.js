import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import User from "./User";

function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <User key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
