import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';
import './Navbar.css'

const Navbar=()=>{
  
    return (
        <><header className='container'>
      <div className='navbar'>
        <DehazeIcon className='icon'/>
        <img src='./qa.png' className='logo' alt='error'/>
        <span className='webname'>Jb Keep</span>
        </div>  
     
        </header>
        </>
    );
  }

export default Navbar