import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, description }));

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddBook;
