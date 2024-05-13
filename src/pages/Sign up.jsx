import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handlesignup=(e)=>{
e.preventDefault();
// console.log(name,email,password);
let obj={
  name:name,
  email:email,
  password:password

}
console.log(obj)

  }
  const namechanger=(e)=>{
    let namechanger= e.target.value;
    console.log(namechanger)
    setname(namechanger)
  }
  const handleemail=(e)=>{
    let handleemail= e.target.value;
    console.log(handleemail)
    setemail(handleemail)
  }
  const passwordchanger=(e)=>{
    let passwordchanger= e.target.value;
    console.log(passwordchanger)
    setpassword(passwordchanger)
  }
  return (
    <form className='w-50 m-auto mt-5 bg-secondary p-5'>
        <h3 className='text-center'>sign up form</h3>
       
        <div className="mb-3">
    
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input  onChange={namechanger} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={handleemail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={passwordchanger} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input  type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary"  onClick={handlesignup}>Submit</button>
  <p> Already have an account?<Link to={'/login'}> Login  </Link></p>
</form>

  )
}

export default Signup
