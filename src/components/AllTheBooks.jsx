import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
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

 state = {
  search: ''
 }


  render() {

    const genreBooks = jSons [this.props.myGenre]
    
    
    return genreBooks.map((myBook, index) => {
        if (index > 10) return
        return(
            <SingleBook myBook = {myBook} />
        )
    })


    }
  }


export default AllTheBooks;
