import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Book = ({ book, handleBookDelete }) => {
  const history = useHistory();
  const handleDelete = () => {
    handleBookDelete(book);
  };

  return (
    <Card styles={{ width: "18rem" }} className="book">
      <Card.Body>
        <Card.Title>{book.bookname}</Card.Title>
        <div className="book-details">
          <div>Author: {book.author}</div>
        </div>

        <Button
          variant="primary"
          onClick={() => history.push(`/edit/${book.id}`)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
