// import React, { useState } from 'react'

// const Message = () => {
//     let [Msg , setMsg] = useState("Hii...")
//     let gmHandler = ()=>{
//         setMsg("Good Morning")
//     }
//     let gaHandler = ()=>{
//         setMsg("Good Afternoon")
//     }
//     let gnHandler = ()=>{
//         setMsg("Good Night")
//     } 
//   return (
//     <div>
//         <h1>Message Component</h1><hr />
//         <h3>Message: {Msg}</h3>
//         <button onClick={gmHandler}>GM</button>
//         <button onClick={gaHandler}>GA</button>
//         <button onClick={gnHandler}>GN</button>
//     </div>
//   )
// }

// export default Message;



import React, { useState } from 'react'

const Message = () => {
    let [state , setState] = useState("Hii...")
    let updateHandler = (msg)=>{
        setState(msg)
    }
  return (
    <div>
        <h1>Message Component</h1><hr />
        <h3>Message: {state}</h3>
        <button onClick={updateHandler.bind(null,"GM")}>GM</button>
        <button onClick={updateHandler.bind(null,"GA")}>GA</button>
        <button onClick={updateHandler.bind(null,"GN")}>GN</button>
    </div>
  )
}

export default Message;