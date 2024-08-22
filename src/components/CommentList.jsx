import { Component } from "react";
import SingeComment from "./SingleComment";

class CommentList extends Component{
    state = {
        comments : []
    }

    componentDidMount(){
        this.takeComment()
    }
    
    takeComment = async () => {
        try{
       const myComment = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.takeCom}`, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MzAzMjQzYTU2ODAwMTU4ZWMzZDYiLCJpYXQiOjE3MjQzMzAwMzQsImV4cCI6MTcyNTUzOTYzNH0.JQCwbIAxSaxtufq_7ixQrScXNHuma_V1C34tb6k-3j0"
        }
       })
       const ListComments = await myComment.json()
       this.setState({
        comments: ListComments
       })
    }
    catch {console.log('Errore')}
       
    }

    render(){
         return this.state.comments.map((com, index) => {
          return ( 
            <SingeComment key = {com._id}  com = {com}/>
            )
        })


    }
}

export default CommentList