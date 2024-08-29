import { render, screen } from "@testing-library/react"
import Welcome from "../components/Welcome"


describe('Vediamo se viene montato correttamente', function(){
    it('Vediamo se Welcome funziona', function(){
        render(<Welcome />)

        const myAlert = screen.getByRole('alert')
        expect(myAlert).toBeInTheDocument()
    })
})

