import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const ContactApp = () => {
    let [contacts,setContacts] = useState([])
    useEffect(()=>{
        Axios.get("")
        .then((resp)=>{setContacts(resp.data)})
        .catch(()=>{})
    },[])
  return (
    <div>
        <h2>ContactApp Component</h2>
    </div>
  )
}

export default ContactApp;