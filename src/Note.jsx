import React from "react";
// import DeleteOutlineIcon from "@material-ui/icons/Delete";
const Note = (props) => {
  const deleteEvent = () => {
    props.Passfun(props.id);
  };
  return (
    <>
      <div className="note">
        <h2>{props.title}</h2>
        <p> {props.content} </p>
        <button onClick={deleteEvent}>Delete</button>
      </div>
    </>
  );
};
export default Note;
