import { useEffect, useState } from "react";
import "./Account.css";
import { deleteReservation } from "../API";
import { fetchAllCheckedoutBooks } from "../API";

const Account = ({ user }) => {
  const [reservedBooks, setReservedBooks] = useState([]);

  //get checkedout books for the user
  useEffect(() => {
    try {
      const getAllCheckedoutBooks = async () => {
        const response = await fetchAllCheckedoutBooks();

        setReservedBooks(response);
      };
      getAllCheckedoutBooks();
    } catch (error) {
      console.log(error);
    }
  }, []);

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

  return (
    <div className="reservedBookDiv">
      <h2>Email: {user.email}</h2>
      <hr />

      {/* display books reserved by user */}
      {reservedBooks.length > 0 ? (
        <>
          <h4>You have checked out the following books...</h4>
          <div className="bookListDiv">{checkedoutBooks}</div>
        </>
      ) : (
        <p>
          {user.firstname}, Looks like you do not have any books checkedout at
          this time.
        </p>
      )}
    </div>
  );
};

export default Account;
