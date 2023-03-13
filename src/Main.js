import React from 'react';
import HornedBeast from './Beast';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast) => {
      return (
        <HornedBeast
          name={beast.title}
          imageURL={beast.image_url}
          keyword={beast.keyword}
          description={beast.description}
          horns={beast.horns}
          handleOpenModal={this.props.handleOpenModal}
          key={beast._id}
        />)
    });
    return (
        <Container>
          <Row>
            <main>
              {beasts}
            </main>
          </Row>
        </Container>
    );
  }
}

export default Main;


