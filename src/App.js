import React from "react";
import './App.css';
import NoteList from "./components/NoteList";

const App = () => {
 return (
    <>
    <div className="note-app">
       <NoteList />
    </div>
    </>
  );
}

export default App;
