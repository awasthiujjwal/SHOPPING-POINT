
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Signup from './pages/Sign up';
import Login from './pages/Login';
import Singlepage from './pages/Singlepage';
import Addtocart from './pages/Add to cart ';

// import { useState } from 'react';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/single' element={<Singlepage/>}/>
        <Route path='/add to cart'element={<Addtocart />}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
