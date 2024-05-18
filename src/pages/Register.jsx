import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Register = () => {
    let navigate= useNavigate()

    let arr = JSON.parse(localStorage.getItem('signup')) || [];
    console.log(arr)
    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();
    let AddressRef= useRef();
    let phoneRef= useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        let obj={
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            Address: AddressRef.current.value,
            phone: phoneRef.current.value,
           
        }
        console.log(obj)
        if(obj.name && obj.email && obj.password && obj.Address && obj.phone){
            arr.push(obj);
            console.log(arr)
            localStorage.setItem('signup',JSON.stringify(arr))
            navigate('/Login')
        }
        else{
            alert('user detail can not be blank')
        }
        
    }
  return (
    <div style={{backgroundColor:"orange", height:"100vh", paddingTop:"20px"}}>
      <form action="" className='form'> <br />
        <label htmlFor="">Name</label> <br />
        <input type="text" ref={nameRef}/> <br />
        <label htmlFor="">Email</label> <br />
        <input type="email" ref={emailRef} /> <br />
        <label htmlFor="">Password</label> <br />
        <input type="password" ref={passwordRef}/> <br />
        <label htmlFor="">Address</label> <br />
        <input type="text" ref={AddressRef}/> <br />
        <label htmlFor="">PhoneNO.</label> <br />
        <input  type="number" ref={phoneRef}/> <br />
        <br />
        <button  style={{border:"none", height:"50px ", width:"100px"}} onClick={handleSubmit}>submit</button> <br />
      </form>
    </div>
  )
}

export default Register
