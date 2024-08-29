

import { fireEvent, render, screen } from "@testing-library/react"
import AllTheBooks from "../components/AllTheBooks"
import ShowBook from "../components/ShowBook"
import fantasyBooks from "../data/books/fantasy.json";


describe('Test sulle card', function(){
    it('Controllo sulle card', function(){
        render(<AllTheBooks searchPassed= '' myGenre= 'fantasyBooks'/>)
        const arrayBook = screen.getAllByTestId('list-book')
        expect(arrayBook.length).toBeGreaterThan(0)
    })
    it('Vediamo se funziona la ricerca', function(){
        const titles = ['Libri Fantasy', 'Libri di Storia', 'Libri Horror', 'Libri Romantici', 'Libri Fantascienza']
        const genre = ['fantasyBooks', 'historyBooks', 'horrorBooks', 'romanceBooks', 'scifiBooks']

        render( <ShowBook genreTitle={titles} genreToPass={genre} />)

        const myInput = screen.getAllByPlaceholderText(/cerca/i)

        for(let i = 0 ; i < myInput.length ; i++){
            fireEvent.change(myInput[i], { target: { value: 'the' } })

        }

        const arrayBook = screen.getAllByTestId('list-book')

        expect(arrayBook.length).toBeGreaterThan(0)
    })
})