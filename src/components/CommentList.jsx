import { Component } from "react";
import SingeComment from "./SingleComment";

class CommentList extends Component{
    state = {
        comments : []
    }

    componentDidMount(){
        this.takeComment()
    }

    componentDidUpdate(prevProps){
        if(prevProps.takeCom !== this.props.takeCom)
            this.takeComment()

    }
    
    takeComment = async () => {
        try{
            console.log('takeCommm', this.props.takeCom)
       const myComment = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.takeCom}`, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjODA2ZWZkZWUzZDAwMTU5YmRmMjYiLCJpYXQiOjE3MjQ2NzgyNTQsImV4cCI6MTcyNTg4Nzg1NH0.P-hqBUJZwCk0XSIfjVIJyVCPFhQ0N5RJevlD1GXuKiY"}
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