import { useState } from 'react';
import './SearchABook.css'

const SearchABook = ({bookList,setFilteredBooks})=>{

  const [searchText,setSearchText]=useState("");
  const [matchingBooks,setMatchingBooks] = useState([]);

  function handleSearch(e){

    console.log("SearchABook  bookList : ",bookList)

    //get searchtext from view and update it to useState
    setSearchText(e.target.value)
    console.log(searchText)

    //get all players that matches search text
    let matchedBooks=bookList.filter((book)=>{
      // console.log("book.name?.toLowerCase() : " ,book.title);
        return (book.title?.toLowerCase().indexOf(e.target.value?.toLowerCase()) !== -1)
        })
    console.log("searchText : ",searchText,"matchedBooks  ",matchedBooks)
     //update useState to display count
    setMatchingBooks(matchedBooks);
    //update state to display only matching books 
    setFilteredBooks(matchedBooks);

   } //handlesearch
 
 

  return (  
  <div> 
    <p> Looking for something specific? Search a Book here...</p>
  <label  className='search'> Search book : <input type='text' value={searchText} onChange={handleSearch}/></label> 
  {
    searchText.length>0 ? 
    <span> &nbsp;
    Showing {matchingBooks.length} matches of {bookList.length} players.
    </span>
    :null
  }
</div>
  )
 }//searchabook

export default SearchABook;