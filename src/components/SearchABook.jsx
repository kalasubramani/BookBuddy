import { useState } from "react";
import "./SearchABook.css";

const SearchABook = ({ bookList, setFilteredBooks }) => {
  const [searchText, setSearchText] = useState("");
  const [matchingBooks, setMatchingBooks] = useState([]);

  function handleSearch(e) {
    //get searchtext from view and update it to useState
    setSearchText(e.target.value);

    //get all players that matches search text
    let matchedBooks = bookList.filter((book) => {
      return (
        book.title?.toLowerCase().indexOf(e.target.value?.toLowerCase()) !== -1
      );
    });

    //update useState to display count
    setMatchingBooks(matchedBooks);
    //update state to display only matching books
    setFilteredBooks(matchedBooks);
  } //handlesearch

  return (
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
        <span>
          {" "}
          &nbsp; Showing {matchingBooks.length} matches of {bookList.length}{" "}
          players.
        </span>
      ) : null}
    </div>
  );
}; //searchabook

export default SearchABook;
