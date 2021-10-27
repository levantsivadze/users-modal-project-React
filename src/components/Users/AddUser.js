import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  const emptyInput = {
    username: '',
    age: ''
  }

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((userInput) => {
      return { ...userInput, [name]: value };
    });
  };

  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };

  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };

  const userValidation = (userInput) => {
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age (non-empty values)",
      });
      return false;
    }

    if (+userInput.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0 )",
      });
      return false;
    }
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (userValidation(userInput) === false) return;

    props.onAddUser(userInput);
    console.log(userInput.username, userInput.age);
    setUserInput(emptyInput);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={userInput.username}
            onChange={userInputHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            name="age"
            type="number"
            value={userInput.age}
            onChange={userInputHandler}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
