import React, { useState } from 'react'
import Cartcontext from './Cartcontext'

const Cartstate = (props) => {
    
    const [arr, setarr] = useState([]);
    console.log(arr)
    const addtocart=(ans) =>{
        // console.log("add to cart function")
        console.log(ans)
        setarr([...arr,ans])
    }
    const removefromcart=(ans) =>{
        console.log(ans)
        let ansArr=arr.filter((obj)=>obj.id!==ans.id)
        console.log(ansArr)
          setarr(ansArr)
    }
    const updatecartplus=(ans) =>{
        console.log(ans)
        let newobj = {
            ...ans,
            quantity:ans.quantity+1,
            price:ans.price+(ans.price/ans.quantity)
        
          }
          console.log(newobj)
          let Index=arr.findIndex((obj) => obj.id===ans.id)
          console.log(Index)
          let newArr=[...arr]
          newArr [Index] = newobj
          setarr(newArr)
        
        
    }
    const updatecartminus=(ans) =>{
        console.log(ans)
        let newobj = {
            ...ans,
            quantity:ans.quantity>1 ? ans.quantity-1 : ans.quantity,
            price:ans.quantity > 1 ? ans.price-(ans.price/ans.quantity) :ans.price
        
          }
          console.log(newobj)
          let Index=arr.findIndex((obj) => obj.id===ans.id)
          console.log(Index)
          let newArr=[...arr]
          newArr [Index] = newobj
          setarr(newArr)
    }
  return (
    <Cartcontext.Provider value={{addtocart,updatecartminus,updatecartplus,removefromcart,arr,setarr}}>
        {props.children}
    </Cartcontext.Provider>
  )
}

export default Cartstate
