import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import axios from 'axios'
import * as yup from 'yup'
import React, { useState } from 'react'

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false,
};
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = () => {

  }

  const validate = (name, value) => {

  }

  const inputChange = (name, value) => {

  }

  const submitForm = () => {

  }

  return (
    <div className="App">
      <header><h1>Onboarding Form</h1></header>
      <Form 
        sumbit={submitForm}
        change={inputChange}
        disabled={disabled}
        errors={formErrors}
        values={formValues}
      />
    </div>
  );
}

export default App;
