import React from 'react';
import { connect } from 'react-redux'


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/patterns', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  render(){

    return (
      <div className="App">
        <h1>
          Fly Pattern App
        </h1>
      </div>
    );
  }
}

export default connect()(App);
