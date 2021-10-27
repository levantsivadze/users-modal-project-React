import React from "react";

function User(props) {
  return <li key={props.id}>{`${props.username} (${props.age} years old)`}</li>;
}

export default User;
