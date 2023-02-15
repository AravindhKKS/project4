import React from "react";
import { useState, useContext } from "react";
import BookContext from "../context/book";

const BookCreate = () => {
  const [title, setTitle] = useState("");

  const { createBook } = useContext(BookContext);

  const handleCreate = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book </h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleCreate} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
