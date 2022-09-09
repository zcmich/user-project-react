import React from 'react';
import classes from './UsersList.module.css'
import Card from '../UI/Card'

const Userslist = (props) => {

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li>
                        {user.name} ({user.age} years old )
                    </li>
                ))}
            </ul>
        </Card>
    );

};

export default Userslist;