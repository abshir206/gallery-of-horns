import React from 'react';
import './Main.css';

class Header extends React.Component {
  render() {

    return (
      <>
        <header>
          <h1>Gallery of Beasts{this.props.totalLikes}</h1>
        </header>
      </>
   );
  }
}

export default Header;


