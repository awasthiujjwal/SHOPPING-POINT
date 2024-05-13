import React from 'react'
import { useLocation } from 'react-router-dom'

const Singlepage = () => {
    let location=useLocation();
    console.log (location.state)
  return (
    <div className="first">
    <div className='fourth'>
    <img src={location.state.thumbnail} alt=""  />
    <div className='imagebox'>
    {location.state.images.map((arr)=>{
      return < img key={arr} src={arr} alt="" />
    })}
    </div>
    </div>
    <div className='third'>
    <p><span> <b>Title:</b></span>{location.state.title}</p> 

   

    <p> <span><b>Price:</b></span>{location.state.price}</p>
    <p><span><b>Rating:</b></span>{location.state.rating}</p>
    <p><span><b>Stock:</b></span>{location.state.stock}</p>
    <p><span> <b>Discount:</b></span>{location.state.discountPercentage}</p>
    <p><span><b>Description:</b></span>{location.state.description}</p>
   
    </div>
    </div>
   
  )
}

export default Singlepage
