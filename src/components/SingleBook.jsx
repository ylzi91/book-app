
import { Card, Button, Col } from "react-bootstrap";
import React, { useState } from 'react';
import CommentArea from "./CommentArea";

function SingleBook (props) {

  const [border, setBorderColor] = useState('');
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setBorderColor(border === '' ? ' border-danger' : '');
    setSelected(selected === false ? true : false)
  };
  console.log(selected)
    return(
        <Col sm={12} md={6} lg={3} className="mb-3"> 
              <Card className={`h-100 ${border}`} onClick={(e) => {
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