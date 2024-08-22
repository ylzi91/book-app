import { Component } from "react";
import { Card, ListGroup, Tabs, Tab } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component{
    
    
    render(){
        return (
            <Tabs
            defaultActiveKey="listComment"
            id="uncontrolled-tab-example"
            className="mb-3 little"
          >
            <Tab eventKey="listComment" title="Commenti">
              <CommentList takeCom = {this.props.book.asin}/>
            </Tab>
            <Tab eventKey="profile" title="Aggiungi">
              <AddComment idCom = {this.props.book.asin}/>
            </Tab>
            </Tabs>
          );
        


    }
}

export default CommentArea