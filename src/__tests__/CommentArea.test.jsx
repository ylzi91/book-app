
import { render, screen } from "@testing-library/react"
import CommentArea from "../components/CommentArea"

describe('Controllo commentArea', function(){
    it('Vediamo se renderizza commment area', function(){
        render(<CommentArea clicked = {false} book= '' />)

       const areaComment = screen.getByTestId('area-comment')

        expect(areaComment).toBeInTheDocument()
   
    })
})