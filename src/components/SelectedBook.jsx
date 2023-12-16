import { Link, useParams } from "react-router-dom";
import "./SelectedBook.css";
import { useEffect, useState } from "react";
import { checkoutBook } from "../API";

const SelectedBook = ({ bookList, user }) => {
  const hasLoggedin = !!user?.email;

  //set useState to update the view after api call
  const [thisBook, setThisBook] = useState();

  //get the id from url
  const { id } = useParams();

  function handleCheckout() {
    const checkedoutBook = checkoutBook(thisBook.id);
    //update state with fresh data
    setThisBook(checkedoutBook);
  }

  //re-render the page everytime bookList is updated (during page refresh)
  useEffect(() => {
    const selectedBook = bookList?.find((book) => {
      return book.id === Number(id);
    });
    //update state with fresh data
    setThisBook(selectedBook);
  }, [bookList, id]);

  return (
    <div className="selectedBookDiv">
      {user.email ? (
        ""
      ) : (
        <p className="warning">
          {" "}
          You must be a registered user to checkout the book. Please login or
          Register as new user to checkout the book.
        </p>
      )}
      <img src={thisBook?.coverimage} alt="" className="coverImage" />
      <ul className="bookDetails">
        <li>
          <span className="bold">Title : </span>
          {thisBook?.title}
        </li>
        <li>
          <span className="bold">Author : </span>
          {thisBook?.author}
        </li>
        <li>
          <span className="bold">Book Description : </span>
          {thisBook?.description}
        </li>
        <li>
          <span className="bold">Available to checkout : </span>
          {thisBook?.available ? "Yes" : "No"}
        </li>
      </ul>
      {hasLoggedin && (
        <button
          type="submit"
          onClick={handleCheckout}
          className="checkout"
          disabled={!thisBook?.available}
        >
          Checkout this book
        </button>
      )}
      <Link to="/books" className="backtoallbooks">
        Back to all books
      </Link>
    </div>
  );
};

export default SelectedBook;
