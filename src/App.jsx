import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    const confrimDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confrimDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };
  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center"> 📝 Notes App</h2>

        <NoteForm notes={notes} setNotes={setNotes} />

        {notes.length === 0 ? (
          <p className="mt-4 text-center text-purple-300">No Notes Yet</p>
        ) : (
          <NoteList notes={notes} deleteNote={deleteNote} />
        )}
      </div>
    </>
  );
};

export default App;
