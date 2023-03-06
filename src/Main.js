import React from 'react';
import Beast from './Beast';
import './Main.css';

class Main extends React.Component {

  render() {
    let beasts = [];
    this.props.data.forEach((bea,idx) => {
      console.log(bea);
      beasts.push(
        <Beast
          title={bea.title}
          imageUrl={bea.image_url}
          key={idx}
          description={bea.description}
        />
      )

    })
    
    return (
      <main>
        {beasts}
      </main>
    )
  };
}

export default Main;



