import React from 'react'
import './Message.css'

const Message = () => {

    let mystyle = {color:"purple"}
  return (
    <div>
        <h1>Message Component</h1>
        <h1 style={{color:'blue'}}>Good Morning</h1>
        <h2 style={mystyle}>Good Afternoon</h2>
        <h3 className='box'>Good Evening</h3>
        <h4>Good Night</h4>
        <button className='btn btn-success'>Test</button>
    </div>
  )
}

export default Message;