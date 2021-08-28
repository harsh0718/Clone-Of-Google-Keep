import React, { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputElement = (event) => {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const addEvent = (event) => {
    if (note.title === "" && note.content === "") {
      alert("Please Fill the Details");
    } else {
      event.preventDefault();
      props.PassNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };
  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            placeholder="Title"
            autoComplete="off"
            name="title"
            value={note.title}
            onChange={InputElement}
            required
          />
          <textarea
            rows=""
            cols=""
            placeholder="Write A Note..."
            name="content"
            value={note.content}
            onChange={InputElement}
            required
          />
          <button onClick={addEvent}> + </button>
        </form>
      </div>
    </>
  );
};
export default CreateNote;
