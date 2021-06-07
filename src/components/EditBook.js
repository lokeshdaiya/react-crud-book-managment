import React, { useContext } from "react";
import { useParams } from "react-router";
import { BooksContext } from "../context/BooksContext";
import BookForm from "./BookForm";

export const EditBook = ({ history }) => {
  const { books, setBook } = useContext(BooksContext);
  const { id } = useParams();
  const bookToEdit = books.find((item) => item.id === id);
  const handleSubmit = (book) => {
    const filteredBooks = books.filter((item) => item.id !== id);
    setBook([book, ...filteredBooks]);
    history.push("/");
  };
  return (
    <>
      <BookForm book={bookToEdit} handleSubmit={handleSubmit} />
    </>
  );
};

export default EditBook;
