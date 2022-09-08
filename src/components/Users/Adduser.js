import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";


const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            console.log('input field empty')
            return;
        }

        if(+enteredAge <1 ){
            console.log('age must be greater than 1')
            return;
        }

        console.log(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name</label>
                <input type="text" 
                       id="username" 
                       value={enteredUserName} 
                       onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age (years)</label>
                <input type="number" 
                       id="age" 
                       value={enteredAge} 
                       onChange={ageChangeHandler}></input>
                <Button type="submit"> Add User  </Button>
            </form>
        </Card>

    );
};

export default AddUser;