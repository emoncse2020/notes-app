import { useState } from "react";

const NoteForm = () => {
  //   const [title, setTitle] = useState("");
  //   const [priority, setSetpriority] = useState("Select A Priority");
  //   const [category, setCategory] = useState("Select A Category");
  //   const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    category: "Select A Category",
    priority: "Selecet A Priority",
    description: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority
        </label>
        <select
          type="text"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        >
          <option>Select A Priority</option>
          <option value="High">🔴 High</option>
          <option value="Medium">🟡 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          Category
        </label>
        <select
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select A Category</option>
          <option value="work">🏬 Work</option>
          <option value="Personal">💻 Personal</option>
          <option value="Ideas">💡Ideas</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>
        <textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        ></textarea>
      </div>
      <button className="w-full bg-purple-400 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
