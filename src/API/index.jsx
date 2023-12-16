import axios from "axios";

//api calls only
//fetch all books api call
export const fetchBookList = async () => {
  //call api to get book list
  try {
    const { data } = await axios.get(
      "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books",
      {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${loggedInToken}`,
        },
      }
    );

    return data.books;
  } catch (error) {
    console.log(error);
  }
};

//update db with availability = false on book checkout
export const checkoutBook = async (bookId) => {
  try {
    const loggedInToken = window.localStorage.getItem("token");
    const response = await axios.patch(
      `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`,
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

    //update state with fresh data
    return response.data.book;
  } catch (error) {
    console.log(error);
  }
};

//deletes a book reservation
export const deleteReservation = async (bookId) => {
  try {
    const loggedInToken = window.localStorage.getItem("token");
    const response = await axios.delete(
      `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${bookId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loggedInToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//fetches all books checked out by a user
export const fetchAllCheckedoutBooks = async () => {
  try {
    const loggedInToken = window.localStorage.getItem("token");
    const response = await axios.get(
      "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loggedInToken}`,
        },
      }
    );

    return response.data.reservation;
  } catch (error) {
    console.log(error);
  }
};
