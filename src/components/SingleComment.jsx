
import { ListGroup, ListGroupItem } from "react-bootstrap"

function SingeComment (props){
    return ( 
        <ListGroupItem>{props.com.comment} | {props.com.rate} {props.com.rate == "1" ? 'Stella' : 'Stelle'} </ListGroupItem>
    )

}

export default SingeComment