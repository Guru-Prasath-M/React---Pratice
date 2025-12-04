import  Axios  from 'axios'
import React from 'react'

const User = () => {
    let useHandler = ()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{console.log(resp.data)})
        .catch((err)=>{console.log(err)})
    }
  return (
    <div>
        <h2>User Component</h2>
        <button onClick={useHandler}>Get Users</button>
    </div>
  )
}

export default User;