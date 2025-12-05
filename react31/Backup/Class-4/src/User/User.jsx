import Axios from 'axios';
import React, { useState } from 'react';

const User = () => {

  const [users, setUsers] = useState([]);

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

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
