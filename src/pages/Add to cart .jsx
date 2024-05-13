import React from 'react'
import { useContext } from 'react'
import Cartcontext from '../context/Cartcontext'

const Addtocart  = (props) => {
  const ctx =useContext(Cartcontext)
  console.log(ctx.arr)
  const handledelete=(ans)=>{
    // console.log(ans)
    ctx.removefromcart(ans)
  }
const remove =(ans)=>{
  console.log(ans)
  ctx.updatecartminus(ans)
}
const add =(ans)=>{
  console.log(ans)
  ctx.updatecartplus(ans)
}
 
 
  return (
    <div className='text-truncate'>
  
     <table class="table">
  <thead>
    <tr>
      <th scope="col">images</th>
      <th scope="col">title</th>
      <th scope="col">quantity</th>
      <th scope="col">price</th>
      <th scope="col">Remove products</th>
    </tr>
  </thead>
  <tbody>
   
    {ctx.arr.map((obj)=>{
  return  <tr>
  <th scope="row"><img style={{height:"100px ",width:"100px"}} src={obj.thumbnail} alt="" /></th>
  <td>{obj.title}</td>
  <td> <button onClick={()=>{remove(obj)}} className='btn btn-success' >-</button>{obj.quantity}<button onClick={()=>{add(obj)}} className='btn btn-success'>+</button></td>
  <td>{obj.price}</td>
  <td><button onClick={()=>{handledelete(obj)}}  className='btn btn-danger'>DELETE</button></td>
</tr>

 })
}
 
   
  </tbody>
</table>
    
     
  
    </div>
  )
}

export default Addtocart 
