import React, {useState} from 'react';
import AddUser from './components/Users/Adduser';
import Userslist from './components/Users/UsersList';


function App() {
  const [usersList, serUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
      serUsersList((prevUserList) =>{
          return [...prevUserList, {name:uName, age:uAge, id:Math.random().toString()}];
      } )
  };

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <Userslist users={usersList}/>
    </div>
  );
}

export default App;
