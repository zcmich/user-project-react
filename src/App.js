import React from 'react';
import AddUser from './components/Users/Adduser';
import Userslist from './components/Users/UsersList';


function App() {
  return (
    <div>
      <AddUser/>
      <Userslist users={[]}/>
    </div>
  );
}

export default App;
