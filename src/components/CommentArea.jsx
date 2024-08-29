import { Component } from "react";
import { Col, ListGroup, Tabs, Tab } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function CommentArea(props) {


    console.log('BOOOK', props.book)
    return (
      <Col data-testid = 'area-comment' style={{maxHeight: "250px", overflow: "scroll"}} className=" m-5 rounded-5 shadow bg-white position-fixed top-0 end-0 z-2 border border-2 border-black p-3 mb-3">
      Commenti del libro <h4>{props.clicked && props.book.title}</h4>
        <Tabs
          defaultActiveKey="listComment"
          id="uncontrolled-tab-example"
          className="mb-3 little"
        >
          <Tab eventKey="listComment" title="Commenti">
            <ListGroup className=" list-group-item-secondary">
             {props.clicked && <CommentList takeCom={props.book.asin} /> } 
            </ListGroup>
          </Tab>
          <Tab eventKey="profile" title="Aggiungi">
            <AddComment idCom={props.book.asin} />
          </Tab>
        </Tabs>
      </Col>
    );
}

export default CommentArea;
