import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const App=()=>{
  
  const [addItem,setAddItem]=useState([]);

  const addnote=(note)=>{
    // alert("i am clicked...")
    setAddItem((oldVal)=>{
      return [...oldVal,note];
    })

  }
  const deleteon=(id)=>{
    setAddItem((oldVal)=>{
      return oldVal.filter((currdata,index)=>{
        return index!==id;
      })
    })
  }
  return (
<>
<Navbar/>
<CreateNote passNote={addnote}/>

{/* <Note/> */}
<div className='notehorizontal'>

{addItem.map((val,index)=>{
  return <Note  key={index} id={index} title={val.title} description={val.description} deleteItem={deleteon} />
})}
</div>
<Footer/>
</>
  );
}

export default App;
