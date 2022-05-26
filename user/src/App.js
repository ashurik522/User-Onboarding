import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import axios from 'axios'
import * as yup from 'yup'
import User from './Components/User';
import React, { useState, useEffect } from 'react'
import schema from './Validation/Schema';

const initialFormValues = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  terms: false,
};
const initialFormErrors = {
  fname: '',
  lname: '',
  email: '',
  password: '',
};
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser )
    .then(res => {
      setUsers([res.data, ...users])
      console.log(res)
    })
    .catch(err => console.error(err))
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ""}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))

  }
 
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  const submitForm = () => {
    const newUser = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    };
    postNewUser(newUser);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header><h1>Onboarding Form</h1></header>
      <Form 
        submit={submitForm}
        change={inputChange}
        disabled={disabled}
        errors={formErrors}
        values={formValues}
      />
      {users.map((user)=>{
        return <User users={user} key={user.id}/>})}
      
    </div>
  );
}

export default App;
