import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userInput) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        {
          username: userInput.username,
          age: userInput.age,
          id: Math.floor(Math.random() * 1000).toString(),
        },
      ];
    });
  };

  let content = "";
  if (usersList.length > 0) {
    content = <UsersList users={usersList} />;
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {content}
    </div>
  );
}

export default App;
