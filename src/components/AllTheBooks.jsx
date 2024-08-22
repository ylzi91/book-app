import { Component } from "react";
import fantasyBooks from "../data/books/fantasy.json";
import historyBooks from "../data/books/history.json";
import horrorBooks from "../data/books/horror.json";
import romanceBooks from "../data/books/romance.json";
import scifiBooks from "../data/books/scifi.json";
import SingleBook from "./SingleBook";

const jSons = {
    fantasyBooks,
    historyBooks,
    horrorBooks,
    romanceBooks,
    scifiBooks
}


class AllTheBooks extends Component {



  render() {

    const genreBooks = jSons [this.props.myGenre]
    
    return genreBooks.filter((book) => 
      book.title.toLowerCase().includes(this.props.searchPassed.toLowerCase())).map((myBook, index) => {
        if (index > 10 && this.props.searchPassed === '') return
        return(
          
          <SingleBook myBook = {myBook} key = {myBook.asin}/>
        )
    })


    }
  }


export default AllTheBooks;
