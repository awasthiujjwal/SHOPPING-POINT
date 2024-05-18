import React, { useState } from 'react'
import AuthContext from './AuthContext'
const AuthState = (props) => {
    const [user, setuser] = useState({
        email:"",
        login:false
    });
   
  return (

   <AuthContext.Provider value={{}}>
    {props.children}
   </AuthContext.Provider>
  )
}

export default AuthState
