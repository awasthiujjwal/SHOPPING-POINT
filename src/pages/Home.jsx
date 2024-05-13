import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Cartcontext from '../context/Cartcontext';
 const Home = (props) => {
 let ctx =useContext(Cartcontext)
 console.log(ctx)
  const [arr, setarr] = useState([]);
  async function fetchproducts(){
    let response= await fetch ('https://dummyjson.com/products?skip=0&limit=100')
    let data= await response.json();
    console.log(data.products)
    setarr (data.products)
  }
   useEffect(()=>{
    fetchproducts();
   },[])
   const handlecart=(ans)=>{
   ans.quantity=1
   let itemexists= ctx.arr.find((ele)=>ele.id===ans.id)
   console.log(itemexists)

   if(!itemexists){
    ctx.setarr([...ctx.arr,ans])
   }
    // console.log(ans)
  
     
   }
  return (
    <div className='container-fluid bg-dark mt-4'>
      <div className="row row-cols-3">
      {arr.map((obj)=>{
        return<div key={obj.id} className="card m-2" style={{width: '18rem'}}>
  <img style={{height:"200px"}} src={obj.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{obj.title}</h5>
    <p className="card-text">{obj.price}</p>
    <button  onClick={()=>{handlecart(obj)}}   className="btn btn-success">Add to cart</button>
    <Link to={'/single' } state={obj}className="btn btn-primary ms-2">View Detail</Link>
  </div>
</div>


      })

      }
      </div>
    
    </div>
  )
}

export default Home
