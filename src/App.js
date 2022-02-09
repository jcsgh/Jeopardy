import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    data: [],
    question: '',
    value: '',
    category: '',
    score: ''
  }

  handleClick = () => {
    fetch("http://jservice.io/api/random")
      .then(response => response.json())
      .then(json => console.log(json))
      .then(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1>Welcome to Jeopardy!</h1>

        <button onClick={this.handleClick}>Get question</button>

        <div>

        </div>
      </div>
    );
  }

}

export default App;
