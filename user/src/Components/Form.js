import React from "react";

export default function OnboardingForm(props) {
  const {
      values,
      submit,
      change,
      disabled,
      errors,
  } = props;

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
      const { name, value, checked, type } = evt.target;
      const newValue = type === "checkbox" ? checked: value;
      change(name, newValue)

  }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <h2>Add User Information</h2>
            
            <div className="errors">
                <div>{errors.fname}</div>
                <div>{errors.lname}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
            <div className="inputs">
                <label>First Name: 
                    <input
                        value={values.fname}
                        onChange={onChange}
                        name="fname"
                        type="text"
                    />
                </label>

                <label>Last Name: 
                    <input
                        value={values.lname}
                        onChange={onChange}
                        name="lname"
                        type="text"
                    />
                </label>

                <label>Email: 
                    <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="email"
                    />
                </label>

                <label>Password: 
                    <input
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                    />
                </label>

                <label className="terms">Terms of Service
                    <input 
                        name="terms"
                        type="checkbox"
                        onChange={onChange}
                        checked={values.terms}
                    />
                </label>
            </div>
            <button disabled={disabled} >Submit</button>
        </form>
    )
}