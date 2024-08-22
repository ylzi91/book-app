import { Row, Col } from "react-bootstrap";
import AllTheBooks from "./AllTheBooks";
import { render } from "@testing-library/react";
import { Component } from "react";



class ShowBook extends Component {

    state = {
        search : []
        
    }


    render(){


  const elements = [];
  for (let i = 0; i < this.props.genreTitle.length; i++) {
    elements.push(
      <>
        <Row key = {i}>
          <Col sm={12} md={6} lg={4}>
            <h4>{this.props.genreTitle[i]}</h4> 
            <input onChange={ (e) => {
                e.preventDefault()
                const newSearch = [...this.state.search]
                newSearch[i] = e.target.value
                this.setState({
                    search: newSearch
                })
                
                
            } } className="mb-2" type="text" placeholder= "Cerca" value={this.state.search[i]} />
          </Col>
          
        </Row>
        <Row className=" d-flex flex-nowrap overflow-scroll">
          <AllTheBooks myGenre = {this.props.genreToPass[i]} searchPassed = {!this.state.search[i] ? '' : this.state.search[i]} />
        </Row>
      </>
    );
  }

  
  return elements;
}
}

export default ShowBook