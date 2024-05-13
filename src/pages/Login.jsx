import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    let emailRef =useRef ();
    let passRef =useRef ();
    const handlelogin=(e)=>{
    e.preventDefault();
    // console.log('running')
   
    
    let obj={
        email:emailRef.current.value,
        password:passRef.current.value
        // email:email,
        // password:password
    }
    console.log(obj)
    }
    
  return (
    <form className='w-50 m-auto mt-5 bg-secondary p-5'>
    <h3 className='text-center'>Login form</h3>
   
   
<div className="mb-3">

<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input  ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input ref={passRef} type="password" className="form-control" id="exampleInputPassword1" />
</div>
<div className="mb-3 form-check">
<input  type="checkbox" className="form-check-input" id="exampleCheck1" />
<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
<button type="login" className="btn btn-primary"  onClick={handlelogin}>Login</button>
 <p> do not have an account?<Link to={'/Signup'}> signup  </Link></p> 
</form>
  )
}

export default Login
