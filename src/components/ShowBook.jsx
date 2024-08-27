import { Row, Col } from "react-bootstrap";
import AllTheBooks from "./AllTheBooks";
import { render } from "@testing-library/react";
import { Component, useEffect, useState } from "react";
import CommentArea from "./CommentArea";

function ShowBook (props) {

  const [search, setSearch] = useState([])
  const [commentpass, setCommentPass] = useState([])
  const [clicked, setClicked] = useState (true)
  const changeState = (newSelBook) => {
    setCommentPass(newSelBook);
  };
  const changeSelect = (sel) => {
    setClicked(sel)
  }

  useEffect(() => {
    changeSelect(true)
  }, [commentpass])


    console.log("Commentopassss", commentpass);
    const elements = [];
    for (let i = 0; i < props.genreTitle.length; i++) {
      elements.push(
        <>
          <Row key={i}>
            <Col sm={12} md={6} lg={4}>
              <h4>{props.genreTitle[i]}</h4>
              <input
                onChange={(e) => {
                  e.preventDefault();
                  const newSearch = [...search];
                  newSearch[i] = e.target.value;
                  setSearch(newSearch,
                  );
                }}
                className="mb-2"
                type="text"
                placeholder="Cerca"
                value={search[i]}
              />
            </Col>
          </Row>
          <Row className=" d-flex flex-nowrap overflow-scroll">
            <AllTheBooks
              changeState={changeState} changeSelect = {changeSelect} clicked= {clicked}
              myGenre={props.genreToPass[i]}
              searchPassed={!search[i] ? "" : search[i]}
            />
          </Row>

        </>
      );
    }

    return (
      <>
      {(
        <CommentArea clicked = {clicked} book={commentpass} />
      )}

      
      {elements}
      </>) 
  
}

export default ShowBook;
