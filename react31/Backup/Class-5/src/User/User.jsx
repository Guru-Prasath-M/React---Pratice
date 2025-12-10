import Axios from 'axios';
import React, { useState } from 'react';

const User = () => {

  const [users, setUsers] = useState([]); //To manage the state in functional component

  let useHandler = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        console.log(resp.data);
        setUsers(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>User Component</h2>
      <button onClick={useHandler}>Get Users</button>

      <pre>{JSON.stringify(User)}</pre>
      <table border={2}>
        <thead>
          <th>User id</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </thead>
        <tbody>
          {
            users.map((user)=>{
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default User;
