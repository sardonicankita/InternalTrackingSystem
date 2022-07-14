import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Template from './components/Template';
import Search from "./components/Search"
import Search2 from "./components/Search2"


function App() {
  
  return (
    <div className='fullscreen-container'>
      <div className='Navbar'>
        <Navbar/>
      </div>
        <Template/>
        <div className='search'>
           <Search/>
           {/* <Search2/> */}
        </div>
        </div>
    
  )
}

export default App;