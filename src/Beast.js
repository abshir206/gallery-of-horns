import React from "react";
import './Beast.css';
import Card from 'react-bootstrap/Card'
//import './Main.js';

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waves: 0
    };
  }

  handleWaves = () => {
    this.setState({
      waves: this.state.waves +1,
    });
  }

  render() {
    return (
      <>
        <Card>
          <h2> {this.props.title} </h2>
          <p> 🖤{this.state.waves} Likes</p>
          <p onClick={this.handleWaves}> Favorite Beast</p>
          <img 
          src={this.props.imageUrl} 
          alt={this.props.description}
          title={this.props.title}
          />  
          <p> {this.props.description} </p>
        </Card>

      </>

        );
  }

};

export default Beast;