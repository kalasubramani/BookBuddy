import { useState } from 'react';
import './SearchABook.css'

const SearchABook = ({bookList})=>{

  const [searchText,setSearchText]=useState("");
  const [matchingBooks,setMatchingBooks] = useState([]);

  function handleSearch(e){
    //get searchtext from view and update it to useState
    setSearchText(e.target.value)
    console.log(searchText)

    //get all players that matches search text
    // let matchingBooks=bookList.filter((book)=>{
    //   return book.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
 }//handlesearch
  //update useState
  setMatchingBooks(matchingBooks);
 

  return (  
  <div> 
    <p> Looking for something specific? Search a Book here...</p>
  <label  className='search'> Search book : <input type='text' value={searchText} onChange={handleSearch}/></label> 
  {
    searchText.length>0 ? 
    <span> &nbsp;
    {/* Showing {matchingBooks.length} matches of {bookList.length} players. */}
    </span>
    :null
  }
</div>
  )
 }//searchabook

export default SearchABook;