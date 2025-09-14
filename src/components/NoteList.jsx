const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    <p className="text-center text-gray-500">No Notes Yet</p>;
  }
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${
            note.priority === "High"
              ? "border-l-red-500"
              : note.priority === "Medium"
              ? "border-l-yellow-500"
              : note.priority === "Low"
              ? "border-l-orange-500"
              : "border-l-green-400"
          }`}
        >
          <h2 className="text-lg font-bold">{note.title}</h2>
          <p className="text-sm text-gray-500">
            <strong>Category: </strong>
            {note.category}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Priority: </strong>
            {note.priority}
          </p>
          <p className="mt-2">{note.description}</p>
          <button
            className="mt-3 text-red-600 cursor-pointer hover:text-red-800 transition"
            onClick={() => deleteNote(note.id)}
          >
            Delete👉🏻🗑️
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
