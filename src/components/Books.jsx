import { useState } from "react";
import "./Books.css";
import { useNavigate } from "react-router-dom";
import SearchABook from "./SearchABook";

const Books = ({ bookList }) => {
  const navigate = useNavigate();
  //to refresh view when books are filtered through search - useState must be undefined to get bookData
  const [filteredBooks, setFilteredBooks] = useState();

  //form jsx to display books
  const bookData = (filteredBooks ?? bookList)?.map((book) => {
    return (
      <div
        key={book.id}
        className="booklist"
        onClick={() => {
          navigate(`/books/${book.id}`);
        }}
      >
        <img src={book.coverimage} className="coverimage" />
      </div>
    );
  });

  return (
    <>
      <div className="bookListDiv">{bookData}</div>
      {bookData?.length > 0 ? "" : "No Books to display."}
    </>
  );
};

export default Books;
