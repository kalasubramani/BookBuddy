import { useEffect, useState } from "react";
import "./Books.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchABook from './SearchABook'

const Books = ({bookList}) => {

  const bookData = bookList.map((book)=>{
     return <li key={book.id}> <Link to={`/books/${book.id}`}> {book.title}</Link></li>
  })

  return (
    <div className="booksPageDiv">
      <h1>Books</h1>
      {/* search a book  */}
      <SearchABook bookList={bookList}/>
      <h3>We should see our books here!</h3>
      <ul>
        {bookData}
      </ul>
    </div>
  );
};

export default Books;
