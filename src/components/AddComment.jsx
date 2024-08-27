import { Component, useEffect, useState } from "react";
import SingeComment from "./SingleComment";
import { Form, Button } from "react-bootstrap";

function AddComment (props) {

  const [comment, setComment] = useState('')
  const [rate, setRate] = useState('1')
  const [elementId, setElementId] = useState(props.idCom)
  const [mySaved, setMySaved] = useState (false)


  const writeComment = async (e) => {
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
          body: JSON.stringify({
            comment: comment, 
            rate: rate, 
            elementId: elementId}),
        },
      );
      setComment('')
      setRate('1')
      setMySaved(true)
    } catch {
      console.log("Errore");
    }
  };

  useEffect(() => {
    setElementId(props.idCom)
    setMySaved(false)
  }, [props.idCom])



    console.log('IDCOMM', props.idCom)
    return (
      <Form onSubmit={writeComment}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Scrivi Commento</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Scrivi qui il tuo commento" onChange={(e) =>{
            setComment(e.target.value)
            console.log(comment)
          }} value={comment} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Stelle</Form.Label>
          <Form.Select onChange={(e) => {
            setRate(e.target.value)
          }} value={rate}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Invia</Button>
          {mySaved && <p>Salvato correttamente</p>}
      </Form>
    );
  
}

export default AddComment;
