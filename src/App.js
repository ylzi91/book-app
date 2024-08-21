
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks';
import ShowBook from './components/ShowBook';

function App() {
  const titles = ['Libri Fantasy', 'Libri di Storia', 'Libri Horror', 'Libri Romantici', 'Libri Fantascienza']
  const genre = ['fantasyBooks', 'historyBooks', 'horrorBooks', 'romanceBooks', 'scifiBooks']


  return (
    <>
     <header>
        <MyNav />
     </header>
     <main>
        <Welcome />
        <Container fluid>
          <ShowBook genreTitle={titles} genreToPass={genre} />
        </Container>
     </main>
    </>
  );
}

export default App;
