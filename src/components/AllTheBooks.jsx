import { Component } from "react";
import fantasyBooks from "../data/books/fantasy.json";
import historyBooks from "../data/books/history.json";
import horrorBooks from "../data/books/horror.json";
import romanceBooks from "../data/books/romance.json";
import scifiBooks from "../data/books/scifi.json";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const jSons = {
    fantasyBooks,
    historyBooks,
    horrorBooks,
    romanceBooks,
    scifiBooks
}


function AllTheBooks (props){

    console.log('ChangeeeeeeStte', props.changeState)
    const genreBooks = jSons [props.myGenre]
    
    return genreBooks.filter((book) => 
      book.title.toLowerCase().includes(props.searchPassed.toLowerCase())).map((myBook, index) => {
        if (index > 10 && props.searchPassed === '') return
        return(
          <>
          <SingleBook clicked = {props.clicked} changeSelect = {props.changeSelect}  changeState = {props.changeState} myBook = {myBook} key = {myBook.asin}/>
       
          </>
        )
    })

  }


export default AllTheBooks;
