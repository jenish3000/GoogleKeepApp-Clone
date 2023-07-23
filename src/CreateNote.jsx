import React, { useState } from "react";
// import Button from '@mui/material/Button';
import AddIcon from "@mui/icons-material/Add";
import "./CreateNote.css";
const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setNote((oldVal) => {
      return {
        ...oldVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.passNote(note);
    setNote(() => {
      return {
        title: "",
        description: "",
      };
    });
  };
  const expandit = () => {
    setExpand(true);
  };
  const btonormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={btonormal}>
        <form className="form formnote" onSubmit={handleSubmit}>
         {expand?<input
          type="text"
          placeholder="Title"
          name="title"
          value={note.title}
          className="input titlenote"
          onChange={handleInput}
          />:null}
          <textarea
            placeholder="Write a note here ..."
            className="notearea"
            name="description"
            value={note.description}
            onClick={expandit}
            onChange={handleInput}
          />
{expand?
          <button className="submit_btn">
            <AddIcon className="plus_sign" />
          </button>
            :null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
