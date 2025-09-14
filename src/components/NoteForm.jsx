import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
  //   const [title, setTitle] = useState("");
  //   const [priority, setSetpriority] = useState("Select A Priority");
  //   const [category, setCategory] = useState("Select A Category");
  //   const [description, setDescription] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    if (!formData.title || !formData.description) return;

    // create note object
    const newNote = {
      id: Date.now(),
      ...formData,
    };
    // add notes to the state
    setNotes([newNote, ...notes]);
    // reset formData
    setFormData({
      title: "",
      priority: "Select A Priority",
      category: "Select A category",
      description: "",
    });
  };
  return (
    <>
      {/* toggle button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-900 py-2 rounded-lg cursor-pointer hover:bg-purple-100 hover:border-purple-200 transition mb-4"
      >
        {isFormVisible ? "Hide Form ❌" : "Add new Note ➕"}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label={"Title"}
            name={"title"}
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label={"Priority"}
            name={"priority"}
            value={formData.priority}
            onChange={handleChange}
            options={[
              {
                value: "",
                label: "Select A Priority",
              },
              {
                value: "High",
                label: "High",
              },
              {
                value: "Medium",
                label: "Medium",
              },
              {
                value: "Low",
                label: "Low",
              },
            ]}
          />

          {/* <div className="mb-4">
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
          </div> */}
          <SelectInput
            label={"Category"}
            name={"category"}
            onChange={handleChange}
            value={formData.category}
            options={[
              { value: "", label: "Select A Category" },
              { value: "Work", label: "🏬 Work" },
              { value: "Personal", label: "💻 Personal" },
              { value: "Ideas", label: "💡Ideas" },
            ]}
          />
          <TextAreaInput
            label={"Description"}
            name={"description"}
            onChange={handleChange}
            value={formData.description}
          />
          <button
            type="submit"
            className="w-full bg-purple-400 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
