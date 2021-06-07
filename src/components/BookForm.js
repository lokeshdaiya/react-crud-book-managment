import { uniqueId } from "lodash";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const BookForm = (props) => {
  const [book, setBook] = useState({
    bookname: props?.book?.bookname || "",
    author: props?.book?.author || "",
    quantity: props?.book?.quantity || "",
    price: props?.book?.price || "",
    date: props?.book?.date || "",
  });
  const { bookname, author, quantity, price, date } = book;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookname, author, quantity, price, date);
    props.handleSubmit({ ...book, id: uniqueId() });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    try {
      setBook((prev) => {
        return { ...prev, [name]: value };
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="bookname">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
