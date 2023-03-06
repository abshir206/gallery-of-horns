import React from 'react';
import Main from './Main';
import './App.css';
import data from './data.json'

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Gallery of Horns</h1>
        </header>
        <Main data={data}/>
        <footer> Abshir Ibrahim</footer>
        

        
      </>


    );
  }
}

export default App;

