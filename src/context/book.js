import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBook = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updateBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(updateBook);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updateBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBook);
  };

  const createBook = async (title) => {
    const response = await axios.post(" http://localhost:3001/books", {
      title,
    });
    const updateBook = [...books, response.data];
    setBooks(updateBook);
  };

  const valueToShare = {
    books,
    createBook,
    deleteBookById,
    editBookById,
    fetchBook,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;

// export Provider can use any place to use the for method can import
