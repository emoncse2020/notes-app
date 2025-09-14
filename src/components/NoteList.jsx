import Note from "./Note";

const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    <p className="text-center text-gray-500">No Notes Yet</p>;
  }
  return (
    <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote}></Note>
      ))}
    </div>
  );
};

export default NoteList;
