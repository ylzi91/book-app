
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
     <header>
        <MyNav />
     </header>
     <main>
        <Welcome />
        <Container fluid>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <h4>Libri fantasy</h4>
              </Col>
            </Row>
                <Row className=' d-flex flex-nowrap overflow-scroll'>
                <AllTheBooks myGenre = "fantasyBooks" />
              </ Row>
            <Row>
              <Col sm={12} md={6} lg={4} >
                <h4>Libri di storia</h4>
              </Col>
            </Row>
                <Row>
                <AllTheBooks myGenre = "historyBooks" />
              </ Row>
            <Row>
              <Col sm={12} md={6} lg={4} >
                <h4>Libri horror</h4>
              </Col>
            </Row>
                <Row>
                <AllTheBooks myGenre = "horrorBooks" />
              </ Row>
            <Row>
              <Col sm={12} md={6} lg={4} >
                <h4>Libri Romantici</h4>
              </Col>
            </Row>
                <Row>
                <AllTheBooks myGenre = "romanceBooks" />
              </ Row>
            <Row>
              <Col sm={12} md={6} lg={4} >
                <h4>Libri FantaScienza</h4>
              </Col>
            </Row>
                <Row>
                <AllTheBooks myGenre = "scifiBooks" />
              </ Row>

        </Container>
     </main>
    </>
  );
}

export default App;
