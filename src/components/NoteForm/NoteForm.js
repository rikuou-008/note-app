import React, {useState, useEffect, useRef} from "react";

const NoteForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
      setInput(e.target.value);
    }

    const handleSubmit = e => {
      e.preventDefault();

        props.onSubmit({
           id: Math.floor(Math.random() * 10000),
           text: input
          });

      setInput('')
  }

  return (
   <form className="note-form" onSubmit={handleSubmit}>
     {props.edit ? (
       <>
     <input
       placeholder="Update your item"
       value={input}
       onChange={handleChange}
       name="text"
       ref={inputRef}
       className="note-input edit"
       />
       <button className="note-button edit">Update</button>
     </>
     ) : (
        <>
        <input
         placeholder="Add a note"
         value={input}
         onChange={handleChange}
         name="text"
         className="note-input"
         ref={inputRef}
         />
        <button className="note-button" onclick={handleSubmit}>Add note</button>
       </>
       )}
   </form>
)
}

export default NoteForm;