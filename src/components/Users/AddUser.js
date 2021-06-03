import React, {useState, Fragment} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button/Button'
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();    
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 ){
      setError({title: 'Invali input', message: 'Please enter valid values for name and age (non-empty)'});
      return; 
    }

    if (+enteredAge < 1){
      setError({title: 'Invali age', message: 'Please enter valid value for age (>0)'});
      return;
    }
    console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  }

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (    
    <Fragment>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}></ErrorModal>}
      <Card className={classes.input}>      
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" onChange={userNameChangeHandler} value={enteredUserName}/>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
        <Button onClick={addUserHandler}>Add user</Button>
      </form>
    </Card>
    </Fragment>
    
  );
}

export default AddUser;