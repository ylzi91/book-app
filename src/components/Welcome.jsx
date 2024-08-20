import Alert from 'react-bootstrap/Alert'

function Welcome (){
    return (
        <Alert variant = "secondary" className=' w-50 mx-auto my-4 text-center'>
             <h1 className=' text-secondary '>Benvenuto nello shop dei libri</h1> 
             <h2>Un sacco di libri per tutti</h2>

        </ Alert>
    )
}

export default Welcome