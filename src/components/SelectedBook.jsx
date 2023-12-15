import { Link, useParams } from "react-router-dom";
import "./SelectedBook.css";
import axios from "axios";
import { useEffect, useState } from "react";

const SelectedBook = ({ bookList }) => {

    //set useState to update the view after api call
    const [thisBook, setThisBook] = useState();
  console.log("SelectedBook component load....", bookList);
    
 // if(selectedBook){   setThisBook(selectedBook); }

      //get the id from url
      const { id } = useParams();
      console.log("selected bookid  ", id);

 
  console.log("selectedBookDetails  ", thisBook);

  function handleCheckout() {
    const loggedInToken = window.localStorage.getItem("token");
    console.log("handleCheckout event fired ", "selectedBook.id ", selectedBook.id);
    try {
      //update db with availability = false
      const checkedoutBook = async () => {
        const response = await axios.patch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${selectedBook.id}`,
          {
            //send obj with updated data
            available: false,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${loggedInToken}`,
            },
          }
        );
        console.log("handleCheckout response  ", response.data.book);
        //update state with fresh data
        setThisBook(response.data.book);
        console.log("thisBook after checkout api  " ,thisBook);
      }; //checkoutbook
      checkedoutBook();
    } catch (error) {
      console.log(error);
    }
  }

  //re-render the page everytime bookList is updated (during page refresh)
  useEffect(() => {
  const selectedBook = bookList?.find((book) => {
    console.log("bookList.id  ", book.id);
    return book.id === Number(id);
  });
      //update state with fresh data
      setThisBook(selectedBook);
  },[bookList,id])

  return (
    <div className="selectedBookDiv">
      <p>selected book.....</p>
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
          {thisBook?.available?.toString() ?? "-"}
        </li>
      </ul>
      <button type="submit" onClick={handleCheckout} className="checkout" disabled={!(thisBook?.available ?? false)}>
        Checkout this book
      </button>
    
      <Link to="/books">Back to all books</Link>
    </div>
  );
};

export default SelectedBook;
