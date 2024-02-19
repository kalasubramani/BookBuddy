import { useState } from "react";
import "./SearchABook.css";
import { useNavigate } from "react-router-dom";

const SearchABook = ({ bookList }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();

  function handleSearch(e) {
    //get searchtext from view and update it to useState
    setSearchText(e.target.value);

    //get all players that matches search text
    let filteredBooks = bookList.filter((book) => {
      return (
        book.title?.toLowerCase().indexOf(e.target.value?.toLowerCase()) !== -1
      );
    });

    //update useState to display count
    setFilteredBooks(filteredBooks);
  } //handlesearch

  //form jsx to display books
  const bookData = filteredBooks?.map((book) => {
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
      <div className="searchbar">
        <p> Looking for something specific? Search a Book here...</p>
        <label className="search">
          {" "}
          &#x1F50E;
          <input
            type="text"
            value={searchText}
            placeholder="SEARCH"
            onChange={handleSearch}
            className="searchBox"
          />
        </label>
        {searchText.length > 0 ? (
          <p>Found {filteredBooks.length} matches.</p>
        ) : null}
      </div>
      {bookData?.length > 0 && searchText.length > 0 && (
        <div className="searchListDiv">{bookData}</div>
      )}
    </>
  );
}; //searchabook

export default SearchABook;
