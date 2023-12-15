import axios from "axios";
import { useEffect, useState } from "react";
import './Account.css'


const Account = ({user }) => {
      
    const [reservedBooks,setReservedBooks] = useState([])   
  
    // if(!user.books){
    //     return null
    // }
 
    //get checkedout books for the user
  useEffect(()=>{
    const loggedInToken = window.localStorage.getItem("token");
      console.log("fetching checked out books....")
   try{  
        const fetchChekoutBooks = async ()=>{
            const response = await axios.get("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/",
            {              
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${loggedInToken}`,
                }             
            });

            console.log("handleCheckout response  ", response.data);
            setReservedBooks(response.data.reservation);
        }//fetchChekoutBooks
        fetchChekoutBooks();
      }catch(error){
          console.log(error)
      }
  },[])

  console.log("reserved books...",reservedBooks)

  const checkedoutBooks= reservedBooks.map((book)=>{
         return <li key={book.id}>{book.title} <button onClick={() => handleBookReturn(book.id)}>Return this book</button></li>
  })

  function handleBookReturn(returnedBookId){
    console.log("handleBookReturn event fired for book  ",returnedBookId);
    const returnedBook = reservedBooks.find((book)=>{
        return book.id === Number(returnedBookId)
    });
    console.log(" returnedBook ",returnedBook);

    //call api to update book returned
    try{
      console.log("calling deleteReservation api")
      const deleteReservation = async ()=>{ 
        const loggedInToken = window.localStorage.getItem("token");
        const response = await axios.delete(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${returnedBookId}`,
        {              
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loggedInToken}`,
          }             
      }
        );
        console.log("deleteReservation response  ",response.data);
      }
       deleteReservation();
       //update booklist after api call
       updateReservedBooks(returnedBookId);
    }catch(error){
      console.log(error);
    }
  }

  function updateReservedBooks(returnedBookId){
    //remove returned book from booklist
    const updatedBookList = reservedBooks.filter((book)=>{
        return book.id !== returnedBookId;
    });
    //update state
    setReservedBooks(updatedBookList);
  }
    
    return(
        <div className="reservedBookDiv">
            <h1>Account</h1>           
            <hr/>
            <h2>Email: {user.email}</h2>
            <h4>This could be a good place to show checked out books...</h4>
            {/* display books reserved by user */}
            <ul>
                {checkedoutBooks}
            </ul>
           
        </div>
    )
}

export default Account