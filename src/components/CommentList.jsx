import { Component } from "react";
import SingeComment from "./SingleComment";
import { useState, useEffect } from "react";

function CommentList (props) {


    const [comments, setComments] = useState([])

    useEffect(() => {
        if(props.takeCom)
        takeComment()
    }, [props.takeCom])

    
    const takeComment = async () => {
        try{
            console.log('takeCommm', props.takeCom)
       const myComment = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.takeCom}`, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjODA2ZWZkZWUzZDAwMTU5YmRmMjYiLCJpYXQiOjE3MjQ2NzgyNTQsImV4cCI6MTcyNTg4Nzg1NH0.P-hqBUJZwCk0XSIfjVIJyVCPFhQ0N5RJevlD1GXuKiY"}
       })
       const ListComments = await myComment.json()
       setComments(
        ListComments
       )
    }
    catch {console.log('Errore')}
       
    }


         return comments.map((com, index) => {
          return ( 
            <SingeComment key = {com._id}  com = {com}/>
            )
        })



}

export default CommentList