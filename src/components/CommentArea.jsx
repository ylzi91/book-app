import { Component } from "react";
import { Col, ListGroup, Tabs, Tab } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {

  render() {
    console.log('BOOOK', this.props.book)
    return (
      <Col>
        <Tabs
          defaultActiveKey="listComment"
          id="uncontrolled-tab-example"
          className="mb-3 little"
        >
          <Tab eventKey="listComment" title="Commenti">
            <ListGroup>
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
