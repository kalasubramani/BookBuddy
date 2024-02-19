import { useEffect, useState } from "react";
import "./Account.css";
import { deleteReservation } from "../API";
import { fetchAllCheckedoutBooks } from "../API";
import Login from "./Login";
import { Snackbar } from "@mui/material";

const Account = ({ user, setToken }) => {
  const [reservedBooks, setReservedBooks] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  //get checkedout books for the user
  useEffect(() => {
    if (user.email) {
      try {
        const getAllCheckedoutBooks = async () => {
          const response = await fetchAllCheckedoutBooks();

          setReservedBooks(response);
        };
        getAllCheckedoutBooks();
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  //forms jsx element for each book
  const checkedoutBooks = reservedBooks.map((book) => {
    return (
      <div key={book.id} className="book">
        <img src={book.coverimage} className="coverimage" />
        <button onClick={() => handleBookReturn(book.id)}>
          Return this book
        </button>
      </div>
    );
  });

  //handle delete reservation
  function handleBookReturn(returnedBookId) {
    //call api to update book returned
    try {
      const response = deleteReservation(returnedBookId);
      //update booklist after api call
      updateReservedBooks(returnedBookId);
      setShowMessage(true);
    } catch (error) {
      console.log(error);
    }
  }

  //remove deleted reservation and update state
  function updateReservedBooks(returnedBookId) {
    //remove returned book from booklist
    const updatedBookList = reservedBooks.filter((book) => {
      return book.id !== returnedBookId;
    });
    //update state
    setReservedBooks(updatedBookList);
  }

  const renderReservedBooks = () => (
    <div className="reservedBookDiv">
      <h2>Email: {user.email}</h2>
      <hr />
      <Snackbar
        open={showMessage}
        autoHideDuration={6000}
        onClose={() => {
          setShowMessage(false);
        }}
        message="Return Accepted! Kindly place the book in the receptacle provided for returns."
      />

      {/* display books reserved by user */}
      {reservedBooks.length > 0 ? (
        <>
          <h4>You have checked out the following books...</h4>
          <div className="checkoutbooksDiv">{checkedoutBooks}</div>
        </>
      ) : (
        <p>
          {user.firstname}, Looks like you do not have any books checkedout at
          this time.
        </p>
      )}
    </div>
  );
  const renderLogin = () => <Login setToken={setToken} />;

  console.log("user", user);
  return user.email ? renderReservedBooks() : renderLogin();
};

export default Account;
