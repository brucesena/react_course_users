import React, { useState } from 'react';
import './App.css';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [ usersList, setUsersLIst] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersLIst(prevUsersList => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random.toString() }];
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
