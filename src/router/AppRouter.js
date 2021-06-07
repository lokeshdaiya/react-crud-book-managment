import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import EditBook from "../components/EditBook";
import Header from "../components/Header";
import { BooksContext } from "../context/BooksContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppRouter = () => {
  const [books, setBook] = useLocalStorage("books", []);
  return (
    <BrowserRouter>
      <Header></Header>
      <BooksContext.Provider value={{ books, setBook }}>
        <Switch>
          <Route component={BookList} path="/" exact={true} />
          <Route component={AddBook} path="/add" />
          <Route component={EditBook} path="/edit/:id" />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BooksContext.Provider>
      {/* <Switch>
        <Route
          render={(props) => (
            <BookList {...props} books={books} setBook={setBook} />
          )}
          path="/"
          exact={true}
        ></Route>
        <Route
          path="/add"
          render={(props) => (
            <AddBook {...props} books={books} setBook={setBook} />
          )}
        ></Route>

        <Route
          path="/edit/:id"
          render={(props) => (
            <EditBook {...props} books={books} setBook={setBook} />
          )}
        ></Route>
        <Route component={() => <Redirect to="/" />} />
      </Switch> */}
    </BrowserRouter>
  );
};

export default AppRouter;
