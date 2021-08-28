import React, { useState } from "react";
import "./index.css";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Keep = () => {
  const [AddItem, SetItem] = useState([]);
  const AddNote = (note) => {
    SetItem((Prevalue) => {
      return [...Prevalue, note];
    });
  };
  const DeleteNote = (id) => {
    SetItem((oldData) => {
      return oldData.filter((val, ind) => {
        return ind !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <CreateNote PassNote={AddNote} />
      {AddItem.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            Passfun={DeleteNote}
          />
        );
      })}
    </>
  );
};
export default Keep;
