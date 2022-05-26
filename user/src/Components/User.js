import React from "react";

export default function User(props){
    const { users } = props;

    return(
        <div className="user-container">
            <h3 className="name">Name:  {users.fname} {users.lname}</h3>
            <p>Email: {users.email}</p>
            <pre>{JSON.stringify(users)}</pre>
        </div>
    )
}