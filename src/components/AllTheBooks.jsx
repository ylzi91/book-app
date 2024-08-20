import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import fantasyBooks from "../data/books/fantasy.json";
import historyBooks from "../data/books/history.json";
import horrorBooks from "../data/books/horror.json";
import romanceBooks from "../data/books/romance.json";
import scifiBooks from "../data/books/scifi.json";

class AllTheBooks extends Component {
  render() {
    switch (this.props.myGenre) {
      case "fantasyBooks":
        return fantasyBooks.map((myBook, index) => {
          if (index > 10) return;
          return (
            <Col sm={12} md={6} lg={2} className="mb-3">
              <Card className="h-100">
                <Card.Img variant="top" src={myBook.img} />
                <Card.Body className=" d-flex flex-column">
                  <Card.Title className=" flex-grow-1 ">{myBook.title}</Card.Title>
                  <Card.Text className=" border-top p-2 border-black text-center">{myBook.price} €</Card.Text>
                  <Button variant="primary">Compra Ora</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        });
        case "historyBooks":
            return historyBooks.map((myBook, index) => {
                if (index > 3) return;
                return (
                  <Col sm={12} md={6} lg={3} className="mb-3">
                    <Card className="h-100">
                      <Card.Img variant="top" src={myBook.img} />
                      <Card.Body className=" d-flex flex-column">
                        <Card.Title className=" flex-grow-1 ">{myBook.title}</Card.Title>
                        <Card.Text className=" border-top p-2 border-black text-center">{myBook.price} €</Card.Text>
                        <Button variant="primary">Compra Ora</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              });
        case "horrorBooks":
            return horrorBooks.map((myBook, index) => {
                if (index > 3) return;
                return (
                  <Col sm={12} md={6} lg={3} className="mb-3">
                    <Card className="h-100">
                      <Card.Img variant="top" src={myBook.img} />
                      <Card.Body className=" d-flex flex-column">
                        <Card.Title className=" flex-grow-1 ">{myBook.title}</Card.Title>
                        <Card.Text className=" border-top p-2 border-black text-center">{myBook.price} €</Card.Text>
                        <Button variant="primary">Compra Ora</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              });
        case "scifiBooks":
            return scifiBooks.map((myBook, index) => {
                if (index > 3) return;
                return (
                  <Col sm={12} md={6} lg={3} className="mb-3">
                    <Card className="h-100">
                      <Card.Img variant="top" src={myBook.img} />
                      <Card.Body className=" d-flex flex-column">
                        <Card.Title className=" flex-grow-1 ">{myBook.title}</Card.Title>
                        <Card.Text className=" border-top p-2 border-black text-center">{myBook.price} €</Card.Text>
                        <Button variant="primary">Compra Ora</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              });
        case "romanceBooks":
            return romanceBooks.map((myBook, index) => {
                if (index > 3) return;
                return (
                  <Col sm={12} md={6} lg={3} className="mb-3">
                    <Card className="h-100">
                      <Card.Img variant="top" src={myBook.img} />
                      <Card.Body className=" d-flex flex-column">
                        <Card.Title className=" flex-grow-1 ">{myBook.title}</Card.Title>
                        <Card.Text className=" border-top p-2 border-black text-center">{myBook.price} €</Card.Text>
                        <Button variant="primary">Compra Ora</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              });


    }
  }
}

export default AllTheBooks;
