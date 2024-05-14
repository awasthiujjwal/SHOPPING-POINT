import React, { useState } from 'react'
import Searchcontext from './Searchcontext';

const Searchstate = (props) => {
    const [search, setsearch] = useState("");
    console.log(search)
  return (
    <Searchcontext.Provider value={ {search , setsearch}}>
        {props.children}
    </Searchcontext.Provider>
  )
}

export default Searchstate
