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
                
            </div>
            <div className="inputs">
                <label>First Name: 
                    <input
                        //value={}
                        onChange={onChange}
                        name="fname"
                        type="text"
                    />
                </label>

                <label>Last Name: 
                    <input
                        //value={}
                        onChange={onChange}
                        name="lname"
                        type="text"
                    />
                </label>

                <label>Email: 
                    <input
                        //value={}
                        onChange={onChange}
                        name="email"
                        type="email"
                    />
                </label>

                <label>Password: 
                    <input
                        //value={}
                        onChange={onChange}
                        name="password"
                        type="text"
                    />
                </label>

                <label>Terms of Service
                    <input
                        name="terms"
                        type="checkbox"
                        onChange={onChange}
                        //checked={}
                    />
                </label>


            </div>
            <button disabled={disabled}>Submit</button>
        </form>
    )
}