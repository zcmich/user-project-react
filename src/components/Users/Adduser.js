import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper"

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();


  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      console.log("input field empty");
      setError({
          title:'Invalid input',
          message: 'Please enter a valid name and Age'
      });
      return;
    }

    if (+enteredUserAge < 1) {
      console.log("age must be greater than 1");
      setError({
        title:'Invalid input',
        message: 'Age must be greater than 1'
    });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    // console.log(enteredUserName, enteredAge);
    // setEnteredUserName("");
    // setEnteredAge("");
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = (event) => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
      onConfirm={errorHandler}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            // value={enteredUserName}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
