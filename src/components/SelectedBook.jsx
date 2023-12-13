import { Link, useParams } from 'react-router-dom'
import './SelectedBook.css'

const SelectedBook =({bookList})=>{
  console.log("SelectedBook comp...." ,bookList)
  //get the id from url 
 const {id} = useParams();
 console.log("selected bookid  ",id);

  const selectedBook= bookList?.find((book)=>{
    console.log("bookList.id  " ,book.id)
    return book.id === Number(id);
  })
 
  console.log("selectedBookDetails  ",selectedBook)

  return (
  <div className='selectedBookDiv'> 
   <p>selected book.....</p>
   <img src={selectedBook?.coverimage} alt="" className="coverImage"/> 
   <ul className='bookDetails'>
    <li><span className="bold">Title : </span>{selectedBook?.title}</li>
    <li><span className="bold">Author : </span>{selectedBook?.author}</li>
    <li><span className="bold">Book Description : </span>{selectedBook?.description}</li>
    <li><span className="bold">Available to checkout : </span>{(selectedBook?.available?.toString())??"-"}</li>
   </ul>
   <Link to="/books">Back to all books</Link>
  </div>
  )
}

export default SelectedBook;