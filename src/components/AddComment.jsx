import { Component } from "react";
import SingeComment from "./SingleComment";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
    elementId: this.props.idCom,
  };
  Saved = {
    mySaved: false
  }

  writeComment = async (e) => {
    e.preventDefault();
    try {
      const myComment = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjODA2ZWZkZWUzZDAwMTU5YmRmMjYiLCJpYXQiOjE3MjQ2NzgyNTQsImV4cCI6MTcyNTg4Nzg1NH0.P-hqBUJZwCk0XSIfjVIJyVCPFhQ0N5RJevlD1GXuKiY",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        },
      );
      this.setState({
        ...this.state,
        comment: '',
        rate: '1'
      })
      this.Saved.mySaved = true
    } catch {
      console.log("Errore");
    }
  };

  componentDidUpdate(){
    if(this.state.elementId !== this.props.idCom)
    this.setState({
      ...this.state,
      elementId: this.props.idCom
    })
  }

  render() {
    console.log('IDCOMM', this.props.idCom)
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
        <Button type="submit">Invia</Button>
          {this.Saved.mySaved && <p>Salvato correttamente</p>}
      </Form>
    );
  }
}

export default AddComment;
