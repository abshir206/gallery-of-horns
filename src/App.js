import React from 'react';
import data from './data.json';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastName: '',
      beastImgURL: '',
      beastDescription: ''
    };
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenModal = (name, imageURL, description) => {
    this.setState({
      showModal: true,
      beastName: name,
      beastImgURL: imageURL,
      beastDescription: description
    });
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Main data={data} handleOpenModal={this.handleOpenModal} />
          </Row>
        </Container>
        <Footer />
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.beastName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img src={this.state.beastImgURL} alt={this.state.beastName}/>
          </Modal.Body>
          <Modal.Footer>{this.state.beastDescription}</Modal.Footer>
        </Modal>
      </>
    );
  }
}

// TEST: npm run start
export default App;