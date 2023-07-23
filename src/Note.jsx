import React from 'react'
// import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './Note.css'
const Note = (props) => {
 const handleEvent=()=>{
  props.deleteItem(props.id);
 }
  return (
    <>
    <div className='note'>
        <h2 className='noteTitle'>{props.title}</h2>
        <br/>
        <p className='noteDescription'>{props.description} </p>
        <IconButton aria-label="delete" size="large" onClick={handleEvent}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
    </>
  )
}

export default Note