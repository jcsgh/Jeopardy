import { Component } from 'react';
import './App.css';
import Question from './components/Question';
import Category from './components/Category';
import Points from './components/Points'
import Answer from './components/Answer'
import Score from './components/Score'

class App extends Component {

  state = {
    questionObject: null,
    showAnswer: false
  }

  handleClick = async () => {
    try {
      const response = await fetch("http://jservice.io/api/random")
      const data = await response.json()
      console.dir(data)
      this.setState({
        questionObject: data[0],
        showAnswer: false
      })
    } catch (err) {
      console.log(err)
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://jservice.io/api/random")
      const data = await response.json()
      console.dir(data)
      this.setState({
        questionObject: data[0]
      })
    } catch (err) {
      console.log(err)
    }
  }

  showAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  render() {
    return (
      <div>

        <h1>Welcome to Jeopardy!</h1>

        <div>
          {this.state.questionObject && <Score questionObject={this.state.questionObject} />}
          <br/>
          <button onClick={this.handleClick}>Get question</button>
          {this.state.questionObject && <Question questionObject={this.state.questionObject} />}
          {this.state.questionObject && <Category questionObject={this.state.questionObject} />}
          {this.state.questionObject && <Points questionObject={this.state.questionObject} />}
        </div>

        <div>
          <button onClick={this.showAnswer}>Show/hide answer</button>
          {this.state.showAnswer && <Answer questionObject={this.state.questionObject} />}
        </div>

      </div>
    );
  }

}



export default App;
