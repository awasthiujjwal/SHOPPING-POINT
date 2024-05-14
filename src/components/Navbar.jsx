import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GiShoppingCart } from "react-icons/gi";
import { useRef } from 'react';
import Searchcontext from '../context/Searchcontext';
const Navbar = () => {


  let x= useContext(Searchcontext)
  console.log(x)
  let search= useRef()
 let handlechange = (e)=>{
  e.preventDefault()
  // console.log("handlechange")
  // console.log(search.current.value)
  let ans = search.current.value.toLowerCase()
  console.log(ans)
  x.setsearch(ans) 
 }

  
  return (
    <nav className="navbar navbar-expand-lg bg-warning ">
  <div className="container-fluid">
     <Link className="navbar-brand" to={'/'}>SHOPPING POINT</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <form className="d-flex ms-auto" role="search">
  <input onChange={handlechange} ref={search} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  {/* <button onClick={handlesearch}  className="btn btn-outline-success" type="submit">Search</button> */}
</form>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/contact'}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/signup'}>Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/add to cart'}><GiShoppingCart style={{fontSize:"30px"}}/></Link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>

  )
}

export default Navbar
