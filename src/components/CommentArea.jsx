import { Component } from "react";
import { Col, ListGroup, Tabs, Tab } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {

  render() {
    console.log('BOOOK', this.props.book)
    return (
      <Col style={{maxHeight: "250px", overflow: "scroll"}} className=" m-5 rounded-5 shadow bg-white position-fixed top-0 end-0 z-2 border border-2 border-black p-3 mb-3">
      Commenti del libro <h4> {this.props.book.title}</h4>
        <Tabs
          defaultActiveKey="listComment"
          id="uncontrolled-tab-example"
          className="mb-3 little"
        >
          <Tab eventKey="listComment" title="Commenti">
            <ListGroup className=" list-group-item-secondary">
              <CommentList takeCom={this.props.book.asin} />
            </ListGroup>
          </Tab>
          <Tab eventKey="profile" title="Aggiungi">
            <AddComment idCom={this.props.book.asin} />
          </Tab>
        </Tabs>
      </Col>
    );
  }
}

export default CommentArea;
