import _ from "lodash";
import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import Book from "./Book";

const BookList = (props) => {
  const { books, setBook } = useContext(BooksContext);
  const handleBookDelete = (book) => {
    const tempBooks = [...books];
    tempBooks.splice(books.indexOf(book), 1);
    setBook([...tempBooks]);
  };
  return (
    <>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book, i) => (
            <Book book={book} key={i} handleBookDelete={handleBookDelete} />
          ))
        ) : (
          <p className="message">No Books available</p>
        )}
      </div>
    </>
  );
};

export default BookList;
