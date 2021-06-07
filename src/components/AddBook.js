import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import BookForm from "./BookForm";

const AddBook = ({ history }) => {
  const { books, setBook } = useContext(BooksContext);
  const handleOnSubmit = (event) => {
    setBook([event, ...books]);
    history.push("/");
  };
  return (
    <React.Fragment>
      <BookForm handleSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
