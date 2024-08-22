import { Component } from "react";
import SingeComment from "./SingleComment";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: this.props.idCom,
  };

  writeComment = async (e) => {
    e.preventDefault();
    try {
      const myComment = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MzAzMjQzYTU2ODAwMTU4ZWMzZDYiLCJpYXQiOjE3MjQzMzAwMzQsImV4cCI6MTcyNTUzOTYzNH0.JQCwbIAxSaxtufq_7ixQrScXNHuma_V1C34tb6k-3j0",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        },
      );
      this.setState({
        ...this.state,
        comment: '',
        rate: ''
      })
    } catch {
      console.log("Errore");
    }
  };

  render() {
    return (
      <Form onSubmit={this.writeComment}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Scrivi Commento</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Scrivi qui il tuo commento" onChange={(e) =>{
            this.setState({
                ...this.state,
                comment: e.target.value
            })
            console.log(this.state.comment)
          }} value={this.state.comment} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Stelle</Form.Label>
          <Form.Select onChange={(e) => {
            this.setState ({
                ...this.state,
                rate: e.target.value
            })
          }} value={this.state.rate}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit</Button>

      </Form>
    );
  }
}

export default AddComment;
