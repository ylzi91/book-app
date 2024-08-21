
import { Card, Button, Col } from "react-bootstrap";

function SingleBook (props) {
    return(
        <Col sm={12} md={6} lg={2} className="mb-3">
              <Card className="h-100">
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