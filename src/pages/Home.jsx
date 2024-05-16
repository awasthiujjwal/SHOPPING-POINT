import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Cartcontext from '../context/Cartcontext';
import Searchcontext from '../context/Searchcontext';
import itemArr from '../components/Itemlists';


 const Home = (props) => {
  
  let x =useContext(Searchcontext)
  console.log(x.search)
 let ctx=useContext(Cartcontext)
 console.log(ctx)
  const [arr, setarr] = useState([]);

  let filteredArr = arr.filter((ele)=>ele.title.toLowerCase().includes(x.search))
  console.log(filteredArr)
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
    <div>
    <div className='row text-center'>
      <div className='col-2 mt-5'>
      <h4>CATEGORY</h4>

      <ul class="list-group">
 
 
      {itemArr.map((ele)=>{
        return   <li class="list-group-item">{ele}</li>
        
      })}
</ul>
      

   
</div>
<div className='col-10'>
      <div className='container-fluid bg-dark mt-4'>
      <div className="row d-flex justify-content-center row-cols-3">
      {filteredArr.map((obj)=>{
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
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    {/* <li class="page-item"><a class="page-link" href="#">4</a></li> */}
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
      </div>
      
      </div >

      





    </div>
    
  )
}

export default Home
