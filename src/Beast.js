import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Main.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  handleHeaderClick = () => {
    this.props.handleOpenModal(this.props.name, this.props.imageURL, this.props.description);
  }

  render() {
    return (
      <Col style={{ margin: '1.5rem' }}>
        <Card >
          <article className="hornedBeast">
            <h2>{this.props.name}</h2>
            <div className='likeClicks'>
              <p className='likeButton' onClick={this.handleLikes}>Like!</p>
              <p>❤️{this.state.likes}</p>
            </div>
            <img
              src={this.props.imageURL}
              alt={this.props.keyword}
              onClick={this.handleHeaderClick}
              style={{ maxHeight: '18rem', maxWidth: '18rem' }}
            />
            <div className='beastInfo'>
              <p>{this.props.description}</p>
              <p>Horns: {this.props.horns}</p>
            </div>
          </article>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;