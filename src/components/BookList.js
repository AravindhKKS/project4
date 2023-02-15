import React from "react";
import { useContext } from "react";
import BookContext from "../context/book";
import BookShow from "./BookShow";

const BookList = () => {
  const { books } = useContext(BookContext);
  const renderdBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderdBooks}</div>;
};

export default BookList;
