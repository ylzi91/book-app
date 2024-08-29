
import { Card, Button, Col } from "react-bootstrap";
import React, { useEffect } from 'react';
import CommentArea from "./CommentArea";

function SingleBook (props) {


  const handleClick = () => {
    !props.clicked ? props.changeSelect(true) : props.changeSelect(false)

  
  };
    return(
        <Col data-testid = "list-book" sm={12} md={6} lg={3} className="mb-3"> 
              <Card className={`h-100`} style={{cursor: 'pointer'}} onClick={(e) => {
                e.preventDefault()
                 props.changeState(props.myBook)
                 handleClick()
                 } }>
                <Card.Img variant="top" src={props.myBook.img} />
                <Card.Body className=" d-flex flex-column">
                  <Card.Title className=" flex-grow-1 ">{props.myBook.title}</Card.Title>
                  <Card.Text className=" border-top p-2 border-black text-center">{props.myBook.price} €</Card.Text>
                  <Button variant="primary">Compra Ora</Button>
                </Card.Body>
              
              </Card>
        </Col>
    )
}

export default SingleBook